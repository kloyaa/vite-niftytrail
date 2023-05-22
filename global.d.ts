
declare module '@iconscout/react-unicons' {
    export const UilAirplay: any;
    export const UilSignInAlt: any;
    // Add any other exports you need here
}
declare module "crypto" {
    interface ScryptOptions {
      N?: number;
      r?: number;
      p?: number;
      maxmem?: number;
    }
    function scryptSync(
      password: BinaryLike,
      salt: BinaryLike,
      keylen: number,
      options?: ScryptOptions
    ): Buffer;
}
  