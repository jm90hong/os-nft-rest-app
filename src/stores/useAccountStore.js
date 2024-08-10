import { create } from 'zustand'



const useAccountStore = create((set) => ({
    account:'',
    nfts:[],
    

    setAccount: (account) => set(() => ({ account: account })),
    setNfts:(nfts) => set(() => ({ nfts: nfts })),
    clearAccount: () => set({ account: '', nfts: [] })
    
  }));

  export default useAccountStore;