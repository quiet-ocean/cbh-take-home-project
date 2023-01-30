const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  const data = typeof event !== "string" ? JSON.stringify(event) : event;
  
  let candidate = event && (event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(data).digest("hex")) || TRIVIAL_PARTITION_KEY

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? deterministicPartitionKey(candidate) : candidate;

};