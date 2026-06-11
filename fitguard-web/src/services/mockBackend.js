import MockAdapter from 'axios-mock-adapter';
import apiClient from './apiClient';

// Initialize mock adapter
export const mock = new MockAdapter(apiClient, { delayResponse: 800 });

// Fake In-Memory Data Store
let users = {
  'u_123': {
    id: 'u_123',
    name: 'Alex Mercer',
    email: 'athlete@example.com',
    sport: 'athletics',
    age: 26,
    weight: 80,
    height: 185
  }
};

let injuries = [
  {
    id: 'inj_1',
    muscleGroup: 'Hamstring',
    injuryType: 'Microtear',
    severity: 'High',
    description: 'R. Hamstring Microtear. Reported 2 days ago. Load management enforced.',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'inj_2',
    muscleGroup: 'Ankle',
    injuryType: 'Sprain (Grade 1)',
    severity: 'Low',
    description: 'L. Ankle Sprain. Cleared for play. Continuing preventative taping.',
    date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
  }
];

let challenges = [
  {
    id: 'chal_1',
    title: 'Sprint Load Optimization',
    description: 'Reduce max velocity sprints by 15% today to mitigate identified hamstring tension risk.',
    targetVelocity: '< 8.5 m/s',
    volumeLimit: '1200m',
    status: 'active',
    date: new Date().toISOString()
  }
];

let recoveryProtocols = [
  {
    id: 'rec_1',
    title: 'Cryotherapy & Compression',
    description: 'Post-match lower body protocol.',
    status: 'active',
    progress: '25/45 min',
    steps: [
      { name: 'Ice Bath (10 min)', completed: true },
      { name: 'Pneumatic Compression (30 min)', completed: false },
      { name: 'Mobility Flow (5 min)', completed: false }
    ],
    date: new Date().toISOString()
  }
];

// --- AUTH ENDPOINTS ---
mock.onPost('/auth/login').reply(config => {
  const { email, password } = JSON.parse(config.data);
  if (email && password) {
    return [200, {
      access_token: 'fake-jwt-token-12345',
      user: users['u_123']
    }];
  }
  return [401, { message: 'Invalid credentials' }];
});

mock.onPost('/auth/register').reply(config => {
  const data = JSON.parse(config.data);
  const newUser = { id: 'u_' + Math.floor(Math.random() * 1000), ...data };
  users[newUser.id] = newUser;
  return [201, {
    access_token: 'fake-jwt-token-' + newUser.id,
    user: newUser
  }];
});

mock.onPost('/auth/logout').reply(200, { message: 'Logged out' });

mock.onPost('/auth/refresh-token').reply(200, {
  access_token: 'fake-jwt-token-refreshed'
});

// --- PROFILE ENDPOINTS ---
mock.onGet('/user/profile').reply(200, users['u_123']);

mock.onPut('/user/profile').reply(config => {
  const data = JSON.parse(config.data);
  users['u_123'] = { ...users['u_123'], ...data };
  return [200, users['u_123']];
});

// --- INJURY ENDPOINTS ---
mock.onGet('/injuries').reply(200, injuries);

mock.onGet(/\/injuries\/inj_\d+/).reply(config => {
  const id = config.url.split('/').pop();
  const injury = injuries.find(i => i.id === id);
  return injury ? [200, injury] : [404, { message: 'Not found' }];
});

mock.onPost('/injuries').reply(config => {
  const data = JSON.parse(config.data);
  const newInjury = {
    id: 'inj_' + Math.floor(Math.random() * 1000),
    ...data,
    date: new Date().toISOString()
  };
  injuries.push(newInjury);
  return [201, newInjury];
});

mock.onPut(/\/injuries\/inj_\d+/).reply(config => {
  const id = config.url.split('/').pop();
  const data = JSON.parse(config.data);
  const index = injuries.findIndex(i => i.id === id);
  if (index !== -1) {
    injuries[index] = { ...injuries[index], ...data };
    return [200, injuries[index]];
  }
  return [404, { message: 'Not found' }];
});

mock.onDelete(/\/injuries\/inj_\d+/).reply(config => {
  const id = config.url.split('/').pop();
  injuries = injuries.filter(i => i.id !== id);
  return [200, { message: 'Deleted' }];
});

mock.onGet('/injuries/patterns').reply(200, {
  patterns: [
    { riskLevel: 'High', area: 'Hamstring', advice: 'Reduce sprint volume' }
  ]
});

// --- CHALLENGE ENDPOINTS ---
mock.onGet('/challenges').reply(200, challenges);
mock.onGet('/challenges/active').reply(200, challenges.filter(c => c.status === 'active'));
mock.onPost('/challenges/generate').reply(config => {
  const newChallenge = {
    id: 'chal_' + Math.floor(Math.random() * 1000),
    title: 'AI Generated Recovery Challenge',
    description: 'Perform active recovery and focus on mobility to reduce muscle tightness.',
    status: 'active',
    date: new Date().toISOString()
  };
  challenges.push(newChallenge);
  return [201, newChallenge];
});

// --- RECOVERY ENDPOINTS ---
mock.onGet('/recovery').reply(200, recoveryProtocols);
mock.onGet('/recovery/active').reply(200, recoveryProtocols.filter(r => r.status === 'active'));
mock.onPost('/recovery/generate').reply(config => {
  const newProtocol = {
    id: 'rec_' + Math.floor(Math.random() * 1000),
    title: 'AI Generated Protocol',
    description: 'Custom protocol based on recent telemetry.',
    status: 'active',
    progress: '0 min',
    steps: [{ name: 'Stretching', completed: false }],
    date: new Date().toISOString()
  };
  recoveryProtocols.push(newProtocol);
  return [201, newProtocol];
});
