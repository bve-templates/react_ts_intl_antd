declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.png';
declare module '*.ico';
declare module 'react-redux';
declare interface Window {
  React: any;
}
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare interface Window {
  ethereum: any;
  __WEB3_CHAIN__CONFIG__: {
    addEthereumChain: {
      chainId: string;
      chainName: string;
      rpcUrls: string[];
      blockExplorerUrls: string[];
      nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
      };
    };
    name: string;
    // 目录/src/assets/svgs
    icon: string;
    ExchangeProxy: string;
    NFT: string;
    TransferProxy: string;
    Farm: string;
    defaultTokenIndex: number;
    tokens: {
      [key: string]: {
        symbol: string;
        decimals: number;
        toFixed: number;
        address: string;
        approveAmount: string;
        type?: number;
        assetType: number;
      };
    };
    decimals: {
      LAND: number;
    };
  };
}
