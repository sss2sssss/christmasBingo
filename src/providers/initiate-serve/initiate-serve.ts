export class InitiateServeProvider {
  private initiate: boolean = false
  constructor() {
    
  }

  getInitiate(){
    return this.initiate;
  }

  setInitiate(initiate: boolean){
    this.initiate = initiate;
  }

}
