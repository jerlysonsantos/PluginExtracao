const Client = {
  connect: jest.fn(),
  query: jest.fn(),
  end: jest.fn(),
};

module.exports = {
  Client,
};
