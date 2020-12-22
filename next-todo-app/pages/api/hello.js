// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const response = {
    name: 'John Doe',
    city: 'Paderborn',
    age: 32,
  }
  res.statusCode = 200
  res.json(response)
}
