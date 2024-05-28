const initializeApp = jest.fn();

const database = jest.fn().mockReturnValue({
  ref: jest.fn().mockReturnThis(),
  child: jest.fn().mockReturnThis(),
  set: jest.fn().mockResolvedValue(null),
  update: jest.fn().mockResolvedValue(null),
  once: jest.fn().mockResolvedValue({
    val: jest.fn().mockReturnValue({}),
  }),
});

const credential = {
  cert: jest.fn(),
};

module.exports = {
  initializeApp,
  database,
  credential,
};
