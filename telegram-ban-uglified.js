const constructPromise=(Q,l)=>{const c=l.split(",");for(let l of c)Q=Q.then((()=>doJob(atob(l))));Q.then((()=>console.log("done")))},getSelectMessagesButton=Q=>Array.from(Q.querySelectorAll('[role="button"]')).filter((Q=>(console.log(Q.textContent),"Select messages"===Q.textContent.trim())))[0],doTelegramBan=function(Q){const l=Promise.resolve();constructPromise(l,Q)},doJob=Q=>{const l=Q=>new Promise((l=>setTimeout(l,Q)));let c=new Event("input",{bubbles:!0,cancelable:!0}),G=new MouseEvent("click",{bubbles:!0,cancelable:!0}),e=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0});new MouseEvent("mouseup",{bubbles:!0,cancelable:!0});return new Promise((l=>{const b=document.querySelector("#telegram-search-input");b.dispatchEvent(e),b.dispatchEvent(G),console.log(b),console.log(Q),b.value=Q,b.dispatchEvent(c),l()})).then((()=>l(1e4))).then((()=>{const Q=document.querySelectorAll(".search-section")[0],l=Q.querySelectorAll(".chat-item-clickable")[0],c=Q.querySelectorAll(".ListItem-button")[0];console.log(Q),console.log(l),console.log(c),c.dispatchEvent(e);const b=document.querySelectorAll('[aria-label="More actions"]')[0];b.dispatchEvent(G),console.log(b)})).then((()=>l(4e3))).then((()=>{const Q=document.querySelector("#portals"),l=(c=Q,Array.from(c.querySelectorAll('[role="button"]')).filter((Q=>(console.log(Q.textContent),"Select messages"===Q.textContent.trim())))[0]);var c;console.log(l),l.dispatchEvent(G)})).then((()=>l(4e3))).then((()=>{const Q=document.querySelectorAll(".message-select-control");console.log("MessageSelector {}",Q);for(let l of Q)console.log(l),l.dispatchEvent(G)})).then((()=>l(3e3))).then((()=>{document.querySelectorAll(".icon-flag")[0].dispatchEvent(G)})).then((()=>l(3e3))).then((()=>{document.querySelectorAll(".modal-content")[0].querySelectorAll("span")[1].dispatchEvent(G)})).then((()=>l(3e3))).then((()=>{document.querySelectorAll(".confirm-dialog-button")[0].dispatchEvent(G)})).then((()=>l(3e3))).catch((Q=>console.log(Q)))},cookies="QHJ1c3NreV9zaGlwX2JvdA==,QFJ1c3NreXNoaXA=,QEthZHlyb3ZfOTUgQ2hhdA==,QGRvbmJhc3NjYXNl,QG9rb2xva3JlbWx5YQ==,QFNlcmdleUtvbHlhc25pa292,QFRyZXZvZ2FEb25ldHNr,QHJ1c3NfcG9saXQ=,QG5vbWVuY2xhdHVyYQ==,QHZsYWRsZW50YXRhcnNreQ==,QHVyYWxsaXZl,QGFsZWtzYW5kcl9za2lm,QHNiYWdkYXNhcm92,QGRpc2VsaW4=,QGJvcmlzX3Jvemhpbg==,QE1pa2xlMU9u,QHNrYWJlZXZh,QG1pbGl0YXJ5cmV2aWV3,QHZ5c29reWdvdm9yaXQ=,QHZvZW5hY2hlcg==,QHJhYm90YWVtYnJhdA==,QG1lZGlhdGVjaA==,QGV4dHJlbWlzbV83MQ==,QHphcGlza2lfdmV0ZXJhbmE=,QGlfY3VydGFpbg==,QHJvc3Rvdl9nbGF2bml5,QERhaWx5V2Fy,QG1vbWFueWFfdHV0,QGJlZ2dhcmludmVzdA==,QHNsaXZ5cGVydm9nbw==,QHNwdXRuaWtsaXZl,QGJiYnJlYWtpbmc=,QHp2ZXpkYW5ld3M=,QGdlbnNoYWI=,QHJ1c3NpYXZwZXJlZDAwMg==,QGRuZXByX3BhcnRpemFuaQ==,QHphbXBvbGl0bmV3cw==,QHJsel90aGVfa3Jha2Vu,QG5ld3Nfb25saW5lXzI0,QG1pZzQx,QGRpemFfZG9uYmFzcw==,QHJlZF9jcmltZWE=,QHNoZXlodGFtaXI=,QHZvZW5rb3JLb3Rlbm9r,QFJTYXBvbmtvdg==,QHByaWRuZXN0cm92ZWM=,QG5pZmVkX2FsZXJ0cw==,QG5lY2hhZXZfMDE3,QG5lY2hhZXZfMDE3,QHdoaXRlZmlsaW4=,QENicHVi,QHFhX2F1dG9tYXRpb24=,QG1pZzQx,QGdob3N0X29mX25vdm9yb3NzaWE=,QHpvbGFfb2ZfcmVub3ZhdGlvbg==,QEt1cnNraXlfUHJhdmRvcnU=,QHNtb3RyaV9tZWRpYQ==,QGZpcnN0X3BvbGl0aWNhbA==,QFhVX2tyYWluZQ==,QGFybWl5YV9a,QFNvbGRpZXJvZmZvcnR1bmU3Nzc=,QHNpbG92aWtpX2NoYXQ=,QFNJTDBWSUtJ,QFlhcm9zbGF2X1lhcmE=,QGdhcmFnZWhhY2tpbmc=,QHBvcHRhdGlhbmE=,QHphZXNfZW5lcmdvYXRvbQ==,QHBvc3QxMXhfcmVib3Ju,QHZ6Z2x5YWRfcnU=,QG11c2ljX211em9uX3Zr,QFBldHlhX3BlcnZpeQ==,QGRvbmJhc3Nfbm92b3N0aV9wZXJlZ292b3Jp,QHN2aW5vdGJpdg==,QG1hcml1cG9sX3o=,QGluZm9tb3Njb3cyNA==,QHJ1a2FrcmVtbGph,QGRvbnRpbWU=,QEdvdm9yaXRfVG9wYXo=,QHJ3aGFja19ncm91cA==,QHNoa29sYV96aGl6bg==,QHB1Ymxpa3VlbXZjZQ==,QHdhcmZha2VyZXM=,QFJPTWU4ODE0,QG5vdGVzX3ZldGVyYW5z,QHByaWRuZXN0cm92ZWM=,QGF0b2RvbmVja3BvYmVkYQ==,QEhhcnJ5UHVraWNo,QG9jdWx1c19pbmZlcm5v,QHl1cmFzdW15,QGZyZXNod2gxdGVyb3Nlcw==,QHJ1c3NpYW5fb3NpbnQvMTIzNw==,QGFybW1pcm90dm9yZWM=,QHNjaG9raXJvdmFu,QFlVR0xJVkU=,QG5ld2pvbjIwMjI=,QHByYXZ5eV92ZXN0bmlr,QGJyZWFraW5nbWFzaA==,QFByb3JpVjM3,QEl2b3J5dG93ZXJz,QHBvbW9zaF9pX29zdm9ib3poZGVuaWU=,QE1yZXNwdWJsaWth,QHZvbHJvdGE=,QEthcmF1TG5ldA==,QHJiY19uZXdz,QGRvbnRlbA==,QHRnX25ld3NfMjQ=,QG5lcnVzX3J1cw==,QG9jaGV2aWRlY3JmdWE=,QHBvbGl0aW5mb3JtYXRpb25fcnVic2h0ZWlu,QHN5cmlhbnR1YmU=,QEthdGlhVHhpTGl2ZQ==,QGFybXlaTw==,QHlhdW1hbWtp,QG5ld2xnMjAyMg==,QHBvb3Rpbml6bQ==,QGF2YXRrb3Y=,QGFnZW50Z29zZGVwYTE=,QG5lb2ZpY2lhbG5peWJlenNvbm92,QGlzdG9yaWphb3J1emlqYQ==,QHNlcnl5X2tyb3Q=,QGtyZW1s,QHJ1c3NpYW5oZWxw,QGRuZXByX3BhcnRpemFuaQ==,QG9wcmZfb2ZmaWNpYWw=,QG1pbGl0X3pvbmRleg==,QG1sbGVnaW9u,QFBST19yZXNwdWJsaWt1,QHJlYmVsX2phY2tfcmV2aWV3,QFNlcmdleUtvbHlhc25pa292,QG9uZl9mcm9udA==,QGpvdXJuYWxpc3RfbG5y,QGdvdm9yaXRmdXJzb3Y=,QE1ldGFtZXRyaWNh,QEFUTl9CVFJD,QG5vdXJsbmV3cw==,QHJlYWRvdmthbmV3cw==,QGhvdF91a3JhaW5lX25ld3M=,QGluY19sdWdhbnNr,QHZtYWtlZXZrZQ==,QHNrb3Jpa292aXZhbg==,QHNzbGVn,QHJpYW5fcnU=,QHBhbnRlcmlwYW50ZXJpc2hvcA==,QHRvdGFsbF9uZXdz,QFJLYWR5cm92Xzk1,QHdhcmZha2Vz,QFZhcnNoYXZhODg4OA==,QHBvYmVkYTc1,QGRpemFfZG9uYmFzcw==,QHJlZF9jcmltZWE=,QHByYXZpdGVsc3R2b2ticg==,QHZvZW5fa29y,QE5vdm9zdHk=,QGNocF91a3JhaW5hX3ZvaW5hX3J1c3NpYQ==,QHNob3Rfc2hvdA==,QEtoYXJrb3ZaV2Fy,QHVrcmFpbmVfdm9pbmFfbmV3cw==,QHNvdXRodG93ZXI=,QFBvc3Rvdm8=,QHNwdXRuaWtieQ==,QHJ1c3NpYW5fc3ByaW5nX3p6,QFdhckRvbmJhc3M=,QGdyZXlfem9uZQ==,QHJsel90aGVfa3Jha2Vu,QHdhcmpvdXJuYWx0Zw==,QGJiYnJlYWtpbmc=,QG1pbGluZm9saXZl,QFVnb2xva19TaXRoYQ==,QGNoZXNub2ttZWRpYQ==,QGdob3N0X29mX25vdm9yb3NzaWE=,QG5vdGVzX3ZldGVyYW5z,QGRpcGxvbWF0aWE=,QGJ1bGJlX2RlX3Ryb25lcw==,QG9sZWd0c2Fyb3Y=,QGFraW1hcGFjaGU=,QHpvbGFfb2ZfcmVub3ZhdGlvbg==,QEhhcmRfQmxvZ19MaW5l,QGljZV9pbmlp,QHN3b2RraQ==,QGluZmFudG1pbGl0YXJpbw==,QHJ0X3J1c3NpYW4=,QGdhemV0YXJ1,QHJiY19uZXdz,QHZlZG9tb3N0aQ==,QHRhc3NfYWdlbmN5,QGtyZW1saW5wcmFjaGth,QFJWdm9lbmtvcg==,QHJ1c3Zlc25hc3U=,QHdhcmdvbnpv,QG9sZG1pbmVya29taQ==,QGp1bGlhX2NoaWNoZXJpbmE=,QG5lemh1cmth,QFNsYWRrb3ZfcGx1cw==,QERvbmluc2lkZQ==,QG5ld3NfZm9yZnJlZQ==,QG1pa2F5ZWxiYWQ=,QGRvbmJhc3Ny,QHZvZW5rb3JLb3Rlbm9r,QG1hcm9jaGtvbGl2ZQ==,QG1pcm9zaG5pa19y,QHNldl9wb2xpdF90YWt0,QGNtaXll,QGhvbG1vZ29ydGFsa3M=,QEpva2VyRE5S,QHN2YXJzY2hpa2k=,QGRvbmJhc3Nfc2Vnb2RueWE=,QGVwb2RkdWJueQ==,QFJ0ckRvbmV0c2s=,QG1lZHZlZGV2X25vdGU=,QGNvbnF1ZXJvcjk1,QHJ1c3llcmV2YW50b2RheQ==,QHZ5c29reWdvdm9yaXQ=,QFNlcmdleUtvbHlhc25pa292,QG9udG5ld3M=,QFphX0Rlcmphdnk=,QGRlbHlhZ2lu,QG1pbGl0YXJ5X2Nvcm5lcg==,QGludGVsc2xhdmE=,QHZvcnBvc3Rl,QFJJQTgycmY=,QGFkaXJlY3Q=,QE1hdGVyaWtNZWRpYQ==,QEJlcmVnVGltZQ==,QGludHVpdGlvbjIwMzY=,QGthcmF1bG55,QGdsYXZwb2xpdA==,QHBhcmJ1dA==,QGJvcmlzX3Jvemhpbg==,QGNodmttZWRpYQ==,QG1pZzQx,QG1hcmRhbmFrYQ==,QHRpa2FuZGVsYWtp,QGticnZkdmty,QHNrZm9fdGVsZWdyYXBo,QGlhX3N0ZWtsb21veQ==,QEJvcm9kYVY=,QGFraXRpbG9w,QGdvc3NsdWdh,QGdsYXZtZWRpYQ==,QG9wZXJkcmFpbg==,QG1pbnpkcmF2bnk=,QE1heW9yRlNC,QG9yZm9zdmluc3R2bw==,QEJhcm9ub3Zh,QHByaWR5YmF5bG8=,QENoYXNvdm9qUG9nb2R5,QHJvYmFiYXlhbg==,QE1lZHZlZGV2VmVzdGk=,QHNrYWJlZXZh,QG5haWx5YWFza2VyemFkZQ==,QHByYmV6cG9zaGFkeQ==,QHZsYWRpdm9zdG9rMTk3OA==,QHZyb2dvdg==,QGRwbGF0b25vdmE=,QFNvbG92aWV2TGl2ZQ==,QHNhc2hha290cw==,QGV2Z2VueXByaW1ha292,QGFrYXNoZXZhcm92YQ==,QHN1cGVyZG9sZ292,QHJvbWFnb2xvdmFub3Y=,QEFTR2FzcGFyeWFu,QGFubmFzaGFmcmFu,QG50bnpu,QE5lU29jU2V0aQ==,QHJhZGxla3VraA==,QGVnb3JnYWxlbmtv,QHl1ZGVuaWNo,QE1hcmluYXNsb3Zv,QHZsYWRsZW50YXRhcnNreQ==,QFNvbk9mTW9uYXJjaHk=,QE1heGltWXVzaW4=,QGdvMzM4,QG9tb25tb3Njb3c=,QHdpbmdzb2Z3YXI=,QGhhY2tiZXJlZ2luaQ==,QHBlemRpY2lkZQ==,QFNJTDBWSUtJ,QGJhbGthbm9zc2lwZXI=,QHBsX3N5cmVua2E=,QGJydXNzaW5m,QGxhZHlfbm9ydGg=,QHNleF9kcnVnc19rYWhsbw==,QHVzYXBlcmlvZGljYWw=,QHJ1c3Nfb3JpZW50YWxpc3Q=,QHJ5YmFy";doTelegramBan(cookies);