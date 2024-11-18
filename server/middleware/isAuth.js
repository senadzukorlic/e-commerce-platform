const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization") //Dohvatamo Authorization zaglavlje koje je korisnik poslao,u kojem se izmedju ostalog nalazi i token koji korisnik poseduje
  if (!authHeader) {
    return res.status(401).json({ message: "Not authenticated." }) //Ako nema zaglavlja,korisnik nije provaljen.Saljemo poruku obavestenja i postavljamo status kod 401,koji se koristi kada korisnik nije autentifikovan
  }
  const token = authHeader.split(" ")[1] //izdvajamo token iz zaglavlja split metodom
  let decodedToken
  try {
    decodedToken = jwt.verify(token, "somesupersecret") //vrsimo validaciju (proveru) tokena koji je korsinik poslao metodom "verify",u kojoj definisemo 2 vrednosti.Prva je token koji smo izvukli iz authorization zaglavlja a druga je tajni kljuc koji smo definisali na serveru.
  } catch (err) {
    return res.status(500).json({ message: "Token verification failed." }) //Greska u verifikaciji
  }
  if (!decodedToken) {
    return res.status(401).json({ message: "Not authenticated." }) //ako token nije ispravan ili tajni kljuc nije tacan,vracamo 401 i saljemo obavestajnu poruku
  }
  req.userId = decodedToken.userId //ako je sve proslo kako treba,cuvamo token koji je prosao proces validacije u instanci "req.userId".
  next()
}
