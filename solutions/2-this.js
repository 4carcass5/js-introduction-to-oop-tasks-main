let make = (numer = null, denom = null) => {
    let rational = {
      numer,
      denom,
      setNumer(numer) { this.numer = numer },
      setDenom(denom) { this.denom = denom },
      getNumer() { return this.numer },
      getDenom() { return this.denom },
      toString() { return `${this.numer}/${this.denom}` },
      add(other) {
        const commonDenom = this.denom * other.denom;
        const numer = this.numer * other.denom + other.numer * this.denom;
        return make(numer, commonDenom);
      }
    };
    return rational;
  }
  
  export default make;