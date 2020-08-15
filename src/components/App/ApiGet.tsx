import axios from 'axios';
 
export const ApiGet_Simple = (URL:string):void => {
    const data = { yt_link: "cwgf2ttTyzI" };
    axios
        .get(URL)
        .then((results) => {
            console.log("body", results.data);
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
        });
};