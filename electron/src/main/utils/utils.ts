import { session } from "electron";

export const getCookiesFromPartition = (partition: string) => {
  const ses = session.fromPartition(partition);
  return new Promise((resolve, reject) => {
    ses.cookies
      .get({})
      .then((cookies) => {
        const cookieValues = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const cookie of cookies) {
          cookieValues.push(`${cookie.name}=${cookie.value}`);
        }
        console.log(partition, cookieValues);
        resolve(cookieValues.join("; "));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
