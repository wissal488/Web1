var url=require('url');
var adr='http://localhost:8080/default.htmlyear=2020&month=omarFala&day=WissalAjbabdi';
var q=url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata);
console.log(qdata.month);