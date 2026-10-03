import type { NetworkSettings } from "../config";

export type SubnetLayout = {
  publicSubnetCidrs: string[];
  privateAppSubnetCidrs: string[];
  privateDbSubnetCidrs: string[];
  availabilityZones: string[];
};

export function resolveSubnetLayout(network: NetworkSettings): SubnetLayout {
  const expected = network.availabilityZones.length;
  validateSubnetCount("publicSubnetCidrs", network.publicSubnetCidrs, expected);
  validateSubnetCount("privateAppSubnetCidrs", network.privateAppSubnetCidrs, expected);
  validateSubnetCount("privateDbSubnetCidrs", network.privateDbSubnetCidrs, expected);

  return {
    publicSubnetCidrs: network.publicSubnetCidrs,
    privateAppSubnetCidrs: network.privateAppSubnetCidrs,
    privateDbSubnetCidrs: network.privateDbSubnetCidrs,
    availabilityZones: network.availabilityZones,
  };
}

function validateSubnetCount(name: string, values: string[], expected: number) {
  if (values.length !== expected) {
    throw new Error(`${name} must contain exactly ${expected} CIDR blocks`);
  }
}
