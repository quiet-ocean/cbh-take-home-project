const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
    console.log(trivialKey)
  });
  it("Returns partition key when given a partition key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "partitionKey" });
    expect(trivialKey).toBe("partitionKey");
    console.log(trivialKey)
  })
  it("Returns partition key", () => {
    const trivialKey = deterministicPartitionKey({ randomKey: 'random partition key' });
    expect(trivialKey.length).toBeGreaterThan(0)
    console.log(trivialKey)
  })
});
