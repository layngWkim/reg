let str = `
010-1234-5678
t0tooo@naver.com
https://www.omdbapi.com
lorem Lorem fox
aabbccddddd lorem.
Lorem frozen
http://www.kuku.com
동해물과 백두산_
`

console.log(str.match(/(?<=@).{1,}/g))
