



export async function get(req, res, next) {

  const { slug } = req.params;
  
  res.setHeader('Content-Type', 'application/json');
  res.end(`{ "test": "${slug}"}`);

}