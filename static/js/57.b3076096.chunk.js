(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[57],{737:function(e,a,t){"use strict";t.r(a);var l=t(650),n=t(1),i=t.n(n),c=t(125),r=t(58),u=t(656),s=t(657),o=t(658),m=t(654),d=function(e){var a=Object(n.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),t=Object(l.a)(a,2),r=t[0],s=t[1],o=Object(n.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),d=Object(l.a)(o,2),E=d[0],b=d[1],f=Object(n.useState)(0),p=Object(l.a)(f,2),h=p[0],k=p[1],v=Object(n.useState)([{value:"LR",label:"LR"}]),g=Object(l.a)(v,2),y=g[0],x=(g[1],Object(n.useState)([{value:"KR",label:"Republic of Korea"},{value:"JP",label:"Japan"},{value:"SG",label:"Singapore"},{value:"MY",label:"Malaysia"}])),O=Object(l.a)(x,2),j=O[0],S=(O[1],Object(n.useState)([{value:"01",label:"Gas Carrier"},{value:"02",label:"Oil Tanker"},{value:"03",label:"Bulk Carrier"},{value:"04",label:"General Cargo/Multipurpose"}])),C=Object(l.a)(S,2),K=C[0],N=(C[1],Object(n.useState)([{value:"01",label:"Load Line"},{value:"02",label:"SC"},{value:"03",label:"SE"},{value:"04",label:"SR"},{value:"05",label:"IOPP"},{value:"06",label:"IAPP"}])),I=Object(l.a)(N,2),D=I[0],M=(I[1],function(e){console.log(e)}),R=function(){var a=e.certificate,t={id:null,title:"",issuingauthority:"LR",dateofissue:"2020-06-03",dateofexpiry:"2026-07-04"};t.id=a[a.length-1].id+1,a.push(t),s(a),k(h+1),e.calleback(h),e.kirimCertificate(r)},F=function(){var a=e.informasi,t={id:null,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""};t.id=a[a.length-1].id+1,a.push(t),b(a),k(h+1),e.calleback(h),e.kirimInformasi(E)},T=function(){var a=e.certificate;a.length>1?(a.pop(),s(a),k(h+1),e.calleback(h),e.kirimCertificate(r),console.log("ini bro",r)):alert("Tidak Bisa Menghapus Row Terakhir")},P=function(){var a=e.informasi;a.length>1?(a.pop(),b(a),k(h+1),e.calleback(h),e.kirimInformasi(E)):alert("Tidak Bisa Menghapus Row Terakhir")};return Object(n.useEffect)((function(){console.log(Date.now()),s(e.certificate),b(e.informasi)})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("h4",null,"Data Kapal")),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"negarapelapor"},"Otoritas PSC"),i.a.createElement(m.a,{value:j[0],options:j,isDisabled:!0})))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"namakapal"},"Nama Kapal"),i.a.createElement(c.Q,{value:"Meratus Jimbaran",disabled:!0,id:"namakapal",type:"text",placeholder:"Masukkan Nama Kapal"}))),i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"namakapal"},"Tipe Kapal"),i.a.createElement(m.a,{value:K[1],isDisabled:!0,options:K})))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"callsign"},i.a.createElement("i",null,"Call Sign")),i.a.createElement(c.Q,{value:"9M2093",disabled:!0,id:"callsign",type:"text",placeholder:"Masukkan Call Sign"}))),i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"mmsinumber"},"Nomor MMSI"),i.a.createElement(c.Q,{value:"236475829",disabled:!0,id:"mmsinumber",type:"text",placeholder:"Masukkan Nomor MMSI"}))),i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"imonumber"},"Nomor IMO"),i.a.createElement(c.Q,{value:"9537630",disabled:!0,id:"imonumber",type:"text",placeholder:"Masukkan Nomor IMO"})))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"gt"},i.a.createElement("i",null,"Gross Tonnage")),i.a.createElement(c.Q,{value:"43506.00",disabled:!0,id:"gt",type:"text",placeholder:"Masukkan Gross Tonnage"}))),i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"dw"},i.a.createElement("i",null,"Dead Weight")),i.a.createElement(c.Q,{value:"32206.00",disabled:!0,id:"dw",type:"text",placeholder:"Masukkan Dead Weight"}))),i.a.createElement(c.u,{xs:"4"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"dw"},"Tanggal ",i.a.createElement("i",null,"Keel Laid")),i.a.createElement(c.Q,{disabled:!0,value:"2005-07-04",id:"tglkeellaid",type:"date"})))),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"6"},i.a.createElement("div",null,i.a.createElement("h4",null,"Data Inspeksi")),i.a.createElement("div",{className:"borderleft"},i.a.createElement("div",{className:"pr-4"},i.a.createElement("hr",null)),i.a.createElement(c.ub,{className:"pr-4"},i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Tanggal Inspeksi")),i.a.createElement(c.Q,{disabled:!0,value:"2020-08-10",id:"tglinspeksi",type:"date"}))),i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tempatinspeksi"},i.a.createElement("i",null,"Tempat Inspeksi")),i.a.createElement(c.Q,{disabled:!0,value:"INCHEON",id:"tempatinspeksi",type:"text",placeholder:"Masukkan Tempat Inspeksi"})))),i.a.createElement(c.ub,{className:"pr-4"},i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Classification Society")),i.a.createElement(m.a,{isDisabled:!0,value:y[0],options:y}))),i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tempatinspeksi"},i.a.createElement("i",null,"Date of Release from Detention")),i.a.createElement(c.Q,{disabled:!0,value:"2020-05-04",id:"tempatinspeksi",type:"date"})))))),i.a.createElement(c.u,{xs:"6"},i.a.createElement("div",null,i.a.createElement("h4",null,"Data Perusahaan")),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement(c.ub,{className:"pr-3"},i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"IMO Company Number")),i.a.createElement(c.Q,{value:"283940",disabled:!0,id:"tglinspeksi",type:"text",placeholder:"Masukkan IMO Company Number"}))),i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tempatinspeksi"},i.a.createElement("i",null,"Particulars of Company")),i.a.createElement(c.Q,{disabled:!0,id:"tempatinspeksi",type:"text",value:" ",placeholder:"Masukkan Particulars of Company"})))),i.a.createElement(c.ub,{className:"pr-3"},i.a.createElement(c.u,{xs:"12"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Name of Master")),i.a.createElement(c.Q,{value:"JOHN",disabled:!0,type:"text",placeholder:"Masukkan Name of Master"}))))))),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("h4",null,i.a.createElement("i",null,"Detail of Ship Certificates"))),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"12"},i.a.createElement(c.y,{fields:u.c,items:e.certificate,addTableClasses:"joss",scopedSlots:{title:function(e){return i.a.createElement("td",null,i.a.createElement(m.a,{isDisabled:!0,value:D[e.title],onChange:M,options:D}))},no:function(e){return console.log(e),i.a.createElement("td",null,e.id)},issuingauthority:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{disabled:!0,value:e.issuingauthority}))},dateofissue:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.dateofissue,disabled:!0,type:"date"}))},dateofexpiry:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.dateofexpiry,disabled:!0,type:"date"}))},action:function(e){return i.a.createElement("td",null,i.a.createElement(c.f,{disabled:!0,size:"sm",onClick:R,color:"success"},"+")," ",i.a.createElement(c.f,{disabled:!0,size:"sm",onClick:T,color:"danger"},"-"))}}}))),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("h4",null,i.a.createElement("i",null,"Information on Last Intermediate or Annual Survey"))),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"12"},i.a.createElement(c.y,{fields:u.b,items:E,addTableClasses:"joss",scopedSlots:{date:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.date,disabled:!0,type:"date"}))},no:function(e){return i.a.createElement("td",null,e.id)},surveyingauthority:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.surveyinguathority,disabled:!0,type:"text"}))},place:function(e){return i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.place,disabled:!0,type:"text"}))},action:function(e){return i.a.createElement("td",null,i.a.createElement(c.f,{disabled:!0,size:"sm",onClick:F,color:"success"},"+")," ",i.a.createElement(c.f,{disabled:!0,size:"sm",onClick:P,color:"danger"},"-"))}}}))),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{md:"3"},i.a.createElement(c.ab,null,"Deficiencies")),i.a.createElement(c.u,{md:"3"},i.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},i.a.createElement(c.R,{checked:!0,disabled:!0,custom:!0,id:"inline-checkbox",name:"inline-checkbox",value:"option2"}),i.a.createElement(c.ab,{variant:"custom-checkbox",htmlFor:"inline-checkbox"},"Yes")))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{md:"3"},i.a.createElement(c.ab,null,"Ship Detained")),i.a.createElement(c.u,{md:"3"},i.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},i.a.createElement(c.R,{checked:!0,disabled:!0,custom:!0,id:"inline-checkbox2",name:"inline-checkbox2",value:"option2"}),i.a.createElement(c.ab,{variant:"custom-checkbox",htmlFor:"inline-checkbox2"},"Yes")))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{md:"3"},i.a.createElement(c.ab,null,"Supporting Documentation")),i.a.createElement(c.u,{md:"3"},i.a.createElement(c.K,{variant:"custom-checkbox",inline:!0},i.a.createElement(c.R,{checked:!0,disabled:!0,custom:!0,id:"inline-checkboxx",name:"inline-checkboxx",value:"option2"}),i.a.createElement(c.ab,{variant:"custom-checkbox",htmlFor:"inline-checkboxx"},"Yes")))),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("h4",null,"Data Penerbit")),i.a.createElement("hr",null),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"12"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Issuing Office")),i.a.createElement(c.Q,{value:"INCHEON",disabled:!0,id:"issuingoffice",type:"text",placeholder:"Masukkan Issuing Office"})))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Telephone")),i.a.createElement(c.Q,{value:"+82-32-880-6453",disabled:!0,id:"issuingoffice",type:"text",placeholder:"Masukkan Telephone"}))),i.a.createElement(c.u,{xs:"6"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},i.a.createElement("i",null,"Telefax")),i.a.createElement(c.Q,{value:"+82-32-884-3564",disabled:!0,id:"issuingoffice",type:"text",placeholder:"Masukkan Telefax"})))),i.a.createElement(c.ub,null,i.a.createElement(c.u,{xs:"12"},i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"tglinspeksi"},"Nama PSOC"),i.a.createElement(c.Q,{value:"HAN SEUNG-IL/SON MIN-A",disabled:!0,id:"issuingoffice",type:"text",placeholder:"Masukkan Telephone"})))),i.a.createElement("hr",null),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(c.f,{onClick:function(){e.kembali("ya")},color:"danger"},"Kembali"),i.a.createElement("div",null,i.a.createElement(c.f,{onClick:function(){k(h+1),e.jehee(h)},color:"info"},"Selanjutnya"))))};function E(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),u=t[0],s=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(c.f,{size:"sm",onClick:function(){return s(!0)},color:"success"},i.a.createElement(r.a,{className:"text-light",name:"cil-comment-square"}))),i.a.createElement(c.eb,{show:u,onClose:function(){return s(!1)},size:"md",closeOnBackdrop:!1},i.a.createElement(c.hb,null,i.a.createElement("h4",null,"Komentar Pemerintah")),i.a.createElement(c.fb,null,i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"dw"},i.a.createElement("i",null,"Komentar : ")),i.a.createElement(c.Jb,null))),i.a.createElement(c.gb,null,i.a.createElement(c.f,{onClick:function(){return s(!1)},color:"info"},"Simpan")," ",i.a.createElement(c.f,{onClick:function(){return s(!1)},color:"danger"},"Batal"))))}function b(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),u=t[0],s=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(c.f,{size:"sm",onClick:function(){return s(!0)},color:"success"},i.a.createElement(r.a,{className:"text-light",name:"cil-comment-square"}))),i.a.createElement(c.eb,{show:u,onClose:function(){return s(!1)},size:"md",closeOnBackdrop:!1},i.a.createElement(c.hb,null,i.a.createElement("h4",null,"Komentar RO")),i.a.createElement(c.fb,null,i.a.createElement(c.K,null,i.a.createElement(c.ab,{htmlFor:"dw"},i.a.createElement("i",null,"Komentar : ")),i.a.createElement(c.Jb,null))),i.a.createElement(c.gb,null,i.a.createElement(c.f,{onClick:function(){return s(!1)},color:"info"},"Simpan")," ",i.a.createElement(c.f,{onClick:function(){return s(!1)},color:"danger"},"Batal"))))}var f=function(e){var a=Object(n.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),t=Object(l.a)(a,2),s=t[0],o=t[1],d=Object(n.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),f=Object(l.a)(d,2),p=f[0],h=f[1],k=Object(n.useState)([{label:"16. Rectify Deficiency Before 14 days",value:"16"}]),v=Object(l.a)(k,2),g=v[0],y=(v[1],Object(n.useState)([{label:"BKI",value:"BKI"}])),x=Object(l.a)(y,2),O=x[0],j=(x[1],Object(n.useState)(!1)),S=Object(l.a)(j,2),C=S[0],K=S[1],N=Object(n.useState)(!1),I=Object(l.a)(N,2),D=(I[0],I[1],Object(n.useState)(0)),M=Object(l.a)(D,2),R=M[0],F=M[1],T=Object(n.useState)(!1),P=Object(l.a)(T,2),Q=(P[0],P[1],function(){var a=s,t={id:null,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""};t.id=s[s.length-1].id+1,a.push(t),o(a),F(R+1),e.calleback(R),e.kirimDefisiensi(s)});Object(n.useEffect)((function(){h(e.defic),o(e.defisiensi)}));var B=function(){var a=p,t={id:null,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""};t.id=p[p.length-1].id+1,a.push(t),h(a),F(R+1),e.calleback(R),e.kirimDefic(p)},w=function(){var a=e.defic;a.length>1?(a.pop(),h(a),F(R+1),e.calleback(R),e.kirimDefic(p)):alert("Tidak Bisa Menghapus Row Terakhir")},L=function(){var a=e.defisiensi;a.length>1?(a.pop(),o(a),F(R+1),e.calleback(R),e.kirimDefisiensi(s)):alert("Tidak Bisa Menghapus Row Terakhir")};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("h4",null,"Deficiencies")),i.a.createElement("hr",null),i.a.createElement(c.eb,{show:C,onClose:function(){return K(!1)},size:"lg",closeOnBackdrop:!1},i.a.createElement(c.hb,null,i.a.createElement("h5",null,i.a.createElement("i",null,"Rectification Plan"))),i.a.createElement(c.fb,null,i.a.createElement(c.J,{action:"",method:"post",className:"form-horizontal"},i.a.createElement(c.K,{row:!0},i.a.createElement(c.u,{md:"3"},i.a.createElement(c.ab,null,i.a.createElement("h6",null,"Responsible RO : "))),i.a.createElement(c.u,{xs:"12",md:"9"},i.a.createElement(c.Q,{value:"BKI",disabled:!0})))),i.a.createElement(c.y,{fields:u.d,items:e.defic,addTableClasses:"joss",closeOnBackdrop:!1,scopedSlots:{no:function(e){return i.a.createElement("td",null,e.id)},subdeficiencies:function(e){return i.a.createElement("td",null,i.a.createElement(c.Jb,{value:e.subdef,disabled:!0}))},status:function(e){return i.a.createElement("td",null,i.a.createElement(m.a,{options:[{label:"DONE",value:"01"},{label:"ON PROCESS",value:"02"}]}))},komentarro:function(e){return i.a.createElement("td",null,i.a.createElement(b,null))},komentargovt:function(e){return i.a.createElement("td",null,i.a.createElement(E,null))},action:function(e){return i.a.createElement("td",null,i.a.createElement(c.f,{disabled:!0,onClick:B,size:"sm",color:"success"},"+")," ",i.a.createElement(c.f,{disabled:!0,onClick:w,size:"sm",color:"danger"},"-"))}}}),i.a.createElement("hr",null),i.a.createElement("h5",null,"Keterangan:"),i.a.createElement(c.Jb,{disabled:!0},"Keterangan dari Penginput Ditaruh Disini"),i.a.createElement("hr",null),i.a.createElement("h5",null,"Keterangan RO:"),i.a.createElement(c.Jb,null)),i.a.createElement(c.gb,null,i.a.createElement(c.f,{onClick:function(){return K(!1)},color:"info"},"Simpan")," ",i.a.createElement(c.f,{onClick:function(){return K(!1)},color:"danger"},"Batal"))),i.a.createElement(c.y,{fields:u.a,items:s,addTableClasses:"joss",scopedSlots:{no:function(e){return console.log(e.id),i.a.createElement("td",null,e.id)},code:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.code,disabled:!0,type:"text"}))},nature:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(c.Jb,{value:e.nature,disabled:!0,type:"text"}))},convention:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(c.Q,{value:e.convention,disabled:!0,type:"text"}))},action:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(m.a,{isDisabled:!0,options:g,value:g[e.action]}))},responsible:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(m.a,{isDisabled:!0,options:O,value:O[e.responsible]}))},RP:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement(c.f,{onClick:function(){return K(!0)},size:"sm",color:"info"},i.a.createElement(r.a,{className:"text-light",name:"cil-list"})))},aksi:function(e){return console.log(e.id),i.a.createElement("td",null,i.a.createElement("div",{className:"juos"},i.a.createElement(c.f,{disabled:!0,onClick:Q,size:"sm",color:"success"},"+")," ",i.a.createElement(c.f,{disabled:!0,onClick:L,size:"sm",color:"danger"},"-")))}}}),i.a.createElement("hr",null),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(c.f,{onClick:function(){F(R+1),e.juhuu(R)},color:"danger"},"Kembali"),i.a.createElement(c.f,{onClick:function(){e.Viavalen("ya")}.bind(void 0),color:"info"},"Simpan")))};function p(e){return"a"==e.tab?i.a.createElement(s.a,null):i.a.createElement(o.a,null)}function h(e){return"b"==e.tab?i.a.createElement(s.a,null):i.a.createElement(o.a,null)}function k(e){return"a"==e.tab?i.a.createElement(d,{kembali:function(a){return e.kembali(a)},kirimInformasi:function(a){return e.kirimInformasi(a)},informasi:e.informasi,certificate:e.certificate,kirimCertificate:function(a){return e.kirimCertificate(a)},jehee:function(a){return e.jehee(a)},calleback:function(a){return e.calleback(a)}}):i.a.createElement(f,{defic:e.defic,kirimDefic:function(a){return e.kirimDefic(a)},juhuu:function(a){return e.juhuu(a)},Viavalen:function(a){return e.Viavalen(a)},kirimDefisiensi:function(a){return e.kirimDefisiensi(a)},defisiensi:e.defisiensi,calleback:function(a){return e.calleback(a)}})}a.default=function(e){var a=Object(n.useState)("a"),t=Object(l.a)(a,2),r=t[0],u=t[1],s=Object(n.useState)(),o=Object(l.a)(s,2),m=o[0],d=o[1],E=Object(n.useState)([{value:"01",label:"Load Line"},{value:"02",label:"SC"},{value:"03",label:"SE"},{value:"04",label:"SR"},{value:"05",label:"IOPP"},{value:"06",label:"IAPP"}]),b=Object(l.a)(E,2),f=(b[0],b[1],Object(n.useState)([{id:1,title:0,issuingauthority:"LR",dateofissue:"2020-05-04",dateofexpiry:"2020-03-02"},{id:2,title:1,issuingauthority:"BKI",dateofissue:"2020-04-02",dateofexpiry:"2020-09-04"},{id:3,title:2,issuingauthority:"BKI",dateofissue:"2020-06-02",dateofexpiry:"2020-09-01"},{id:4,title:3,issuingauthority:"BKI",dateofissue:"2020-07-03",dateofexpiry:"2020-09-01"},{id:5,title:4,issuingauthority:"BKI",dateofissue:"2020-04-03",dateofexpiry:"2020-11-02"}])),v=Object(l.a)(f,2),g=v[0],y=v[1],x=Object(n.useState)([{id:1,date:"2020-05-06",surveyinguathority:"BKI",place:"JAKARTA"}]),O=Object(l.a)(x,2),j=O[0],S=O[1],C=Object(n.useState)([{id:1,code:"13102",nature:"FIRE POOR INSTALLED IN E/R ESCAPE TRUNK NOT CLOSED COMPLETELY",convention:"",action:0,responsible:0}]),K=Object(l.a)(C,2),N=K[0],I=K[1],D=Object(n.useState)([{id:1,subdef:"SPRINKLES BROKEN"},{id:2,subdef:"FIRE PUMP NOT OPERATE PROPERLY"}]),M=Object(l.a)(D,2),R=M[0],F=M[1],T=Object(n.useState)(""),P=Object(l.a)(T,2),Q=P[0],B=P[1],w=Object(n.useState)(""),L=Object(l.a)(w,2),z=L[0],J=L[1];return Object(n.useEffect)((function(){"ya"==Q&&e.history.push("/tindaklanjut"),"ya"==z&&e.history.push("/tindaklanjut")})),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.j,null,i.a.createElement(c.k,null,i.a.createElement("div",{className:"align-self-start"},i.a.createElement("div",{class:"d-flex justify-content-center"},i.a.createElement("div",{onClick:function(){"a"!==r&&u("a")}.bind(void 0),className:"item px-5 btn"},i.a.createElement(p,{tab:r}),i.a.createElement("span",{style:{display:"block"}},"Form A")),i.a.createElement("div",{onClick:function(){"b"!==r&&u("b")}.bind(void 0),className:"item px-5 btn"},i.a.createElement(h,{tab:r}),i.a.createElement("span",{style:{display:"block"}},"Form B")))),i.a.createElement("div",null,i.a.createElement(k,{defic:R,kirimDefic:function(e){F(e)},kembali:function(e){J(e),console.log("kembali",z)},tab:r,Viavalen:function(e){B(e),console.log(Q)},kirimDefisiensi:function(e){I(e)},defisiensi:N,kirimInformasi:function(e){S(e)},informasi:j,s:!0,certificate:g,kirimCertificate:function(e){y(e)},juhuu:function(e){d(e),u("a")},jehee:function(e){d(e),u("b")},calleback:function(e){d(!e),console.log(m)}})))))}}}]);
//# sourceMappingURL=57.b3076096.chunk.js.map