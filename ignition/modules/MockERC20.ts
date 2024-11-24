import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MockERC20Module = buildModule("MockERC20", (m) => {
  const mockToken = m.contract("MockERC20", ["Mock Token", "MTK", "1000000000000000000000000"]);

  return { mockToken };
});

export default MockERC20Module;
