# TC Kimlik Numarası Sorgulama ve Doğrulama
[**NVI (Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü)**](https://tckimlik.nvi.gov.tr/) web servis kaynağı kullanılarak geliştirilmiş olan kimlik doğrulama sınıfıdır.


### Gereksinimler: 
  - [Soap Client](https://www.npmjs.com/package/soap)


### Kullanım:
```js
const CheckIdentity = async () => {
  const Identity = new TCIdentity()
    .setIDNumber(10000000000)
    .setBirthYear(1970)
    .setName('İsim')
    .setSurname('Soyisim');

  const IsValid = await Identity.check();
  console.log(IsValid); // false
}

CheckIdentity();
```
