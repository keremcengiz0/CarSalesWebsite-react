export const PostWithoutAuth = (url, body) => {

    var request = fetch(url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(body),
      });

    return request;
}