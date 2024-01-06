

const fetcher=(url:any)=>fetch(url).then((res)=>res.json());

export default fetcher;