import e from"./method/getlink.js";class l{constructor(i){if(this.orginfile=i,this.orginfile.size>100*1024*1024*1024)return{success:!1,msg:"File too big",code:1};this.init(),this.success=!0,this.code=0,this.result="OK"}async init(){this.file={},this.file.name=encodeURIComponent(this.orginfile.webkitRelativePath||this.orginfile.name),this.file.size=this.orginfile.size,this.file.lastModified=this.orginfile.lastModified,this.file.orginfile=this.orginfile}async GetUploadURL(){const i=await e(this.file);return i.status&&(this.file.url=i.result),i}}