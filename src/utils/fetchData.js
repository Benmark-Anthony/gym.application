export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae745333damsha7a23ace2afa23dp12dbfdjsn24136178ebfa',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  

    return data;
}