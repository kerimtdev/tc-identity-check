import * as soap from 'soap';

export default class TCIdentity {
  private IDNumber: number;
  private BirthYear: number;
  private Name: string;
  private Surname: string;


  public setIDNumber = (IDNumber: number): TCIdentity => {
    this.IDNumber = IDNumber;
    return this;
  }

  public setBirthYear = (BirthYear: number): TCIdentity => {
    this.BirthYear = BirthYear;
    return this;
  }

  public setName = (Name: string): TCIdentity => {
    this.Name = Name;
    return this;
  }

  public setSurname = (Surname: string): TCIdentity => {
    this.Surname = Surname;
    return this;
  }


  private getRequestBody = () => {
    return {
      TCKimlikNo: this.IDNumber,
      DogumYili: this.BirthYear,
      Ad: this.Name,
      Soyad: this.Surname,
    };
  }

  public check = async () => {
    return await
      soap.createClientAsync('https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL')
        .then((client: any) => client.TCKimlikNoDogrulaAsync(this.getRequestBody()))
        .then((data: any) => data[0].TCKimlikNoDogrulaResult)
  }
}