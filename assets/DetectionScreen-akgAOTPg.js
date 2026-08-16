var Bg=Object.defineProperty;var Ng=(e,t,r)=>t in e?Bg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var so=(e,t,r)=>Ng(e,typeof t!="symbol"?t+"":t,r);import{a as Mg,u as Dg,r as qe,j as ye}from"./index-BaJAnuow.js";import{O as Pg}from"./OpsLayout-BpB31i5c.js";import"./AssistantChat-D7ablaXy.js";import"./forecast-GzxOpdUw.js";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pa=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,qg=Object.getOwnPropertyNames,Lg=Object.prototype.hasOwnProperty,Wg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Kt=(e,t)=>{for(var r in t)Pa(e,r,{get:t[r],enumerable:!0})},Vg=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of qg(t))!Lg.call(e,a)&&a!==r&&Pa(e,a,{get:()=>t[a],enumerable:!(i=Ug(t,a))||i.enumerable});return e},gr=e=>Vg(Pa({},"__esModule",{value:!0}),e),er,_t,Gt,oo,Wd,Vd=P(()=>{er=new Map,_t=[],Gt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=er.get(e);if(i===void 0)er.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=_t.indexOf(e);a!==-1&&_t.splice(a,1);for(let s=0;s<_t.length;s++)if(er.get(_t[s]).priority<=r){_t.splice(s,0,e);return}_t.push(e)}return}throw new TypeError("not a valid backend")},oo=async e=>{let t=er.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Wd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?_t:r,a,s=[],n=new Set;for(let l of i){let p=await oo(l);typeof p=="string"?s.push({name:l,err:p}):(a||(a=p),a===p&&n.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let u=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,p)=>p==="executionProviders"?u:Reflect.get(l,p)})]}}),Gg=P(()=>{Vd()}),Gd,Hg=P(()=>{Gd="1.27.0"}),ki,ze,Hd=P(()=>{Hg(),ki="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:Gd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ki=e}},get logLevel(){return ki}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),be,Fg=P(()=>{Hd(),be=ze}),Fd,jd,jg=P(()=>{Fd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let h=s*a,f=0,g=h,y=h*2,_=-1;n==="RGBA"?(f=0,g=h,y=h*2,_=h*3):n==="RGB"?(f=0,g=h,y=h*2):n==="RBG"&&(f=0,y=h,g=h*2);for(let b=0;b<s;b++)for(let k=0;k<a;k++){let v=(e.data[f++]-p[0])*l[0],$=(e.data[g++]-p[1])*l[1],I=(e.data[y++]-p[2])*l[2],S=_===-1?255:(e.data[_++]-p[3])*l[3];i.fillStyle="rgba("+v+","+$+","+I+","+S+")",i.fillRect(k,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},jd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,h;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let f=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,b=2,k=3,v=0,$=f,I=f*2,S=-1;u==="RGBA"?(v=0,$=f,I=f*2,S=f*3):u==="RGB"?(v=0,$=f,I=f*2):u==="RBG"&&(v=0,I=f,$=f*2),i=r.createImageData(a,s);for(let E=0;E<s*a;y+=g,_+=g,b+=g,k+=g,E++)i.data[y]=(e.data[v++]-h[0])*p[0],i.data[_]=(e.data[$++]-h[1])*p[1],i.data[b]=(e.data[I++]-h[2])*p[2],i.data[k]=S===-1?255:(e.data[S++]-h[3])*p[3]}else throw new Error("Can not access image data");return i}}),Ar,Kd,Zd,Xd,Qd,Yd,Kg=P(()=>{Ua(),Ar=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,h=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),f=4,g=0,y=1,_=2,b=3,k=0,v=p,$=p*2,I=-1;u==="RGB"&&(f=3,g=0,y=1,_=2,b=-1),l==="RGBA"?I=p*3:l==="RBG"?(k=0,$=p,v=p*2):l==="BGR"&&($=0,v=p,k=p*2);for(let S=0;S<p;S++,g+=f,_+=f,y+=f,b+=f)h[k++]=(e[g]+n[0])/s[0],h[v++]=(e[y]+n[1])/s[1],h[$++]=(e[_]+n[2])/s[2],I!==-1&&b!==-1&&(h[I++]=(e[b]+n[3])/s[3]);return l==="RGBA"?new We("float32",h,[1,4,r,i]):new We("float32",h,[1,3,r,i])},Kd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;f.drawImage(e,0,0),n=f.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let h,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,f=t.resizedWidth):(h=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=h,u.width=f,t!==void 0){let g=l();g.width=f,g.height=h;let y=p(g);if(y!=null)y.putImageData(e,0,0),n=y.getImageData(0,0,f,h).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let f=p(h);if(f!=null){let g=e.height,y=e.width;return f.drawImage(e,0,0,y,g),n=f.getImageData(0,0,y,g).data,u.height=g,u.width=y,Ar(n,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,f)=>{let g=l(),y=p(g);if(!e||!y)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,h(Ar(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Ar(n,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Zd=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new We({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},Xd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},Qd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},Yd=(e,t,r)=>new We({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),At,dr,Ti,Jd,Zg=P(()=>{At=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),dr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ti=!1,Jd=()=>{if(!Ti){Ti=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(At.set("int64",BigInt64Array),dr.set(BigInt64Array,"int64")),t&&(At.set("uint64",BigUint64Array),dr.set(BigUint64Array,"uint64")),i?(At.set("float16",r),dr.set(r,"float16")):At.set("float16",Uint16Array)}}}),ep,tp,Xg=P(()=>{Ua(),ep=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},tp=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,Ua=P(()=>{jg(),Kg(),Zg(),Xg(),We=class{constructor(e,t,r){Jd();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=At.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=At.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",n=e;else if(l==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let l=dr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,n=e}if(u===void 0)u=[n.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=n,this.dataLocation="cpu"}let s=ep(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return Kd(e,t)}static fromTexture(e,t){return Zd(e,t)}static fromGpuBuffer(e,t){return Xd(e,t)}static fromMLTensor(e,t){return Qd(e,t)}static fromPinnedBuffer(e,t,r){return Yd(e,t,r)}toDataURL(e){return Fd(this,e)}toImageData(e){return jd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return tp(this,e)}}}),et,rp=P(()=>{Ua(),et=We}),jr,Ii,st,tt,Bt,Nt,ip=P(()=>{Hd(),jr=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ii=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),jr("CPU",n);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},st=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ii("BEGIN",e)},tt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ii("END",e)},Bt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Nt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),ap,Qg=P(()=>{Vd(),rp(),ip(),ap=class np{constructor(t){this.handler=t}async run(t,r,i){st(),Bt("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof et||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof et)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(h.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof et)&&(p=!0,n=!1,a[f]=g)}if(p){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(n)for(let p of this.outputNames)a[p]=null;let u=await this.handler.run(t,a,s),l={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let h=u[p];h instanceof et?l[p]=h:l[p]=new et(h.type,h.data,h.dims)}return Nt("InferenceSession.run"),tt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){st(),Bt("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(g=t.byteLength-f,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-f}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Wd(n),p=await u.createInferenceSessionHandler(s,l);return Nt("InferenceSession.create"),tt(),new np(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Kr,Yg=P(()=>{Qg(),Kr=ap}),Jg=P(()=>{}),e0=P(()=>{}),t0=P(()=>{}),r0=P(()=>{}),i0={};Kt(i0,{InferenceSession:()=>Kr,TRACE:()=>jr,TRACE_EVENT_BEGIN:()=>Bt,TRACE_EVENT_END:()=>Nt,TRACE_FUNC_BEGIN:()=>st,TRACE_FUNC_END:()=>tt,Tensor:()=>et,env:()=>be,registerBackend:()=>Gt});var Fe=P(()=>{Gg(),Fg(),Yg(),rp(),Jg(),e0(),ip(),t0(),r0()}),qa=P(()=>{}),sp={};Kt(sp,{default:()=>op});var Ei,zi,op,a0=P(()=>{var e;hf(),Ut(),La(),Ei="ort-wasm-proxy-worker",zi=((e=globalThis.self)==null?void 0:e.name)===Ei,zi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Wa(i.wasm).then(()=>{sn(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:s}=i;on(s,a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:a}=i,s=ti(a);postMessage({type:r,out:s});break}case"create":{let{model:a,options:s}=i;un(a,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":ln(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:s,inputs:n,outputIndices:u,options:l}=i;dn(a,s,n,u,new Array(u.length).fill(null),l).then(p=>{p.some(h=>h[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},cn([...n,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":pn(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),op=zi?null:t=>new Worker(t??Le,{type:"module",name:Ei})}),up={};Kt(up,{default:()=>lp});async function uo(e={}){var ao,no;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&((ao=self.name)==null?void 0:ao.startsWith("em-pthread"));t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=o=>async(...d)=>{var m;try{if(t.Yc)throw Error("Session already started");let c=t.Yc={Kd:d[0],errors:[]},x=await o(...d);if(t.Yc!==c)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let T=c.errors;if(0<T.length){let z=await Promise.all(T);if(z=z.filter(N=>N),0<z.length)throw Error(z.join(`
`))}return x}finally{t.Yc=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=d;let m=t.dd;t.jsepRegisterBuffer=(c,x,T,z)=>m.registerBuffer(c,x,T,z),t.jsepGetBuffer=c=>m.getBuffer(c),t.jsepCreateDownloader=(c,x,T)=>m.createDownloader(c,x,T),t.jsepOnCreateSession=c=>{m.onCreateSession(c)},t.jsepOnReleaseSession=c=>{m.onReleaseSession(c)},t.jsepOnRunStart=c=>m.onRunStart(c),t.Id=(c,x)=>{m.upload(c,x)}}else if(o==="webnn"){let m=d[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=c=>m.onRunStart(c),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=c=>{m.onReleaseSession(c)},t.webnnCreateMLTensorDownloader=(c,x)=>m.createMLTensorDownloader(c,x),t.webnnRegisterMLTensor=(c,x,T,z)=>m.registerMLTensor(c,x,T,z),t.webnnCreateMLContext=c=>m.createMLContext(c),t.webnnRegisterMLConstant=(c,x,T,z,N,W)=>m.registerMLConstant(c,x,T,z,N,t.Xc,W),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let n=()=>{let o=d=>(...m)=>{let c=it;return m=d(...m),it!=c?new Promise((x,T)=>{ci={resolve:x,reject:T}}):m};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[d]=o(t[d])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),n=void 0};t.asyncInit=()=>{n==null||n()};var u,l,p=(o,d)=>{throw d},h=import.meta.url,f="";if(r||i){try{f=new URL(".",h).href}catch{}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(A(o))return new Promise((m,c)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):c(x.status)},x.onerror=c,x.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,y,_,b,k,v,$=console.log.bind(console),I=console.error.bind(console),S=$,E=I,C=!1,A=o=>o.startsWith("file://");function w(){ft.buffer!=D.buffer&&F()}if(a){let o=function(d){try{var m=d.data,c=m.Sc;if(c==="load"){let x=[];self.onmessage=T=>x.push(T),v=()=>{postMessage({Sc:"loaded"});for(let T of x)o(T);self.onmessage=o};for(let T of m.xd)t[T]&&!t[T].proxy||(t[T]=(...z)=>{postMessage({Sc:"callHandler",wd:T,args:z})},T=="print"&&(S=t[T]),T=="printErr"&&(E=t[T]));ft=m.Od,F(),y=m.Pd,Ge(),Cr()}else if(c==="run"){(function(x){var T=(w(),H)[x+52>>>2>>>0];x=(w(),H)[x+56>>>2>>>0],fs(T,T-x),se(T)})(m.Rc),yi(m.Rc,0,0,1,0,0),mn(),li(m.Rc),O||(us(),O=!0);try{Tf(m.Md,m.bd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(c==="checkMailbox"?O&&xr():c&&(E(`worker: received unknown command ${c}`),E(m)))}catch(x){throw ls(),x}};var O=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var D,L,G,j,B,H,Z,J,he,V,ue,U=!1;function F(){var o=ft.buffer;t.HEAP8=D=new Int8Array(o),G=new Int16Array(o),t.HEAPU8=L=new Uint8Array(o),j=new Uint16Array(o),t.HEAP32=B=new Int32Array(o),t.HEAPU32=H=new Uint32Array(o),Z=new Float32Array(o),J=new Float64Array(o),he=new BigInt64Array(o),V=new BigUint64Array(o)}function X(){U=!0,a?v():ut.sb()}function q(o){throw E(o="Aborted("+o+")"),C=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),k==null||k(o),o}function me(){return{a:{ma:Zm,gb:Km,g:If,J:Ef,f:zf,o:Cf,h:Af,ha:Of,b:Rf,T:Bf,Ha:$n,n:Nf,$:kn,Xa:Tn,Da:In,Fa:En,Ya:zn,Va:Cn,Oa:An,Ua:On,ka:Rn,Ea:Bn,Ba:Nn,Wa:Mn,Ca:Dn,bb:Mf,ea:Df,wa:Pf,ua:qf,da:Wf,O:Vf,H:Gf,va:Hf,_:Yf,xa:Jf,Ra:em,za:rm,Ia:im,sa:am,fa:nm,Qa:li,_a:sm,R:dm,r:mm,c:oi,hb:gm,y:ym,M:_m,D:bm,l:wm,s:Hn,ib:$m,I:vm,S:xm,j:Sm,u:km,q:Tm,k:Im,La:Em,Ma:zm,Na:Cm,Ja:Zn,Ka:Xn,ta:Qn,db:Om,ab:Bm,v:Nm,aa:Mm,ga:Dm,$a:Rm,W:Pm,Za:Um,Aa:qm,F:Am,U:Lm,la:Er,ya:Vm,fb:Wm,eb:Gm,Sa:ts,Ta:rs,Ga:Zt,V:is,ja:as,Pa:ns,ia:ss,kb:Ag,na:Tg,lb:Cg,oa:kg,G:gg,e:Jm,t:Qm,w:Xm,B:lg,mb:vg,K:hg,x:rg,pa:xg,Y:Ig,ba:$g,nb:wg,ob:bg,P:dg,qa:_g,pb:yg,N:fg,Z:Sg,d:Ym,A:tg,m:eg,jb:Og,p:ag,z:ng,C:ig,E:sg,L:pg,qb:mg,Q:Eg,ca:cg,X:zg,rb:ug,ra:og,i:Fm,a:ft,cb:Ue}}}async function Ge(){function o(c,x){var T=ut=c.exports;c={};for(let[z,N]of Object.entries(T))typeof N=="function"?(T=om(N),c[z]=T):c[z]=N;return ut=c,ut=function(){var z=ut,N=K=>ne=>K(ne)>>>0,W=K=>()=>K()>>>0;return(z=Object.assign({},z)).tb=N(z.tb),z.Xb=W(z.Xb),z.Zb=N(z.Zb),z.lc=N(z.lc),z.mc=W(z.mc),z.qc=N(z.qc),z}(),hn.push(ut._b),os=(c=ut).tb,us=c.ub,t._OrtInit=c.vb,t._OrtGetLastError=c.wb,t._OrtCreateSessionOptions=c.xb,t._OrtAppendExecutionProvider=c.yb,t._OrtAddFreeDimensionOverride=c.zb,t._OrtAddSessionConfigEntry=c.Ab,t._OrtReleaseSessionOptions=c.Bb,t._OrtCreateSession=c.Cb,t._OrtReleaseSession=c.Db,t._OrtGetInputOutputCount=c.Eb,t._OrtGetInputOutputMetadata=c.Fb,t._OrtFree=c.Gb,t._OrtCreateTensor=c.Hb,t._OrtGetTensorData=c.Ib,t._OrtReleaseTensor=c.Jb,t._OrtCreateRunOptions=c.Kb,t._OrtAddRunConfigEntry=c.Lb,t._OrtReleaseRunOptions=c.Mb,t._OrtCreateBinding=c.Nb,t._OrtBindInput=c.Ob,t._OrtBindOutput=c.Pb,t._OrtClearBoundOutputs=c.Qb,t._OrtReleaseBinding=c.Rb,t._OrtRunWithBinding=c.Sb,t._OrtRun=c.Tb,t._OrtEndProfiling=c.Ub,t._JsepOutput=c.Vb,t._JsepGetNodeName=c.Wb,zr=c.Xb,at=t._free=c.Yb,Yt=t._malloc=c.Zb,yi=c.ac,ls=c.bc,ds=c.cc,ps=c.dc,_i=c.ec,cs=c.fc,hs=c.gc,le=c.hc,Jt=c.ic,fs=c.jc,se=c.kc,bi=c.lc,oe=c.mc,ms=c.nc,wi=c.oc,gs=c.pc,ys=c.qc,_s=c.rc,$i=c.sc,bs=c.tc,ws=c.uc,$s=c.vc,vs=c.wc,xs=c.xc,Ss=c.yc,ks=c.zc,Ts=c.Ac,Is=c.Bc,Es=c.Cc,zs=c.Dc,Cs=c.Ec,As=c.Fc,Os=c.Gc,Rs=c.Hc,Bs=c.Ic,Ns=c.Jc,Ms=c.Kc,Ds=c.Lc,Ps=c.Mc,Us=c.Nc,qs=c.Pc,Ls=c.Qc,Ws=c.$c,Vs=c.ad,Gs=c.fd,Hs=c.jd,Fs=c.kd,js=c.ld,Ks=c.md,Zs=c.nd,Xs=c.od,Qs=c.pd,Ys=c.qd,Js=c.vd,eo=c.Td,to=c.Ud,ro=c.Vd,io=c.Wd,y=x,ut}var d,m=me();return t.instantiateWasm?new Promise(c=>{t.instantiateWasm(m,(x,T)=>{c(o(x,T))})}):a?o(new WebAssembly.Instance(y,me()),y):(ue??(ue=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/Program%20Files/Git/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),d=await async function(c){var x=ue;if(!g&&!A(x))try{var T=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,c)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return async function(z,N){try{var W=await async function(K){if(!g)try{var ne=await u(K);return new Uint8Array(ne)}catch{}if(K==ue&&g)K=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";K=l(K)}return K}(z);return await WebAssembly.instantiate(W,N)}catch(K){E(`failed to asynchronously prepare wasm: ${K}`),q(K)}}(x,c)}(m),o(d.instance,d.module))}class Te{constructor(d){so(this,"name","ExitStatus");this.message=`Program terminated with exit(${d})`,this.status=d}}var Be=o=>{o.terminate(),o.onmessage=()=>{}},Ne=[],Pe=0,Me=null,ct=o=>{ht.length==0&&(yn(),gn(ht[0]));var d=ht.pop();if(!d)return 6;Xt.push(d),xt[o.Rc]=d,d.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return d.postMessage(m,o.rd),0},$e=0,re=(o,d,...m)=>{var c,x=16*m.length,T=oe(),z=bi(x),N=z>>>3;for(c of m)typeof c=="bigint"?((w(),he)[N++>>>0]=1n,(w(),he)[N++>>>0]=c):((w(),he)[N++>>>0]=0n,(w(),J)[N++>>>0]=c);return o=ds(o,0,x,z,d),se(T),o};function Ue(o){if(a)return re(0,1,o);if(_=o,!(0<$e)){for(var d of Xt)Be(d);for(d of ht)Be(d);ht=[],Xt=[],xt={},C=!0}p(0,new Te(o))}function _r(o){if(a)return re(1,0,o);Zt(o)}var Zt=o=>{if(_=o,a)throw _r(o),"unwind";Ue(o)},ht=[],Xt=[],hn=[],xt={},fn=o=>{var d=o.Rc;delete xt[d],ht.push(o),Xt.splice(Xt.indexOf(o),1),o.Rc=0,ps(d)};function mn(){hn.forEach(o=>o())}var gn=o=>new Promise(d=>{o.onmessage=x=>{var T=x.data;if(x=T.Sc,T.Zc&&T.Zc!=zr()){var z=xt[T.Zc];z?z.postMessage(T,T.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${T.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?xr():x==="spawnThread"?ct(T):x==="cleanupThread"?vr(()=>{fn(xt[T.Nd])}):x==="loaded"?(o.loaded=!0,d(o)):T.target==="setimmediate"?o.postMessage(T):x==="uncaughtException"?o.onerror(T.error):x==="callHandler"?t[T.wd](...T.args):x&&E(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,c=[];for(m of[])t.propertyIsEnumerable(m)&&c.push(m);o.postMessage({Sc:"load",xd:c,Od:ft,Pd:y})});function yn(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ht.push(o)}var ft,Tf=(o,d)=>{$e=0,o=$i(o,d),0<$e?_=o:_i(o)},br=[],wr=0;function If(o){var d=new ii(o>>>=0);return(w(),D)[d.Tc+12>>>0]==0&&(_n(d,!0),wr--),bn(d,!1),br.push(d),ys(o)}var Lt=0,Ef=()=>{le(0,0);var o=br.pop();ms(o.cd),Lt=0};function _n(o,d){d=d?1:0,(w(),D)[o.Tc+12>>>0]=d}function bn(o,d){d=d?1:0,(w(),D)[o.Tc+13>>>0]=d}class ii{constructor(d){this.cd=d,this.Tc=d-24}}var ai=o=>{var d=Lt;if(!d)return Jt(0),0;var m=new ii(d);(w(),H)[m.Tc+16>>>2>>>0]=d;var c=(w(),H)[m.Tc+4>>>2>>>0];if(!c)return Jt(0),d;for(var x of o){if(x===0||x===c)break;if(gs(x,c,m.Tc+16))return Jt(x),d}return Jt(c),d};function zf(){return ai([])}function Cf(o){return ai([o>>>0])}function Af(o,d,m,c){return ai([o>>>0,d>>>0,m>>>0,c>>>0])}var Of=()=>{var o=br.pop();o||q("no exception to throw");var d=o.cd;throw(w(),D)[o.Tc+13>>>0]==0&&(br.push(o),bn(o,!0),_n(o,!1),wr++),wi(d),Lt=d};function Rf(o,d,m){var c=new ii(o>>>=0);throw d>>>=0,m>>>=0,(w(),H)[c.Tc+16>>>2>>>0]=0,(w(),H)[c.Tc+4>>>2>>>0]=d,(w(),H)[c.Tc+8>>>2>>>0]=m,wi(o),wr++,Lt=o}var Bf=()=>wr;function wn(o,d,m,c){return a?re(2,1,o,d,m,c):$n(o,d,m,c)}function $n(o,d,m,c){if(o>>>=0,d>>>=0,m>>>=0,c>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return a&&x.length===0?wn(o,d,m,c):(o={Ld:m,Rc:o,bd:c,rd:x},a?(o.Sc="spawnThread",postMessage(o,x),0):ct(o))}function Nf(o){throw Lt||(Lt=o>>>0),Lt}var vn=globalThis.TextDecoder&&new TextDecoder,xn=(o,d,m,c)=>{if(m=d+m,c)return m;for(;o[d]&&!(d>=m);)++d;return d},Sn=(o,d=0,m,c)=>{if(16<(m=xn(o,d>>>=0,m,c))-d&&o.buffer&&vn)return vn.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,m):o.slice(d,m));for(c="";d<m;){var x=o[d++];if(128&x){var T=63&o[d++];if((224&x)==192)c+=String.fromCharCode((31&x)<<6|T);else{var z=63&o[d++];65536>(x=(240&x)==224?(15&x)<<12|T<<6|z:(7&x)<<18|T<<12|z<<6|63&o[d++])?c+=String.fromCharCode(x):(x-=65536,c+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else c+=String.fromCharCode(x)}return c},Ie=(o,d,m)=>(o>>>=0)?Sn((w(),L),o,d,m):"";function kn(o,d,m){return a?re(3,1,o,d,m):0}function Tn(o,d){if(a)return re(4,1,o,d)}function In(o,d){if(a)return re(5,1,o,d)}function En(o,d,m){if(a)return re(6,1,o,d,m)}function zn(o,d,m){return a?re(7,1,o,d,m):0}function Cn(o,d){if(a)return re(8,1,o,d)}function An(o,d,m){if(a)return re(9,1,o,d,m)}function On(o,d,m,c){if(a)return re(10,1,o,d,m,c)}function Rn(o,d,m,c){if(a)return re(11,1,o,d,m,c)}function Bn(o,d,m,c){if(a)return re(12,1,o,d,m,c)}function Nn(o){if(a)return re(13,1,o)}function Mn(o,d){if(a)return re(14,1,o,d)}function Dn(o,d,m){if(a)return re(15,1,o,d,m)}var Mf=()=>q(""),rt=o=>{o>>>=0;for(var d="";;){var m=(w(),L)[o++>>>0];if(!m)return d;d+=String.fromCharCode(m)}},ni={},si={},Wt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ot(o,d,m={}){return function(c,x,T={}){var z=x.name;if(!c)throw new Wt(`type "${z}" must have a positive integer typeid pointer`);if(si.hasOwnProperty(c)){if(T.yd)return;throw new Wt(`Cannot register type '${z}' twice`)}si[c]=x,ni.hasOwnProperty(c)&&(x=ni[c],delete ni[c],x.forEach(N=>N()))}(o,d,m)}var Pn=(o,d,m)=>{switch(d){case 1:return m?c=>(w(),D)[c>>>0]:c=>(w(),L)[c>>>0];case 2:return m?c=>(w(),G)[c>>>1>>>0]:c=>(w(),j)[c>>>1>>>0];case 4:return m?c=>(w(),B)[c>>>2>>>0]:c=>(w(),H)[c>>>2>>>0];case 8:return m?c=>(w(),he)[c>>>3>>>0]:c=>(w(),V)[c>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function Df(o,d,m,c,x){o>>>=0,m>>>=0,d=rt(d>>>0);let T=z=>z;if(c=c===0n){let z=8*m;T=N=>BigInt.asUintN(z,N),x=T(x)}ot(o,{name:d,Oc:T,Vc:(z,N)=>(typeof N=="number"&&(N=BigInt(N)),N),Uc:Pn(d,m,!c),Wc:null})}function Pf(o,d,m,c){ot(o>>>=0,{name:d=rt(d>>>0),Oc:function(x){return!!x},Vc:function(x,T){return T?m:c},Uc:function(x){return this.Oc((w(),L)[x>>>0])},Wc:null})}var Un=[],St=[0,1,,1,null,1,!0,1,!1,1];function oi(o){9<(o>>>=0)&&--St[o+1]===0&&(St[o]=void 0,Un.push(o))}var He=o=>{if(!o)throw new Wt(`Cannot use deleted val. handle = ${o}`);return St[o]},je=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=Un.pop()||St.length;return St[d]=o,St[d+1]=1,d}};function ui(o){return this.Oc((w(),H)[o>>>2>>>0])}var Uf={name:"emscripten::val",Oc:o=>{var d=He(o);return oi(o),d},Vc:(o,d)=>je(d),Uc:ui,Wc:null};function qf(o){return ot(o>>>0,Uf)}var Lf=(o,d)=>{switch(d){case 4:return function(m){return this.Oc((w(),Z)[m>>>2>>>0])};case 8:return function(m){return this.Oc((w(),J)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function Wf(o,d,m){m>>>=0,ot(o>>>=0,{name:d=rt(d>>>0),Oc:c=>c,Vc:(c,x)=>x,Uc:Lf(d,m),Wc:null})}function Vf(o,d,m,c,x){o>>>=0,m>>>=0,d=rt(d>>>0);let T=N=>N;if(c===0){var z=32-8*m;T=N=>N<<z>>>z,x=T(x)}ot(o,{name:d,Oc:T,Vc:(N,W)=>W,Uc:Pn(d,m,c!==0),Wc:null})}function Gf(o,d,m){function c(T){var z=(w(),H)[T>>>2>>>0];return T=(w(),H)[T+4>>>2>>>0],new x((w(),D).buffer,T,z)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];ot(o>>>=0,{name:m=rt(m>>>0),Oc:c,Uc:c},{yd:!0})}var mt=(o,d,m)=>{var c=(w(),L);if(d>>>=0,0<m){var x=d;m=d+m-1;for(var T=0;T<o.length;++T){var z=o.codePointAt(T);if(127>=z){if(d>=m)break;c[d++>>>0]=z}else if(2047>=z){if(d+1>=m)break;c[d++>>>0]=192|z>>6,c[d++>>>0]=128|63&z}else if(65535>=z){if(d+2>=m)break;c[d++>>>0]=224|z>>12,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z}else{if(d+3>=m)break;c[d++>>>0]=240|z>>18,c[d++>>>0]=128|z>>12&63,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z,T++}}c[d>>>0]=0,o=d-x}else o=0;return o},$r=o=>{for(var d=0,m=0;m<o.length;++m){var c=o.charCodeAt(m);127>=c?d++:2047>=c?d+=2:55296<=c&&57343>=c?(d+=4,++m):d+=3}return d};function Hf(o,d){ot(o>>>=0,{name:d=rt(d>>>0),Oc(m){var c=(w(),H)[m>>>2>>>0];return c=Ie(m+4,c,!0),at(m),c},Vc(m,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var x=typeof c=="string";if(!(x||ArrayBuffer.isView(c)&&c.BYTES_PER_ELEMENT==1))throw new Wt("Cannot pass non-string to std::string");var T=x?$r(c):c.length,z=Yt(4+T+1),N=z+4;return(w(),H)[z>>>2>>>0]=T,x?mt(c,N,T+1):(w(),L).set(c,N>>>0),m!==null&&m.push(at,z),z},Uc:ui,Wc(m){at(m)}})}var qn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ff=(o,d,m)=>{if(o>>>=1,16<(d=xn((w(),j),o,d/2,m))-o&&qn)return qn.decode((w(),j).slice(o,d));for(m="";o<d;++o){var c=(w(),j)[o>>>0];m+=String.fromCharCode(c)}return m},jf=(o,d,m)=>{if(m??(m=2147483647),2>m)return 0;var c=d;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var T=o.charCodeAt(x);(w(),G)[d>>>1>>>0]=T,d+=2}return(w(),G)[d>>>1>>>0]=0,d-c},Kf=o=>2*o.length,Zf=(o,d,m)=>{var c="";o>>>=2;for(var x=0;!(x>=d/4);x++){var T=(w(),H)[o+x>>>0];if(!T&&!m)break;c+=String.fromCodePoint(T)}return c},Xf=(o,d,m)=>{if(d>>>=0,m??(m=2147483647),4>m)return 0;var c=d;m=c+m-4;for(var x=0;x<o.length;++x){var T=o.codePointAt(x);if(65535<T&&x++,(w(),B)[d>>>2>>>0]=T,(d+=4)+4>m)break}return(w(),B)[d>>>2>>>0]=0,d-c},Qf=o=>{for(var d=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,d+=4;return d};function Yf(o,d,m){if(o>>>=0,d>>>=0,m=rt(m>>>=0),d===2)var c=Ff,x=jf,T=Kf;else c=Zf,x=Xf,T=Qf;ot(o,{name:m,Oc:z=>{var N=(w(),H)[z>>>2>>>0];return N=c(z+4,N*d,!0),at(z),N},Vc:(z,N)=>{if(typeof N!="string")throw new Wt(`Cannot pass non-string to C++ string type ${m}`);var W=T(N),K=Yt(4+W+d);return(w(),H)[K>>>2>>>0]=W/d,x(N,K+4,W+d),z!==null&&z.push(at,K),K},Uc:ui,Wc(z){at(z)}})}function Jf(o,d){ot(o>>>=0,{zd:!0,name:d=rt(d>>>0),Oc:()=>{},Vc:()=>{}})}function em(o){yi(o>>>0,!i,1,!r,131072,!1),mn()}var vr=o=>{if(!C)try{if(o(),!(0<$e))try{a?zr()&&_i(_):Zt(_)}catch(d){d instanceof Te||d=="unwind"||p(0,d)}}catch(d){d instanceof Te||d=="unwind"||p(0,d)}},tm=!Atomics.waitAsync||((no=globalThis.navigator)==null?void 0:no.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function li(o){o>>>=0,tm||(Atomics.waitAsync((w(),B),o>>>2,o).value.then(xr),o+=128,Atomics.store((w(),B),o>>>2,1))}var xr=()=>vr(()=>{var o=zr();o&&(li(o),hs())});function rm(o,d){(o>>>=0)==d>>>0?setTimeout(xr):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=xt[o])&&o.postMessage({Sc:"checkMailbox"})}var di=[];function im(o,d,m,c,x){for(d>>>=0,x>>>=0,di.length=0,m=x>>>3,c=x+c>>>3;m<c;){var T;T=(w(),he)[m++>>>0]?(w(),he)[m++>>>0]:(w(),J)[m++>>>0],di.push(T)}return(d?vi[d]:jm[o])(...di)}var am=()=>{$e=0};function nm(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):fn(xt[o])}function sm(o){}var Sr=o=>{try{o()}catch(d){q(d)}};function om(o){var d=(...m)=>{kr.push(o);try{return o(...m)}finally{C||(kr.pop(),it&&gt===1&&kr.length===0&&(gt=0,$e+=1,Sr(to),typeof Fibers<"u"&&Fibers.Zd()))}};return Vn.set(o,d),d}var gt=0,it=null,Ln=0,kr=[],pi=new Map,Wn=new Map,Vn=new Map,um=0,ci=null,lm=[],Gn=o=>function(d){if(!C){if(gt===0){var m=!1,c=!1;d((x=0)=>{if(!C&&(Ln=x,m=!0,c)){gt=2,Sr(()=>ro(it)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var T=function(){var W=(w(),B)[it+8>>>2>>>0];return W=Wn.get(W),W=Vn.get(W),--$e,W()}()}catch(W){T=W,x=!0}var z=!1;if(!it){var N=ci;N&&(ci=null,(x?N.reject:N.resolve)(T),z=!0)}if(x&&!z)throw T}}),c=!0,m||(gt=1,it=function(){var x=Yt(65548),T=x+12;if((w(),H)[x>>>2>>>0]=T,(w(),H)[x+4>>>2>>>0]=T+65536,T=kr[0],!pi.has(T)){var z=um++;pi.set(T,z),Wn.set(z,T)}return T=pi.get(T),(w(),B)[x+8>>>2>>>0]=T,x}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Sr(()=>eo(it)))}else gt===2?(gt=0,Sr(io),at(it),it=null,lm.forEach(vr)):q(`invalid state: ${gt}`);return Ln}}(d=>{o().then(d)});function dm(o){return o>>>=0,Gn(async()=>{var d=await He(o);return je(d)})}var hi=[],pm=o=>{var d=hi.length;return hi.push(o),d},cm=(o,d)=>{for(var m=Array(o),c=0;c<o;++c){var x=c,T=(w(),H)[d+4*c>>>2>>>0],z=si[T];if(z===void 0)throw o=`parameter ${c}`,T=os(T),d=rt(T),at(T),new Wt(`${o} has unknown type ${d}`);m[x]=z}return m},hm=(o,d,m)=>{var c=[];return o=o(c,m),c.length&&((w(),H)[d>>>2>>>0]=je(c)),o},fm={},Tr=o=>{var d=fm[o];return d===void 0?rt(o):d};function mm(o,d,m){var[c,...x]=cm(o,d>>>0);d=c.Vc.bind(c);var T=x.map(W=>W.Uc.bind(W));o--;var z={toValue:He};switch(o=T.map((W,K)=>{var ne=`argFromPtr${K}`;return z[ne]=W,`${ne}(args${K?"+"+8*K:""})`}),m){case 0:var N="toValue(handle)";break;case 2:N="new (toValue(handle))";break;case 3:N="";break;case 1:z.getStringOrSymbol=Tr,N="toValue(handle)[getStringOrSymbol(methodName)]"}return N+=`(${o})`,c.zd||(z.toReturnWire=d,z.emval_returnValue=hm,N=`return emval_returnValue(toReturnWire, destructorsRef, ${N})`),N=`return function (handle, methodName, destructorsRef, args) {
  ${N}
  }`,m=new Function(Object.keys(z),N)(...Object.values(z)),N=`methodCaller<(${x.map(W=>W.name)}) => ${c.name}>`,pm(Object.defineProperty(m,"name",{value:N}))}function gm(o,d){return d>>>=0,(o=He(o>>>0))==He(d)}function ym(o){return(o>>>=0)?(o=Tr(o),je(globalThis[o])):je(globalThis)}function _m(o){return o=Tr(o>>>0),je(t[o])}function bm(o,d){return d>>>=0,o=He(o>>>0),d=He(d),je(o[d])}function wm(o){9<(o>>>=0)&&(St[o+1]+=1)}function Hn(o,d,m,c,x){return hi[o>>>0](d>>>0,m>>>0,c>>>0,x>>>0)}function $m(o,d,m,c,x){return Hn(o>>>0,d>>>0,m>>>0,c>>>0,x>>>0)}function vm(){return je([])}function xm(o){o=He(o>>>0);for(var d=Array(o.length),m=0;m<o.length;m++)d[m]=o[m];return je(d)}function Sm(o){return je(Tr(o>>>0))}function km(){return je({})}function Tm(o){for(var d=He(o>>>=0);d.length;){var m=d.pop();d.pop()(m)}oi(o)}function Im(o,d,m){d>>>=0,m>>>=0,o=He(o>>>0),d=He(d),m=He(m),o[d]=m}function Em(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(w(),B)[d>>>2>>>0]=o.getUTCSeconds(),(w(),B)[d+4>>>2>>>0]=o.getUTCMinutes(),(w(),B)[d+8>>>2>>>0]=o.getUTCHours(),(w(),B)[d+12>>>2>>>0]=o.getUTCDate(),(w(),B)[d+16>>>2>>>0]=o.getUTCMonth(),(w(),B)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(w(),B)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),B)[d+28>>>2>>>0]=o}var Fn=o=>o%4==0&&(o%100!=0||o%400==0),jn=[0,31,60,91,121,152,182,213,244,274,305,335],Kn=[0,31,59,90,120,151,181,212,243,273,304,334];function zm(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(w(),B)[d>>>2>>>0]=o.getSeconds(),(w(),B)[d+4>>>2>>>0]=o.getMinutes(),(w(),B)[d+8>>>2>>>0]=o.getHours(),(w(),B)[d+12>>>2>>>0]=o.getDate(),(w(),B)[d+16>>>2>>>0]=o.getMonth(),(w(),B)[d+20>>>2>>>0]=o.getFullYear()-1900,(w(),B)[d+24>>>2>>>0]=o.getDay();var m=(Fn(o.getFullYear())?jn:Kn)[o.getMonth()]+o.getDate()-1|0;(w(),B)[d+28>>>2>>>0]=m,(w(),B)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var c=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=c&&o.getTimezoneOffset()==Math.min(c,m)),(w(),B)[d+32>>>2>>>0]=o}function Cm(o){o>>>=0;var d=new Date((w(),B)[o+20>>>2>>>0]+1900,(w(),B)[o+16>>>2>>>0],(w(),B)[o+12>>>2>>>0],(w(),B)[o+8>>>2>>>0],(w(),B)[o+4>>>2>>>0],(w(),B)[o>>>2>>>0],0),m=(w(),B)[o+32>>>2>>>0],c=d.getTimezoneOffset(),x=new Date(d.getFullYear(),6,1).getTimezoneOffset(),T=new Date(d.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(T,x);return 0>m?(w(),B)[o+32>>>2>>>0]=+(x!=T&&z==c):0<m!=(z==c)&&(x=Math.max(T,x),d.setTime(d.getTime()+6e4*((0<m?z:x)-c))),(w(),B)[o+24>>>2>>>0]=d.getDay(),m=(Fn(d.getFullYear())?jn:Kn)[d.getMonth()]+d.getDate()-1|0,(w(),B)[o+28>>>2>>>0]=m,(w(),B)[o>>>2>>>0]=d.getSeconds(),(w(),B)[o+4>>>2>>>0]=d.getMinutes(),(w(),B)[o+8>>>2>>>0]=d.getHours(),(w(),B)[o+12>>>2>>>0]=d.getDate(),(w(),B)[o+16>>>2>>>0]=d.getMonth(),(w(),B)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Zn(o,d,m,c,x,T,z){return a?re(16,1,o,d,m,c,x,T,z):-52}function Xn(o,d,m,c,x,T){if(a)return re(17,1,o,d,m,c,x,T)}var Qt={},Am=()=>performance.timeOrigin+performance.now();function Qn(o,d){if(a)return re(18,1,o,d);if(Qt[o]&&(clearTimeout(Qt[o].id),delete Qt[o]),!d)return 0;var m=setTimeout(()=>{delete Qt[o],vr(()=>cs(o,performance.timeOrigin+performance.now()))},d);return Qt[o]={id:m,Yd:d},0}function Om(o,d,m,c){o>>>=0,d>>>=0,m>>>=0,c>>>=0;var x=new Date().getFullYear(),T=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var z=Math.max(T,x);(w(),H)[o>>>2>>>0]=60*z,(w(),B)[d>>>2>>>0]=+(T!=x),o=(d=N=>{var W=Math.abs(N);return`UTC${0<=N?"-":"+"}${String(Math.floor(W/60)).padStart(2,"0")}${String(W%60).padStart(2,"0")}`})(T),d=d(x),x<T?(mt(o,m,17),mt(d,c,17)):(mt(o,c,17),mt(d,m,17))}var Rm=()=>Date.now();function Bm(o,d,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(w(),he)[m>>>3>>>0]=BigInt(o),0):28}var fi=[],Yn=(o,d)=>{fi.length=0;for(var m;m=(w(),L)[o++>>>0];){var c=m!=105;d+=(c&=m!=112)&&d%8?4:0,fi.push(m==112?(w(),H)[d>>>2>>>0]:m==106?(w(),he)[d>>>3>>>0]:m==105?(w(),B)[d>>>2>>>0]:(w(),J)[d>>>3>>>0]),d+=c?8:4}return fi};function Nm(o,d,m){return o>>>=0,d=Yn(d>>>0,m>>>0),vi[o](...d)}function Mm(o,d,m){return o>>>=0,d=Yn(d>>>0,m>>>0),vi[o](...d)}var Dm=()=>{};function Pm(o,d){return E(Ie(o>>>0,d>>>0))}var Um=()=>{throw $e+=1,"unwind"};function qm(){return 4294901760}var Lm=()=>navigator.hardwareConcurrency,kt={},Ir=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},Jn=o=>{for(var d of o)(o=Ir(d))&&(kt[o]=d)};function Wm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Jn(o),kt.gd=Ir(o[3]),kt.Jd=o,kt.gd}function Er(o){if(!(o=kt[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}at(Er.hd??0),d=$r(o)+1;var m=Yt(d);return m&&mt(o,m,d),Er.hd=m,Er.hd}function Vm(o){o>>>=0;var d=(w(),L).length;if(o<=d||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var c=d*(1+.2/m);c=Math.min(c,o+100663296);e:{c=(Math.min(4294901760,65536*Math.ceil(Math.max(o,c)/65536))-ft.buffer.byteLength+65535)/65536|0;try{ft.grow(c),F();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function Gm(o,d,m){if(o>>>=0,d>>>=0,kt.gd==o)var c=kt.Jd;else(c=Error().stack.toString().split(`
`))[0]=="Error"&&c.shift(),Jn(c);for(var x=3;c[x]&&Ir(c[x])!=o;)++x;for(o=0;o<m&&c[o+x];++o)(w(),B)[d+4*o>>>2>>>0]=Ir(c[o+x]);return o}var mi,gi={},es=()=>{var c;if(!mi){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((c=globalThis.navigator)==null?void 0:c.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in gi)gi[o]===void 0?delete d[o]:d[o]=gi[o];var m=[];for(o in d)m.push(`${o}=${d[o]}`);mi=m}return mi};function ts(o,d){if(a)return re(19,1,o,d);o>>>=0,d>>>=0;var m,c=0,x=0;for(m of es()){var T=d+c;(w(),H)[o+x>>>2>>>0]=T,c+=mt(m,T,1/0)+1,x+=4}return 0}function rs(o,d){if(a)return re(20,1,o,d);o>>>=0,d>>>=0;var m=es();for(var c of((w(),H)[o>>>2>>>0]=m.length,o=0,m))o+=$r(c)+1;return(w(),H)[d>>>2>>>0]=o,0}function is(o){return a?re(21,1,o):52}function as(o,d,m,c){return a?re(22,1,o,d,m,c):52}function ns(o,d,m,c){return a?re(23,1,o,d,m,c):70}var Hm=[null,[],[]];function ss(o,d,m,c){if(a)return re(24,1,o,d,m,c);d>>>=0,m>>>=0,c>>>=0;for(var x=0,T=0;T<m;T++){var z=(w(),H)[d>>>2>>>0],N=(w(),H)[d+4>>>2>>>0];d+=8;for(var W=0;W<N;W++){var K=o,ne=(w(),L)[z+W>>>0],pe=Hm[K];ne===0||ne===10?((K===1?S:E)(Sn(pe)),pe.length=0):pe.push(ne)}x+=N}return(w(),H)[c>>>2>>>0]=x,0}function Fm(o){return o>>>0}a||function(){for(var o=t.numThreads-1;o--;)yn();Ne.push(async()=>{var d=async function(){if(!a)return Promise.all(ht.map(gn))}();Pe++,await d,--Pe==0&&Me&&(d=Me,Me=null,d())})}(),a||(ft=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=o=>se(o),t.stackAlloc=o=>bi(o),t.setValue=function(o,d,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(w(),D)[o>>>0]=d;break;case"i16":(w(),G)[o>>>1>>>0]=d;break;case"i32":(w(),B)[o>>>2>>>0]=d;break;case"i64":(w(),he)[o>>>3>>>0]=BigInt(d);break;case"float":(w(),Z)[o>>>2>>>0]=d;break;case"double":(w(),J)[o>>>3>>>0]=d;break;case"*":(w(),H)[o>>>2>>>0]=d;break;default:q(`invalid type for setValue: ${m}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(w(),D)[o>>>0];case"i16":return(w(),G)[o>>>1>>>0];case"i32":return(w(),B)[o>>>2>>>0];case"i64":return(w(),he)[o>>>3>>>0];case"float":return(w(),Z)[o>>>2>>>0];case"double":return(w(),J)[o>>>3>>>0];case"*":return(w(),H)[o>>>2>>>0];default:q(`invalid type for getValue: ${d}`)}},t.UTF8ToString=Ie,t.stringToUTF8=mt,t.lengthBytesUTF8=$r;var os,us,zr,at,Yt,yi,ls,ds,ps,_i,cs,hs,le,Jt,fs,se,bi,oe,ms,wi,gs,ys,_s,$i,bs,ws,$s,vs,xs,Ss,ks,Ts,Is,Es,zs,Cs,As,Os,Rs,Bs,Ns,Ms,Ds,Ps,Us,qs,Ls,Ws,Vs,Gs,Hs,Fs,js,Ks,Zs,Xs,Qs,Ys,Js,eo,to,ro,io,ut,jm=[Ue,_r,wn,kn,Tn,In,En,zn,Cn,An,On,Rn,Bn,Nn,Mn,Dn,Zn,Xn,Qn,ts,rs,is,as,ns,ss],vi={1003524:(o,d,m,c,x)=>{if(t===void 0||!t.Xc)return 1;if((o=Ie(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(d=Number(d>>>0),m=Number(m>>>0),c=Number(c>>>0),d+m>o.byteLength)return 3;try{let T=o.subarray(d,d+m);switch(x){case 0:(w(),L).set(T,c>>>0);break;case 1:t.Qd?t.Qd(c,T):t.Id(c,T);break;default:return 4}return 0}catch{return 4}},1004348:(o,d,m)=>{t.td(o,(w(),L).subarray(d>>>0,d+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m),!0)},1004704:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,d,m)=>{t.$b("HardSigmoid",o,{alpha:d,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,d,m)=>{t.$b("Clip",o,{min:d,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,d)=>{t.$b("Elu",o,{alpha:d})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,d)=>{t.$b("LeakyRelu",o,{alpha:d})},1006444:(o,d)=>{t.$b("ThresholdedRelu",o,{alpha:d})},1006514:(o,d)=>{t.$b("Cast",o,{to:d})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,d,m,c,x)=>{t.$b("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1007283:(o,d,m,c,x)=>{t.$b("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1007457:(o,d,m,c,x)=>{t.$b("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1007631:(o,d,m,c,x)=>{t.$b("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1007806:(o,d,m,c,x)=>{t.$b("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1007980:(o,d,m,c,x)=>{t.$b("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1008153:(o,d,m,c,x)=>{t.$b("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1008326:(o,d,m,c,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1008503:(o,d,m,c,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1008683:(o,d,m,c,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,d,m)=>{t.$b("Transpose",o,{perm:d?Array.from((w(),B).subarray(Number(d)>>>0,Number(m)>>>0)):[]})},1009040:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Ie(m),format:c?"NHWC":"NCHW"})},1009173:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Ie(m),format:c?"NHWC":"NCHW"})},1009306:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve,yt)=>{t.$b("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[x],pads:[T,z],strides:[N],wIsConst:()=>!!(w(),D)[K>>>0],outputPadding:ne?Array.from((w(),B).subarray(Number(ne)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from((w(),B).subarray(Number(_e)>>>0,Number(ve)>>>0)):[],activation:Ie(yt)})},1009739:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:d,dilations:Array.from((w(),B).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((w(),B).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((w(),B).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((w(),B).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(w(),D)[W>>>0],outputPadding:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],outputShape:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Ie(ve)})},1010400:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve,yt)=>{t.$b("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[x],pads:[T,z],strides:[N],wIsConst:()=>!!(w(),D)[K>>>0],outputPadding:ne?Array.from((w(),B).subarray(Number(ne)>>>0,Number(pe)>>>0)):[],outputShape:_e?Array.from((w(),B).subarray(Number(_e)>>>0,Number(ve)>>>0)):[],activation:Ie(yt)})},1010833:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:d,dilations:Array.from((w(),B).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((w(),B).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((w(),B).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((w(),B).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(w(),D)[W>>>0],outputPadding:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],outputShape:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[],activation:Ie(ve)})},1011494:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1011585:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("AveragePool",o,{format:ve?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:x,dilations:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:N?Array.from((w(),B).subarray(Number(N)>>>0,Number(W)>>>0)):[],pads:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1012064:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1012155:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("AveragePool",o,{format:ve?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:x,dilations:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:N?Array.from((w(),B).subarray(Number(N)>>>0,Number(W)>>>0)):[],pads:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1012634:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1012721:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("MaxPool",o,{format:ve?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:x,dilations:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:N?Array.from((w(),B).subarray(Number(N)>>>0,Number(W)>>>0)):[],pads:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1013196:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1013283:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve)=>{t.$b("MaxPool",o,{format:ve?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:x,dilations:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:N?Array.from((w(),B).subarray(Number(N)>>>0,Number(W)>>>0)):[],pads:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],strides:pe?Array.from((w(),B).subarray(Number(pe)>>>0,Number(_e)>>>0)):[]})},1013758:(o,d,m,c,x)=>{t.$b("Gemm",o,{alpha:d,beta:m,transA:c,transB:x})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,d,m,c)=>{t.$b("ArgMax",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014024:(o,d,m,c)=>{t.$b("ArgMin",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014132:(o,d)=>{t.$b("Softmax",o,{axis:d})},1014195:(o,d)=>{t.$b("Concat",o,{axis:d})},1014255:(o,d,m,c,x)=>{t.$b("Split",o,{axis:d,numOutputs:m,splitSizes:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,d)=>{t.$b("Gather",o,{axis:Number(d)})},1014536:(o,d)=>{t.$b("GatherElements",o,{axis:Number(d)})},1014615:(o,d)=>{t.$b("GatherND",o,{batch_dims:Number(d)})},1014694:(o,d,m,c,x,T,z,N,W,K,ne)=>{t.$b("Resize",o,{antialias:d,axes:m?Array.from((w(),B).subarray(Number(m)>>>0,Number(c)>>>0)):[],coordinateTransformMode:Ie(x),cubicCoeffA:T,excludeOutside:z,extrapolationValue:N,keepAspectRatioPolicy:Ie(W),mode:Ie(K),nearestMode:Ie(ne)})},1015056:(o,d,m,c,x,T,z)=>{t.$b("Slice",o,{starts:d?Array.from((w(),B).subarray(Number(d)>>>0,Number(m)>>>0)):[],ends:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[],axes:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015486:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,d)=>{t.$b("Einsum",o,{equation:Ie(d)})},1015734:(o,d,m,c,x)=>{t.$b("Pad",o,{mode:d,value:m,pads:c?Array.from((w(),B).subarray(Number(c)>>>0,Number(x)>>>0)):[]})},1015877:(o,d,m,c,x,T)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!x,trainingMode:!!c,format:T?"NHWC":"NCHW"})},1016046:(o,d,m,c,x,T)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!x,trainingMode:!!c,format:T?"NHWC":"NCHW"})},1016215:(o,d,m)=>{t.$b("CumSum",o,{exclusive:Number(d),reverse:Number(m)})},1016312:(o,d,m)=>{t.$b("DequantizeLinear",o,{axis:d,blockSize:m})},1016402:(o,d,m,c,x)=>{t.$b("GridSample",o,{align_corners:d,mode:Ie(m),padding_mode:Ie(c),format:x?"NHWC":"NCHW"})},1016572:(o,d,m,c,x)=>{t.$b("GridSample",o,{align_corners:d,mode:Ie(m),padding_mode:Ie(c),format:x?"NHWC":"NCHW"})},1016742:(o,d)=>{t.$b("ScatterND",o,{reduction:Ie(d)})},1016827:(o,d,m,c,x,T,z,N,W)=>{t.$b("Attention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:x,doRotary:T,qkvHiddenSizes:z?Array.from((w(),B).subarray(Number(N)>>>0,Number(N)+z>>>0)):[],pastPresentShareBuffer:!!W})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve,yt,xi)=>{t.$b("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:d,dilations:m?Array.from((w(),B).subarray(Number(m)>>>0,Number(c)>>>0)):[],group:x,kernel_shape:T?Array.from((w(),B).subarray(Number(T)>>>0,Number(z)>>>0)):[],pads:N?Array.from((w(),B).subarray(Number(N)>>>0,Number(W)>>>0)):[],strides:K?Array.from((w(),B).subarray(Number(K)>>>0,Number(ne)>>>0)):[],w_is_const:()=>!!(w(),D)[Number(_e)>>>0],activation:Ie(ve),activation_params:yt?Array.from((w(),Z).subarray(Number(yt)>>>0,Number(xi)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,d,m,c,x,T,z,N,W)=>{t.$b("GroupQueryAttention",o,{numHeads:d,kvNumHeads:m,scale:c,softcap:x,doRotary:T,rotaryInterleaved:z,smoothSoftmax:N,localWindowSize:W})},1018124:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018235:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018346:(o,d,m,c,x,T)=>{t.$b("MatMulNBits",o,{k:d,n:m,accuracyLevel:c,bits:x,blockSize:T})},1018473:(o,d,m,c,x,T)=>{t.$b("MultiHeadAttention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:x,doRotary:T})},1018632:(o,d)=>{t.$b("QuickGelu",o,{alpha:d})},1018696:(o,d,m,c,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!d,numHeads:m,rotaryEmbeddingDim:c,scale:x})},1018835:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1018937:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1019039:(o,d,m,c)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:m,blockSize:c})},1019160:o=>{t.Fd(o)},1019194:(o,d)=>t.Hd(Number(o),Number(d),t.Yc.Kd,t.Yc.errors)};function Km(o,d,m){return Gn(async()=>{await t.Dd(Number(o),Number(d),Number(m))})}function Zm(){return typeof wasmOffsetConverter<"u"}function Xm(o,d,m,c){var x=oe();try{return Ts(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function Qm(o,d,m){var c=oe();try{return vs(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;le(1,0)}}function Ym(o){var d=oe();try{bs(o)}catch(m){if(se(d),m!==m+0)throw m;le(1,0)}}function Jm(o,d){var m=oe();try{return $i(o,d)}catch(c){if(se(m),c!==c+0)throw c;le(1,0)}}function eg(o,d,m){var c=oe();try{_s(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;le(1,0)}}function tg(o,d){var m=oe();try{Is(o,d)}catch(c){if(se(m),c!==c+0)throw c;le(1,0)}}function rg(o,d,m,c,x,T,z){var N=oe();try{return Ss(o,d,m,c,x,T,z)}catch(W){if(se(N),W!==W+0)throw W;le(1,0)}}function ig(o,d,m,c,x,T){var z=oe();try{ws(o,d,m,c,x,T)}catch(N){if(se(z),N!==N+0)throw N;le(1,0)}}function ag(o,d,m,c){var x=oe();try{ks(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function ng(o,d,m,c,x){var T=oe();try{$s(o,d,m,c,x)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function sg(o,d,m,c,x,T,z){var N=oe();try{zs(o,d,m,c,x,T,z)}catch(W){if(se(N),W!==W+0)throw W;le(1,0)}}function og(o,d,m,c,x,T,z){var N=oe();try{Cs(o,d,m,c,x,T,z)}catch(W){if(se(N),W!==W+0)throw W;le(1,0)}}function ug(o,d,m,c,x,T,z,N){var W=oe();try{Bs(o,d,m,c,x,T,z,N)}catch(K){if(se(W),K!==K+0)throw K;le(1,0)}}function lg(o,d,m,c,x){var T=oe();try{return Es(o,d,m,c,x)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function dg(o,d,m){var c=oe();try{return Ns(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;le(1,0)}}function pg(o,d,m,c,x,T,z,N){var W=oe();try{Ms(o,d,m,c,x,T,z,N)}catch(K){if(se(W),K!==K+0)throw K;le(1,0)}}function cg(o,d,m,c,x,T,z,N,W,K,ne,pe){var _e=oe();try{As(o,d,m,c,x,T,z,N,W,K,ne,pe)}catch(ve){if(se(_e),ve!==ve+0)throw ve;le(1,0)}}function hg(o,d,m,c,x,T){var z=oe();try{return Os(o,d,m,c,x,T)}catch(N){if(se(z),N!==N+0)throw N;le(1,0)}}function fg(o,d,m){var c=oe();try{return Ds(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;return le(1,0),0n}}function mg(o,d,m,c,x,T,z,N,W){var K=oe();try{xs(o,d,m,c,x,T,z,N,W)}catch(ne){if(se(K),ne!==ne+0)throw ne;le(1,0)}}function gg(o){var d=oe();try{return Ps(o)}catch(m){if(se(d),m!==m+0)throw m;le(1,0)}}function yg(o,d){var m=oe();try{return Js(o,d)}catch(c){if(se(m),c!==c+0)throw c;return le(1,0),0n}}function _g(o){var d=oe();try{return Us(o)}catch(m){if(se(d),m!==m+0)throw m;return le(1,0),0n}}function bg(o,d,m,c){var x=oe();try{return Hs(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function wg(o,d,m,c,x){var T=oe();try{return Fs(o,d,m,c,x)}catch(z){if(se(T),z!==z+0)throw z;le(1,0)}}function $g(o,d,m,c,x,T){var z=oe();try{return js(o,d,m,c,x,T)}catch(N){if(se(z),N!==N+0)throw N;le(1,0)}}function vg(o,d,m,c,x,T){var z=oe();try{return Ks(o,d,m,c,x,T)}catch(N){if(se(z),N!==N+0)throw N;le(1,0)}}function xg(o,d,m,c,x,T,z,N){var W=oe();try{return Rs(o,d,m,c,x,T,z,N)}catch(K){if(se(W),K!==K+0)throw K;le(1,0)}}function Sg(o,d,m,c,x){var T=oe();try{return Zs(o,d,m,c,x)}catch(z){if(se(T),z!==z+0)throw z;return le(1,0),0n}}function kg(o,d,m,c){var x=oe();try{return Xs(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function Tg(o,d,m,c){var x=oe();try{return Qs(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function Ig(o,d,m,c,x,T,z,N,W,K,ne,pe){var _e=oe();try{return Ys(o,d,m,c,x,T,z,N,W,K,ne,pe)}catch(ve){if(se(_e),ve!==ve+0)throw ve;le(1,0)}}function Eg(o,d,m,c,x,T,z,N,W,K,ne){var pe=oe();try{Vs(o,d,m,c,x,T,z,N,W,K,ne)}catch(_e){if(se(pe),_e!==_e+0)throw _e;le(1,0)}}function zg(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve,yt,xi){var Rg=oe();try{Gs(o,d,m,c,x,T,z,N,W,K,ne,pe,_e,ve,yt,xi)}catch(Si){if(se(Rg),Si!==Si+0)throw Si;le(1,0)}}function Cg(o,d,m){var c=oe();try{return qs(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;le(1,0)}}function Ag(o,d,m){var c=oe();try{return Ls(o,d,m)}catch(x){if(se(c),x!==x+0)throw x;le(1,0)}}function Og(o,d,m,c){var x=oe();try{Ws(o,d,m,c)}catch(T){if(se(x),T!==T+0)throw T;le(1,0)}}function Cr(){if(0<Pe)Me=Cr;else if(a)b==null||b(t),X();else{for(var o=Ne;0<o.length;)o.shift()(t);0<Pe?Me=Cr:(t.calledRun=!0,C||(X(),b==null||b(t)))}}return a||(ut=await Ge(),Cr()),t.PTR_SIZE=4,U?t:new Promise((o,d)=>{b=o,k=d})}var lp,lo,n0=P(()=>{var e,t;lp=uo,lo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),lo&&uo()}),Ci,$a,po,Le,dp,Or,co,ho,Ai,fo,Oi,pp,Ri,cp,La=P(()=>{qa(),Ci=typeof location>"u"?void 0:location.origin,$a=import.meta.url>"file:"&&import.meta.url<"file;",po=()=>{{if($a){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ci).href}return import.meta.url}},Le=po(),dp=()=>{if(Le&&!Le.startsWith("blob:"))return Le.substring(0,Le.lastIndexOf("/")+1)},Or=(e,t)=>{try{let r=t??Le;return(r?new URL(e,r):new URL(e)).origin===Ci}catch{return!1}},co=(e,t)=>{let r=t??Le;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ho=(e,t)=>`${t??"./"}${e}`,Ai=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},fo=async e=>(await import(e)).default,Oi=(a0(),gr(sp)).default,pp=async()=>{if(!Le)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(Le))return[void 0,Oi()];let e=await Ai(Le);return[e,Oi(e)]},Ri=(n0(),gr(up)).default,cp=async(e,t,r,i)=>{let a=Ri&&!(e||t);if(a)if(Le)a=Or(Le)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Ri];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??co(s,t),u=r&&n&&!Or(n,t),l=u?await Ai(n):n??ho(s,t);return[u?l:void 0,await fo(l)]}}}),Bi,Rr,tr,Ni,mo,go,yo,Wa,we,Ut=P(()=>{La(),Rr=!1,tr=!1,Ni=!1,mo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},go=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},yo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Wa=async e=>{if(Rr)return Promise.resolve();if(tr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ni)throw new Error("previous call to 'initializeWebAssembly()' failed.");tr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!yo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!go())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=mo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a==null?void 0:a.mjs,u=(n==null?void 0:n.href)??n,l=a==null?void 0:a.wasm,p=(l==null?void 0:l.href)??l,h=e.wasmBinary,[f,g]=await cp(u,s,r>1,!!h||!!p),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,k)=>{let v={numThreads:r};if(h)v.wasmBinary=h,v.locateFile=$=>$;else if(p||s)v.locateFile=$=>p??s+$;else if(u&&u.indexOf("blob:")!==0)v.locateFile=$=>new URL($,u).href;else if(f){let $=dp();$&&(v.locateFile=I=>$+I)}g(v).then($=>{tr=!1,Rr=!0,Bi=$,b(),f&&URL.revokeObjectURL(f)},$=>{tr=!1,Ni=!0,k($)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},we=()=>{if(Rr&&Bi)return Bi;throw new Error("WebAssembly is not initialized yet.")}}),Je,Zr,ge,Va=P(()=>{Ut(),Je=(e,t)=>{let r=we(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Zr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")Zr(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},ge=e=>{let t=we(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),u=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),hp,s0=P(()=>{Ut(),Va(),hp=e=>{let t=we(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Je(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&ge("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Zr(e.extra,"",new WeakSet,(n,u)=>{let l=Je(n,i),p=Je(u,i);t._OrtAddRunConfigEntry(r,l,p)!==0&&ge(`Can't set a run config entry: ${n} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),_o,bo,wo,Tt,$o,fp,o0=P(()=>{Ut(),Va(),_o=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},bo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},wo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Tt=(e,t,r,i)=>{let a=Je(t,i),s=Je(r,i);we()._OrtAddSessionConfigEntry(e,a,s)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},$o=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",Tt(e,"session.disable_quant_qdq","1",r),Tt(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let f=a==null?void 0:a.deviceType;f&&Tt(e,"deviceType",f,r)}break;case"webgpu":if(s="JS",typeof a!="string"){let f=a;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);Tt(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let u=Je(s,r),l=n.length,p=0,h=0;if(l>0){p=we()._malloc(l*we().PTR_SIZE),r.push(p),h=we()._malloc(l*we().PTR_SIZE),r.push(h);for(let f=0;f<l;f++)we().setValue(p+f*we().PTR_SIZE,n[f][0],"*"),we().setValue(h+f*we().PTR_SIZE,n[f][1],"*")}await we()._OrtAppendExecutionProvider(e,u,p,h,l)!==0&&ge(`Can't append execution provider: ${s}.`)}},fp=async e=>{let t=we(),r=0,i=[],a=e||{};wo(a);try{let s=_o(a.graphOptimizationLevel??"all"),n=bo(a.executionMode??"sequential"),u=typeof a.logId=="string"?Je(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let h=typeof a.optimizedModelFilePath=="string"?Je(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,u,l,p,h),r===0&&ge("Can't create session options."),a.executionProviders&&await $o(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Tt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,g]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Je(f,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&ge(`Can't set a free dimension override: ${f} - ${g}.`)}return a.extra!==void 0&&Zr(a.extra,"",new WeakSet,(f,g)=>{Tt(r,f,g,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),Ot,dt,Rt,ri,Xr,Ga,Ha,va,te=P(()=>{Ot=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},dt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Rt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},ri=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ga=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ha=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",va=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Fa,mp=P(()=>{qa(),Fa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let n=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let p=l.byteLength;new Uint8Array(s,n,p).set(l),n+=p}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),vo,xo,So,ko,ja,To,de,pt=P(()=>{te(),vo=["V","I","W","E","F"],xo=(e,t)=>{console.log(`[${vo[e]},${new Date().toISOString()}]${t}`)},ja=(e,t)=>{So=e,ko=t},To=(e,t)=>{let r=Xr(e),i=Xr(So);r>=i&&xo(r,typeof t=="function"?t():t)},de=(...e)=>{ko&&To(...e)}}),Io,Ft,R,Qr,gp,yp,_p,ie=P(()=>{Io=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ft=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let u=Io.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[n[s-2],n[s-1]]=u}for(let u=r?3:1;u<=s;u++){let l=i-u<0?1:e[i-u],p=a-u<0?1:t[a-u];if(l!==p&&l>1&&p>1)return;let h=Math.max(l,p);if(l&&p)n[s-u]=Math.max(l,p);else{if(h>1)return;n[s-u]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},R=class Hr{static size(t){return Hr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Hr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Hr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Qr=class pr{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<i.length*2;u++)if(u<n.length){if(n[u]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[u]>=i[u]||n[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)pr.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],i[l],a[l],s,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,s,n,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return pr.computeShapeHelper(t,r,l,i,a,s,n,u),l}static computeConvOutputShape(t,r,i,a,s,n,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return pr.computeShapeHelper(!1,t,l,i,a,s,n,u),l}static computeShapeHelper(t,r,i,a,s,n,u,l){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(pr.adjustPadAndReturnShape(r[p+2],a[p],s[p],n[p],u,p,p+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,s,n,u,l){let p=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[u]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+a-t;return s[n]=Math.floor(l==="SAME_LOWER"?(h+1)/2:h/2),s[u]=h-s[n],Math.floor((t+h-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[u]-p)/r+1)}},gp=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,u;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||u<=0||n<=0)throw new Error("invalid shape specified");if(a&&!Ft.isValidBroadcast(a,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,n]}},yp=-34028234663852886e22,_p=34028234663852886e22}),Ka,bp=P(()=>{te(),Ka=(e,t)=>new(ri(t))(e)}),Mi,xa,Di,Eo,Pi,zo,Ui,qi,Li,Co,wp,u0=P(()=>{te(),pt(),Mi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),xa=(e,t)=>{if(t==="int32")return e;let r=Mi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,s=new(ri(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let u=0;u<a;u++){let l=s[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[u]=Number(l)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Di=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Eo=1,Pi=()=>Eo++,zo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ui=(e,t)=>{let r=Mi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ui(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Di(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Li=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!(s!=null&&s.input.dataTypes.includes(t))){if(n=zo.get(t),!n||(s==null?void 0:s.input.dataTypes.includes(n)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ui(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=xa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Di(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Co=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Pi();return this.tensorTrackersById.set(e,new Li(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),s=Pi(),n=new qi({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new Li(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,r,i,a,s,n){let u=this.getMLContext(e);for(let[p,h]of this.freeTensors.entries())if(h.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}`);let f=this.freeTensors.splice(p,1)[0];return f.sessionId=e,f}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:n??t,shape:r,dimensions:r,usage:i,writable:a,readable:s});return new qi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},wp=(...e)=>new Co(...e)}),rr,Ao,$p,l0=P(()=>{te(),Ut(),bp(),u0(),pt(),rr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ao=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},$p=class{constructor(e){this.tensorManager=wp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ja(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Ao(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let s=rr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,a)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=rr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!we().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ka(r,t)}}registerMLTensor(e,t,r,i){let a=rr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,a,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,a,s,n=!1){if(!s)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=s.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=l.slice(t,t+r).buffer,h;switch(a.dataType){case"float32":h=new Float32Array(p);break;case"float16":h=typeof Float16Array<"u"?new Float16Array(p):new Uint16Array(p);break;case"int32":h=new Int32Array(p);break;case"uint32":h=new Uint32Array(p);break;case"int64":if(n){let f=xa(new Uint8Array(p),"int64");h=new Int32Array(f.buffer),a.dataType="int32"}else h=new BigInt64Array(p);break;case"uint64":h=new BigUint64Array(p);break;case"int8":h=new Int8Array(p);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${n?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=rr.get(Ot(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(a!=null&&a.input.dataTypes.includes(i)):!!(a!=null&&a.output.dataTypes.includes(i))}flush(){}}}),Za=P(()=>{}),Wi,Br,Nr,Oo,Ro,Vi,Sa,Bo,vp,d0=P(()=>{pt(),Za(),Wi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Br=[],Nr=e=>Math.ceil(Number(e)/16)*16,Oo=e=>{for(let t=0;t<Br.length;t++){let r=Br[t];if(e<=r)return r}return Math.ceil(e/16)*16},Ro=1,Vi=()=>Ro++,Sa=async(e,t,r,i)=>{let a=Nr(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},Bo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wi)Br.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=Nr(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(u,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([p.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Nr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Vi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Oo(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:Vi(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Sa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},vp=(...e)=>new Bo(...e)}),No,fe,Se=P(()=>{No=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},fe=e=>new No(e)}),jt,Mr,Ee,Oe,ee,xe,ka,Ht,$t,Y,ir,M,Q,xp,Xa,Mo,Sp,ae=P(()=>{te(),ie(),jt=64,Mr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Mr(e,t);return typeof r=="string"?r:r[0]},Oe=(e,t=1)=>{let r=Mr(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},xe=e=>e%4===0?4:e%2===0?2:1,ka=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ht=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,$t=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ir=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,u=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,p=Mr(t,a),h=typeof p=="string"?p:p[1],f=typeof p=="string"?p:p[0],g={indices:l,value:h,storage:f,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",k=`${b}${e}_shape`,v=`${b}${e}_strides`,$="";for(let U=0;U<n-1;U++)$+=`
    let dim${U} = current / ${Y(v,U,n)};
    let rest${U} = current % ${Y(v,U,n)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;$+=`indices[${n-1}] = current;`;let I=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=U=>(_.offsetToIndices=!0,n<2?U:`o2i_${e}(${U})`),E=[];if(n>=2)for(let U=n-1;U>=0;U--)E.push(`${Y(v,U,n)} * (indices[${U}])`);let C=n<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,A=U=>(_.indicesToOffset=!0,n<2?U:`i2o_${e}(${U})`),w=(...U)=>n===0?"0u":`${g.indices}(${U.map(y).join(",")})`,O=(U,F)=>n<2?`${U}`:`${Y(U,F,n)}`,D=(U,F,X)=>n<2?`${U}=${X};`:`${Y(U,F,n)}=${X};`,L={},G=(U,F)=>{_.broadcastedIndicesToOffset=!0;let X=`${F.name}broadcastedIndicesTo${e}Offset`;if(X in L)return`${X}(${U})`;let q=[];for(let me=n-1;me>=0;me--){let Ge=F.indicesGet("outputIndices",me+F.rank-n);q.push(`${O(v,me)} * (${Ge} % ${O(k,me)})`)}return L[X]=`fn ${X}(outputIndices: ${F.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${X}(${U})`},j=(U,F)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${F};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${F}), select(0u, 0xFFFFFFFFu, ${F} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${F}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${F}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),B=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),H=n<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${h} {
    return ${B(`i2o_${e}(indices)`)};
  }`,Z=n<2?"":(()=>{let U=u.map(X=>`d${X}: u32`).join(", "),F=u.map(X=>`d${X}`).join(", ");return`
  fn get_${e}(${U}) -> ${h} {
    return get_${e}ByIndices(${w(F)});
  }`})(),J=(...U)=>{if(U.length!==n)throw new Error(`indices length must be ${n}`);let F=U.map(y).join(",");return n===0?B("0u"):n===1?B(F[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${F})`)},he=U=>n<2?B(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),V=n<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${h}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,ue=n<2?"":(()=>{let U=u.map(X=>`d${X}: u32`).join(", "),F=u.map(X=>`d${X}`).join(", ");return`
  fn set_${e}(${U}, value: ${h}) {
    set_${e}ByIndices(${w(F)}, value);
  }`})();return{impl:()=>{let U=[],F=!1;return _.offsetToIndices&&(U.push(I),F=!0),_.indicesToOffset&&(U.push(C),F=!0),_.broadcastedIndicesToOffset&&(Object.values(L).forEach(X=>U.push(X)),F=!0),_.set&&(U.push(ue),F=!0),_.setByIndices&&(U.push(V),F=!0),_.get&&(U.push(Z),F=!0),_.getByIndices&&(U.push(H),F=!0),!s&&F&&U.unshift(`const ${k} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${R.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:S,indicesToOffset:A,broadcastedIndicesToOffset:G,indices:w,indicesGet:O,indicesSet:D,set:(...U)=>{if(U.length!==n+1)throw new Error(`indices length must be ${n}`);let F=U[n];if(typeof F!="string")throw new Error("value must be string");let X=U.slice(0,n).map(y).join(",");return n===0?j("0u",F):n===1?j(X[0],F):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${X}, ${F})`)},setByOffset:j,setByIndices:(U,F)=>n<2?j(U,F):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${F});`),get:J,getByOffset:B,getByIndices:he,usage:i,name:e,strides:v,shape:k,rank:n}},M=(e,t,r,i=1)=>ir(e,t,r,"input",i),Q=(e,t,r,i=1)=>ir(e,t,r,"output",i),xp=(e,t,r)=>ir(e,t,r,"atomicOutput",1),Xa=(e,t,r,i=1)=>ir(e,t,r,"internal",i),Mo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=jt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Sp=(e,t)=>new Mo(e,t)}),Do,Gi,Po,Uo,qo,Lo,Ve,kp,Tp,vt=P(()=>{te(),ie(),Se(),ae(),Do=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Po=(e,t)=>R.sortBasedOnPerm(e,Gi(e.length,t)),Uo=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},qo=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Lo=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ve=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Gi(i,t),s=Po(e.dims,a),n=e.dims,u=s,l=i<2||Lo(a,e.dims),p;if(l)return p=_=>{let b=M("input",r,n,4),k=Q("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:p};let{newShape:h,newPerm:f}=qo(e.dims,a),g=R.areEqual(f,[2,3,1]),y=R.areEqual(f,[3,1,2]);if(h.length===2||g||y){n=g?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,u=[n[1],n[0]];let _=16;return p=b=>{let k=M("a",r,n.length),v=Q("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(k,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...ee(n,u)]}},getShaderSource:p}}return p=_=>{let b=M("a",r,n.length),k=Q("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,k)}

  ${Uo(a,i,b,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(n,u)]}},getShaderSource:p}},kp=(e,t)=>{Do(e.inputs,t.perm),e.compute(Ve(e.inputs[0],t.perm))},Tp=e=>fe({perm:e.perm})}),Wo,Vo,Go,Ho,Fo,jo,Ko,Zo,Xo,Qo,Ke,Ip,Ep,zp,Cp,Ap,Op,Rp,Bp,Np,Mp,p0=P(()=>{te(),ie(),ae(),Qa(),vt(),Wo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Go={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ho={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},jo=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},Ko=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},Zo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Xo=(e,t)=>{let r=[];if(!Zo(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Qo=(e,t,r,i,a,s,n)=>{let u=r[0].dims,l=R.size(s),p=R.size(n),h=M("_A",r[0].dataType,u),f=Q("output",a,s),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Go[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${Wo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vo[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Ho[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Ke=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ta(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let n=R.normalizeAxes(s,e.inputs[0].dims.length),u=n,l=e.inputs[0],p=Xo(u,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Ve(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=Fo(u.length,l.dims.length));let[h,f]=jo(l.dims,u),g=h;a.keepDims&&(g=Ko(h,n)),e.compute(Qo(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,f),{inputs:[l]})},Ip=(e,t)=>{Ke(e,"ReduceMeanShared",t,"mean")},Ep=(e,t)=>{Ke(e,"ReduceL1Shared",t,"l1")},zp=(e,t)=>{Ke(e,"ReduceL2Shared",t,"l2")},Cp=(e,t)=>{Ke(e,"ReduceLogSumExpShared",t,"logSumExp")},Ap=(e,t)=>{Ke(e,"ReduceMaxShared",t,"max")},Op=(e,t)=>{Ke(e,"ReduceMinShared",t,"min")},Rp=(e,t)=>{Ke(e,"ReduceProdShared",t,"prod")},Bp=(e,t)=>{Ke(e,"ReduceSumShared",t,"sum")},Np=(e,t)=>{Ke(e,"ReduceSumSquareShared",t,"sumSquare")},Mp=(e,t)=>{Ke(e,"ReduceLogSumShared",t,"logSum")}}),Ze,Yo,Yr,Ta,Xe,Jo,eu,tu,ru,iu,au,nu,su,ou,uu,Qe,Dp,Pp,Up,qp,Lp,Wp,Vp,Gp,Hp,Fp,Qa=P(()=>{te(),ie(),Se(),ae(),p0(),Ze=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Yo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Yr=(e,t,r,i,a,s,n=!1,u=!1)=>{let l=[],p=r[0].dims,h=p.length,f=R.normalizeAxes(a,h),g=!u&&f.length===0;p.forEach((b,k)=>{g||f.indexOf(k)>=0?n&&l.push(1):l.push(b)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let k=[],v=M("_A",r[0].dataType,h),$=Q("output",s,y),I=i(v,$,f),S=I[2];for(let E=0,C=0;E<h;E++)g||f.indexOf(E)>=0?(n&&C++,S=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${I[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(k.push(`${v.indicesSet("input_indices",E,$.indicesGet("output_indices",C))};`),C++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,$)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${S}
          ${I[3]}
          ${I.length===4?$.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ee(p,l)]})}},Ta=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),fe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Xe=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:Ta(a,r);e.compute(Yr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Yo:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Jo=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},eu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},tu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ru=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},iu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},au=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},nu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},su=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ou=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},uu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Qe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},Dp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Ip(e,t)},Pp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):Ep(e,t)},Up=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):zp(e,t)},qp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Cp(e,t)},Lp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Ap(e,t)},Wp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Op(e,t)},Vp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Rp(e,t)},Gp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Bp(e,t)},Hp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Np(e,t)},Fp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):Mp(e,t)}}),Hi,jp,Kp,Ia,c0=P(()=>{te(),Se(),Qa(),Hi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},jp=(e,t)=>{Hi(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Yr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Kp=(e,t)=>{Hi(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Yr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ia=e=>fe(e)}),lu,Dr,du,pu,cu,yr,hu,Zp,Ya=P(()=>{te(),ie(),Za(),ae(),lu=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],u=e[5];if(n&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],h=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,g=f,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=p;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(n){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=n.dims[3])}let k=_+b,v=-1,$=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:v,inputHiddenSize:h,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Dr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,du=(e,t,r,i,a,s,n,u)=>{let l=xe(n?1:s),p=64,h=s/l;h<p&&(p=32);let f=Math.ceil(s/l/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:h},{type:12,data:f}],y=Ee(e.dataType,l),_=Oe(1,l),b=["type"];n&&b.push("type"),u&&b.push("type");let k=v=>{let $=Q("x",e.dataType,e.dims,l),I=[$],S=n?M("seq_lens",n.dataType,n.dims):void 0;S&&I.push(S);let E=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;E&&I.push(E);let C=Oe(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(A).declareVariables(...I)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Dr(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${y};${l}`,inputDependencies:b},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},pu=(e,t,r,i,a,s,n,u,l)=>{let p=n+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,p],f=e>1&&i,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=f?[s.batchSize,g,p,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,k=xe(s.headSize),v=s.headSize/k,$=12,I={x:Math.ceil(p/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=f&&i&&R.size(i.dims)>0,C=["type","type"];E&&C.push("type"),a&&C.push("type"),u&&C.push("type"),l&&C.push("type");let A=[{dims:h,dataType:t.dataType,gpuDataType:0}];f&&A.push({dims:y,dataType:t.dataType,gpuDataType:0});let w=O=>{let D=M("q",t.dataType,t.dims,k),L=M("key",r.dataType,r.dims,k),G=[D,L];if(E){let V=M("past_key",i.dataType,i.dims,k);G.push(V)}a&&G.push(M("attention_bias",a.dataType,a.dims));let j=u?M("seq_lens",u.dataType,u.dims):void 0;j&&G.push(j);let B=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;B&&G.push(B);let H=Q("output",t.dataType,h),Z=[H];f&&Z.push(Q("present_key",t.dataType,y,k));let J=Oe(1,k),he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${D.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${D.type.storage}, ${$*$}>;
  ${O.registerUniforms(he).declareVariables(...G,...Z)}
  ${O.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Dr(j,B,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${H.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${a!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:A,dispatchGroup:I,programUniforms:S}),getShaderSource:w}},cu=(e,t,r,i,a,s,n=void 0,u=void 0)=>{let l=s+a.kvSequenceLength,p=a.nReps?a.nReps:1,h=a.vHiddenSize*p,f=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,g,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,h],b=12,k={x:Math.ceil(a.vHeadSize/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:p}],$=f&&i&&R.size(i.dims)>0,I=["type","type"];$&&I.push("type"),n&&I.push("type"),u&&I.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=C=>{let A=M("probs",t.dataType,t.dims),w=M("v",r.dataType,r.dims),O=[A,w];$&&O.push(M("past_value",i.dataType,i.dims));let D=n?M("seq_lens",n.dataType,n.dims):void 0;n&&O.push(D);let L=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&O.push(L);let G=[Q("output",t.dataType,_)];f&&G.push(Q("present_value",t.dataType,y));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${A.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${A.type.value}, ${b*b}>;
  ${C.registerUniforms(j).declareVariables(...O,...G)}
  ${C.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Dr(D,L,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:v}),getShaderSource:E}},yr=(e,t,r,i,a,s,n,u,l,p,h=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(n?1:0)+(u?1:0)),y=g>1?n:void 0,_=g>1?u:void 0,b=g>1?p.pastSequenceLength:0,k=b+p.kvSequenceLength,v=l&&R.size(l.dims)>0?l:void 0,$=[t,r];y&&R.size(y.dims)>0&&$.push(y),v&&$.push(v),h&&$.push(h),f&&$.push(f);let I=e.compute(pu(g,t,r,y,v,p,b,h,f),{inputs:$,outputs:g>1?[-1,1]:[-1]})[0];e.compute(du(I,p.batchSize,p.numHeads,b,p.sequenceLength,k,h,f),{inputs:h&&f?[I,h,f]:[I],outputs:[]});let S=[I,i];_&&R.size(_.dims)>0&&S.push(_),h&&S.push(h),f&&S.push(f),e.compute(cu(g,I,i,_,p,b,h,f),{inputs:S,outputs:g>1?[0,2]:[0]})},hu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,u={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=f=>{let g=Q("output_q",l[0].dataType,r),y=Q("output_k",l[0].dataType,r),_=Q("output_v",l[0].dataType,r),b=M("input",l[0].dataType,l[0].dims),k=M("weight",l[1].dataType,l[1].dims),v=M("bias",l[2].dataType,l[2].dims),$=b.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${$}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${$}, ${n*n}>;
  var<workgroup> tileWeightK: array<${$}, ${n*n}>;
  var<workgroup> tileWeightV: array<${$}, ${n*n}>;
  ${f.registerUniforms(I).declareVariables(b,k,v,g,y,_)}
  ${f.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Zp=(e,t)=>{let r=lu(e.inputs,t),[i,a,s]=hu(e,r);return yr(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),fu,mu,gu,Xp,h0=P(()=>{Fe(),te(),ie(),Se(),ae(),fu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},mu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?xe(s[s.length-1]):1,u=a==="NHWC"&&s.length>1?n:1,l=R.size(s)/n,p=i,h=p?s.length:s,f=M("x",e[0].dataType,e[0].dims,n),g=M("scale",e[1].dataType,e[1].dims,u),y=M("bias",e[2].dataType,e[2].dims,u),_=M("inputMean",e[3].dataType,e[3].dims,u),b=M("inputVar",e[4].dataType,e[4].dims,u),k=Q("y",e[0].dataType,h,n),v=()=>{let I="";if(i)I=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")I=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<g.rank;S++)I+=`cIndices[${S}] = outputIndices[${S}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(f,g,y,_,b,k)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${n}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...ee(s)]:[{type:12,data:l}]})}},gu=e=>fe(e),Xp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=gu({...t,outputCount:i});if(be.webgpu.validateInputContent&&fu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(mu(r,a))}}),yu,_u,Qp,f0=P(()=>{ie(),ae(),yu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_u=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,a=e[0].dataType,s=M("input",a,t,4),n=M("bias",a,[r],4),u=M("residual",a,t,4),l=Q("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(s,n,u,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Qp=e=>{yu(e.inputs),e.compute(_u(e.inputs))}}),bu,ce,Yp,Jp,ec,tc,rc,ic,ac,nc,sc,wu,oc,uc,lc,dc,cr,pc,Fr,cc,hc,fc,mc,gc,yc,_c,bc,wc,$c,vc,xc,Sc,kc,Tc,Ic,Fi,Ec,Ea,za,zc,Cc,Ac,$u,vu,Oc,Ja=P(()=>{te(),ie(),Se(),ae(),bu=(e,t,r,i,a,s,n)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let p=M("inputData",r,[u],4),h=Q("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return n&&f.push(...n),`
      ${e.registerUniforms(f).declareVariables(p,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,a,s=e.dataType,n,u)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>bu(p,R.size(e.dims),e.dataType,s,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(R.size(p[0].dims)/64/4)},programUniforms:l})}},Yp=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},Jp=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},ec=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},tc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},rc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},ic=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},ac=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},nc=e=>fe(e),sc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},wu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return fe({min:t,max:r})},oc=(e,t)=>{let r=t||wu(e.inputs),i=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},uc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},lc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},dc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},cr=e=>fe(e),pc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Fr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,cc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Fr(t)))},hc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},fc=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},mc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Fr(t)))},gc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},yc=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},_c=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},bc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},wc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},$c=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},vc=e=>fe(e),xc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Sc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},kc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Tc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},Ic=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Fi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ec=e=>{e.compute(ce(e.inputs[0],"Tanh",Fi))},Ea=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Fi("v")};
}
`,za=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,zc=e=>{let t=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",za,Ea(t),void 0,e.inputs[0].dataType))},Cc=(e,t)=>{let r=Oe(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Ac=e=>{e.compute(ce(e.inputs[0],"Log","log"))},$u=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,vu=e=>`quick_gelu_impl(${e})`,Oc=(e,t)=>{let r=Oe(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",vu,$u(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),xu,Su,Rc,m0=P(()=>{ie(),ae(),Ja(),xu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Su=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=Q("output",e[0].dataType,t,4),s=R.size(t)/4,n=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Fr(n)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Rc=e=>{xu(e.inputs),e.compute(Su(e.inputs))}}),ku,Tu,Ye,Bc,Nc,Mc,Dc,Pc,Uc,qc,Lc,Wc,Vc,g0=P(()=>{te(),ie(),ae(),ku=(e,t,r,i,a,s,n,u,l,p,h,f)=>{let g,y;typeof u=="string"?g=y=($,I)=>`${u}((${$}),(${I}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=Q("outputData",h,i.length,4),b=M("aData",l,t.length,4),k=M("bData",p,r.length,4),v;if(a)if(s){let $=R.size(t)===1,I=R.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;$||I?v=_.setByOffset("global_idx",y($?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),I?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(n||S?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,S,E="")=>{let C=`aData[indexA${S}][componentA${S}]`,A=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${I}[${S}] = ${E}(${g(C,A)});
          `};h===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,k,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Tu=(e,t,r,i,a,s,n=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),p=!R.areEqual(u,l),h=u,f=R.size(u),g=!1,y=!1,_=[p];if(p){let b=Ft.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),f=R.size(h);let k=R.size(u)===1,v=R.size(l)===1,$=u.length>0&&u[u.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push(v),_.push($),_.push(I);let S=1;for(let E=1;E<h.length;E++){let C=u[u.length-E],A=l[l.length-E];if(C===A)S*=C;else break}S%4===0?(y=!0,g=!0):(k||v||$||I)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>ku(b,u,l,h,g,p,y,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:h,dataType:n}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(h)/4)},...ee(u,l,h)]})}},Ye=(e,t,r,i,a,s)=>{e.compute(Tu(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},Bc=e=>{Ye(e,"Add",(t,r)=>`${t}+${r}`)},Nc=e=>{Ye(e,"Div",(t,r)=>`${t}/${r}`)},Mc=e=>{Ye(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Dc=e=>{Ye(e,"Mul",(t,r)=>`${t}*${r}`)},Pc=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ye(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Uc=e=>{Ye(e,"Sub",(t,r)=>`${t}-${r}`)},qc=e=>{Ye(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Lc=e=>{Ye(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Wc=e=>{Ye(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Vc=e=>{Ye(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Iu,Eu,zu,Cu,Gc,Hc,y0=P(()=>{te(),ie(),Se(),ae(),Iu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,u)=>{if(u!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Eu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,zu=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},Cu=(e,t,r,i)=>{let a=R.size(r),s=new Array(e.length),n=new Array(e.length),u=0,l=[],p=[],h=[{type:12,data:a}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],s[b]=u,p.push(e[b].dims.length),n[b]=M(`input${b}`,i,p[b]),l.push("rank"),h.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)h.push(...ee(e[b].dims));h.push(...ee(r));let f=Q("output",i,r.length),g=f.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)b.registerUniform(`sizeInConcatAxis${k}`,"u32");return b.declareVariables(...n,f)})()}

  ${Eu(s.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${zu(n,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}),getShaderSource:_}},Gc=(e,t)=>{let r=e.inputs,i=r[0].dims,a=R.normalizeAxis(t.axis,i.length);Iu(r,a);let s=i.slice();s[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let n=r.filter(u=>R.size(u.dims)>0);e.compute(Cu(n,a,s,r[0].dataType),{inputs:n})},Hc=e=>fe({axis:e.axis})}),Mt,Dt,Pt,en,qt=P(()=>{te(),ie(),Mt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Dt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Pt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},en=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[yp,_p];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Fc,tn=P(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Fc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),jc,_0=P(()=>{jc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),fr,rn,an=P(()=>{te(),ie(),ae(),qt(),fr=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,u)=>`
      if (${Y(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Y(a,u+s,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},rn=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n[n.length-2],p=u[u.length-1],h=n[n.length-1],f=xe(p),g=xe(h),y=xe(l),_=R.size(r)/f/y,b=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),v=[R.size(k),l,p],$=[{type:12,data:_},{type:12,data:l},{type:12,data:p},{type:12,data:h}];Dt(t,$),$.push(...ee(k,n,u)),b&&$.push(...ee(e[2].dims)),$.push(...ee(v));let I=S=>{let E=Xa("batch_dims",e[0].dataType,k.length),C=M("a",e[0].dataType,n.length,g),A=M("b",e[1].dataType,u.length,f),w=Q("output",e[0].dataType,v.length,f),O=Ee(w.type.tensor),D=Mt(t,w.type.value,O),L=[C,A],G="";if(b){let H=a?f:1;L.push(M("bias",e[2].dataType,e[2].dims.length,H)),G=`${a?`value += bias[col / ${H}];`:`value += ${w.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Pt(t,j);let B=()=>{let H=`var a_data: ${C.type.value};`;for(let Z=0;Z<g;Z++)H+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${f}];`;for(let Z=0;Z<y;Z++){H+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)H+=`
            values[${Z}] = fma(${A.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${Z}]);
`}return H};return`
  ${S.registerUniforms(j).registerInternalVariables(E).declareVariables(...L,w)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${fr("a_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${fr("b_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${w.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${B()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${G}
      ${D}
      let cur_indices = ${w.type.indices}(batch, row + i, col);
      let offset = ${w.indicesToOffset("cur_indices")};
      ${w.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${y};${a}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:$}),getShaderSource:I}}}),Au,Ou,Ca,ji,Ru,Aa,Bu,Jr,nn=P(()=>{te(),ie(),ae(),qt(),an(),tn(),Au=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ou=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ca=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32)=>{let l=t[1]*e[1],p=t[0]*e[0],h=a?l:s,f=a?s:l,g=h/t[0],y=s/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${h/g}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Au(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ou(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ji=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ru=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Aa=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32,l=!1)=>{let p=e[1]*t[1],h=e[0]*t[0],f=a?p:s,g=a?s:p;if(!(g%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=f/t[0],b=s/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${ji(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ji(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ru(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Bu=(e,t,r,i,a=!1)=>{let[s,n,u,l]=i,p=Ee(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${fr("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${fr("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Jr=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n.slice(0,-2),p=u.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),f=R.size(h),g=n[n.length-2],y=n[n.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,k=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(_/v[0]/k[0]),Math.ceil(g/v[1]/k[1]),Math.ceil(f/v[2]/k[2])],I=b?4:1,S=[...l,g,y/I],E=S.length,C=[...p,y,_/I],A=C.length,w=[f,g,_/I],O=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Dt(t,O),O.push(...ee(h,S,C));let D=["rank","rank"],L=e.length>2;L&&(O.push(...ee(e[2].dims)),D.push("rank")),O.push(...ee(w));let G=j=>{let B=h.length,H=Xa("batchDims",e[0].dataType,B,1),Z=Ee(e[0].dataType),J=M("a",e[0].dataType,E,I),he=M("b",e[1].dataType,A,I),V=Q("result",e[0].dataType,w.length,I),ue=[J,he];if(L){let me=a?I:1;ue.push(M("bias",e[2].dataType,e[2].dims.length,me))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Pt(t,U);let F=Ee(V.type.tensor),X=Mt(t,V.type.value,F),q=Bu(I,L,X,[H,J,he,V],a);return`
  ${j.registerUniforms(U).registerInternalVariables(H).declareVariables(...ue,V)}
  ${q}
  ${b?Ca(k,v,Z,H):Aa(k,v,Z,H)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${b};${a}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:O}),getShaderSource:G}}}),Nu,Kc,b0=P(()=>{te(),pt(),ae(),qt(),tn(),_0(),nn(),Nu=(e,t,r,i,a=!1,s,n=4,u=4,l=4,p="f32")=>{let h=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(n,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(n)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${n};
    ${$}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ce(n,p)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${$}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ce(n,p)}(0.0);`,S=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Ce(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Ce(u,p)}(0.0);`,E=Ce(l,p),C=Ce(e?n:u,p),A=Ce(e?u:n,p),w=Mt(s,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?I:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?S:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Fc(a)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Kc=(e,t,r,i,a,s,n,u,l)=>{let p=t.format==="NHWC",h=p?e[0].dims[3]:e[0].dims[1],f=r[0],g=p?r[2]:r[3],y=p?r[1]:r[2],_=p?r[3]:r[1],b=p&&(h%4===0||h%3===0)&&_%4===0,k=p?_:g*y,v=p?g*y:_,$=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/$[0]/I[0]),Math.ceil(v/$[1]/I[1]),Math.ceil(f/$[2]/I[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=b?p&&h%4!==0?3:4:1,C=$[1]*I[1],A=$[0]*I[0],w=Math.max($[0]*E,$[1]),O=i%C===0,D=a%A===0,L=s%w===0,G=b?[E,4,4]:[1,1,1],j=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Dt(t,j),j.push(...ee(e[0].dims,e[1].dims));let B=["rank","rank"];n&&(j.push(...ee(e[2].dims)),B.push("rank")),j.push(...ee(r));let H=Z=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Pt(t,J);let he=b?4:1,V=Ee(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${V}>`:V}) {
        result[flatIndex] = ${b?`vec4<${V}>`:V}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${V}>`:V}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,E===3?1:E),F=M("w",e[1].dataType,e[1].dims.length,he),X=[U,F],q=Q("result",e[0].dataType,r.length,he);if(n){let me=M("bias",e[2].dataType,e[2].dims.length,he);X.push(me),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${V}>`:V} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${jc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(J).declareVariables(...X,q)}
        ${ue}
        ${Nu(p,O,D,L,n,t,G[0],G[1],G[2],V)}
        ${b?Ca(I,$,V,void 0,!p,w):Aa(I,$,V,void 0,!p,w,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${O};${D};${L};${C};${A};${w}`,inputDependencies:B},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:j}),getShaderSource:H}}}),Mu,Ki,ar,Du,Zi,Pu,Zc,Xc,w0=P(()=>{te(),pt(),ie(),ae(),qt(),tn(),Mu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ki=e=>typeof e=="number"?[e,e,e]:e,ar=(e,t)=>t<=1?e:e+(e-1)*(t-1),Du=(e,t,r,i=1)=>{let a=ar(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Zi=(e,t,r,i,a)=>{a==null&&(a=Du(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},Pu=(e,t,r,i,a,s,n,u,l,p)=>{let h,f,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Zi([t,r,i,1],[u,l,p],1,[a,s,n],e);f=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,k,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Zi([t,r,i,1],[u,l,p],1,[a,s,n],e[0]);f=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),g=Math.ceil(r/s),y=Math.ceil(i/n);let _=(f-1)*a+u-t,b=(g-1)*s+l-r,k=(y-1)*n+p-i,v=Math.floor(_/2),$=_-v,I=Math.floor(b/2),S=b-I,E=Math.floor(k/2),C=k-E;h={top:I,bottom:S,left:E,right:C,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:f,outHeight:g,outWidth:y}},Zc=(e,t,r,i,a,s=!1,n="channelsLast")=>{let u,l,p,h,f;if(n==="channelsLast")[u,l,p,h,f]=e;else if(n==="channelsFirst")[u,f,l,p,h]=e;else throw new Error(`Unknown dataFormat ${n}`);let[g,,y,_,b]=t,[k,v,$]=Ki(r),[I,S,E]=Ki(i),C=ar(y,I),A=ar(_,S),w=ar(b,E),{padInfo:O,outDepth:D,outHeight:L,outWidth:G}=Pu(a,l,p,h,k,v,$,C,A,w),j=s?g*f:g,B=[0,0,0,0,0];return n==="channelsFirst"?B=[u,j,D,L,G]:n==="channelsLast"&&(B=[u,D,L,G,j]),{batchSize:u,dataFormat:n,inDepth:l,inHeight:p,inWidth:h,inChannels:f,outDepth:D,outHeight:L,outWidth:G,outChannels:j,padInfo:O,strideDepth:k,strideHeight:v,strideWidth:$,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:C,effectiveFilterHeight:A,effectiveFilterWidth:w,dilationDepth:I,dilationHeight:S,dilationWidth:E,inShape:e,outShape:B,filterShape:t}},Xc=(e,t,r,i,a,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((k,v)=>v)},p=[Math.ceil(Mu(l.x.map(k=>r[k]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let h=1,f=R.size(r),g=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Dt(t,g),g.push(...ee(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...ee(e[2].dims)),y.push("rank")),g.push(...ee(r));let b=k=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Pt(t,v);let $=1,I=Ee(e[0].dataType),S=M("x",e[0].dataType,e[0].dims.length,h),E=M("W",e[1].dataType,e[1].dims.length,$),C=[S,E],A=Q("result",e[0].dataType,r.length,$),w="";if(_){let L=M("bias",e[2].dataType,e[2].dims.length,$);C.push(L),w+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${n?Y("coords",4,5):Y("coords",1,5)}];
        }`}let O=Ce(h,I),D=Mt(t,O,I);return`
            ${w}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${k.registerUniforms(v).declareVariables(...C,A)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${A.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,S.rank)};
              let d2 = ${n?Y("coords",S.rank-1,S.rank):Y("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${n?Y("coords",1,S.rank):Y("coords",2,S.rank)},
              ${n?Y("coords",2,S.rank):Y("coords",3,S.rank)},
              ${n?Y("coords",3,S.rank):Y("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?Y("uniforms.x_shape",1,S.rank):Y("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${n?Y("uniforms.x_shape",2,S.rank):Y("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${n?Y("uniforms.x_shape",3,S.rank):Y("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${n?Y("uniforms.x_shape",4,S.rank):Y("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${D}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${h};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:g}),getShaderSource:b}}}),Qc,Yc,$0=P(()=>{te(),ie(),ae(),qt(),Qc=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,u=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],h=p/t.group,f=l&&h>=4?xe(p):1,g=R.size(r)/f,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Dt(t,y),y.push(...ee(n,[u[0],u[1],u[2],u[3]/f]));let _=a?["rank","rank","rank"]:["rank","rank"];y.push(...ee([r[0],r[1],r[2],r[3]/f]));let b=k=>{let v=Q("output",e[0].dataType,r.length,f),$=Ee(v.type.tensor),I=Mt(t,v.type.value,$),S=M("x",e[0].dataType,n.length),E=M("w",e[1].dataType,u.length,f),C=[S,E];a&&C.push(M("b",e[2].dataType,e[2].dims,f));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Pt(t,A);let w=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(A).declareVariables(...C,v)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${w}
    ${s}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},Yc=(e,t,r,i)=>{let a=e.length>2,s=xe(r[3]),n=xe(r[2]),u=R.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Dt(t,f),f.push(...ee(l,p,h));let g=(n-1)*t.strides[1]+p[1],y=_=>{let b=Q("output",e[0].dataType,h.length,s),k=Ee(b.type.tensor),v=Mt(t,b.type.value,k),$=M("x",e[0].dataType,l.length,s),I=M("w",e[1].dataType,p.length,s),S=[$,I];a&&S.push(M("b",e[2].dataType,e[2].dims,s));let E=a?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Pt(t,C),`
  ${_.registerUniforms(C).declareVariables(...S,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${g}>;
    var values: array<${b.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${g};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:y}}}),Uu,Pr,qu,Ur,Oa,Xi,Lu,Wu,Ra,v0=P(()=>{ie(),b0(),w0(),nn(),$0(),qt(),an(),vt(),Uu=(e,t,r,i,a,s)=>{let n=e[0],u=e.slice(s?1:2,s?3:4),l=u.length,p=t[0],h=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),f=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-h[y]+a[y])/a[y]));return f.splice(0,0,n),f.splice(s?3:1,0,p),f},Pr=[2,3,1,0],qu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ur=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Qr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Oa=e=>{let t=en(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,u=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Xi=(e,t,r,i)=>{let a=r.format==="NHWC",s=Uu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let C=[t[0]];if(a){let A=e.kernelCustomData.wT??e.compute(Ve(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),C.push(A)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Yc(C,r,s,i),{inputs:C}):e.compute(Qc(C,r,s,i),{inputs:C});return}let n=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],p=t[0].dims[a?3:1],h=t[1].dims[2],f=t[1].dims[3],g=s[a?1:2],y=s[a?2:3],_=s[a?3:1],b=a&&h===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=s[0],A,w,O,D=[];if(a){let j=e.kernelCustomData.wT??e.compute(Ve(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),b){let B=u*l*p;A=t[0].reshape([1,C,B]),w=j.reshape([1,B,_]),O=[1,C,_]}else A=t[0].reshape([C,u*l,p]),w=j.reshape([1,p,_]),O=[C,g*y,_];D.push(A),D.push(w)}else A=t[0].reshape([C,p,u*l]),w=t[1].reshape([1,_,p]),O=[C,_,g*y],D.push(w),D.push(A);n&&D.push(t[2]);let L=O[2],G=D[0].dims[D[0].dims.length-1];L<8&&G<8?e.compute(rn(D,r,s,O,a,i),{inputs:D}):e.compute(Jr(D,r,s,O,a,i),{inputs:D});return}let k=!0,v=e.kernelCustomData.wT??e.compute(Ve(t[1],Pr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];n&&$.push(t[2]);let I=a?g*y:_,S=a?_:g*y,E=h*f*p;e.compute(Kc($,r,s,I,S,E,n,k,i),{inputs:$})},Lu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Ur({...t,pads:a,strides:s,dilations:n,kernelShape:u},i);Xi(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Wu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Ur(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=Zc(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Xc(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},Ra=(e,t)=>{if(qu(e.inputs,t),e.inputs[0].dims.length===3)Lu(e,t);else if(e.inputs[0].dims.length===5)Wu(e,e.inputs,t);else{let r=Ur(t,e.inputs);Xi(e,e.inputs,r)}}}),Jc,x0=P(()=>{te(),pt(),ie(),ae(),Jc=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,u=e[1].dims,l=u[2]/n,p=u[3],h=s?xe(l):1,f=s&&p===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/h)*h,y=l-g,_=s?xe(p):1,b=s?p===1?h:_:1,k=R.size(a)/_,v=[Math.ceil(k/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],S=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],C=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],A=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:k},{type:12,data:I},{type:12,data:S},{type:12,data:E},{type:12,data:C},{type:6,data:A},{type:12,data:g},{type:12,data:l},{type:12,data:p},...ee(e[0].dims,e[1].dims)];i&&(w.push(...ee(e[2].dims)),$.push("rank")),w.push(...ee(a));let O=D=>{let L=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:A.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=Ee(e[0].dataType),j=s?1:2,B=s?2:3,H=s?3:1,Z=M("W",e[1].dataType,e[1].dims.length,b),J=M("Dy",e[0].dataType,e[0].dims.length,h),he=[J,Z];i&&he.push(M("bias",e[2].dataType,[a[H]].length,_));let V=Q("result",e[0].dataType,a.length,_),ue=()=>{let X="";if(f)h===4?X+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?X+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${G}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(X+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${G}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(X+=`
                  let xValue = ${s?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):J.get("batch","inputChannel","idyR","idyC")};
        `,h===1)X+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<h;q++)X+=`
            let wValue${q} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return X},U=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let X="";if(h===1){X+="dotProd = dotProd";for(let q=0;q<y;q++)X+=`
            + ${J.getByOffset(`x_offset + ${q}`)} * ${Z.getByOffset(`w_offset + ${q}`)}`;X+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);X+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return X},F=`
            let outputIndices = ${V.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${V.indicesGet("outputIndices",0)};
            let d1 = ${V.indicesGet("outputIndices",H)};
            let r = ${V.indicesGet("outputIndices",j)};
            let c = ${V.indicesGet("outputIndices",B)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${V.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${j}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${B}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:h}) {
                  ${ue()}
                  inputChannel = inputChannel + ${f?4:h};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${V.setByOffset("global_idx","value")};
          `;return`
    ${D.registerUniforms(L).declareVariables(...he,V)}
      ${D.mainStart()}
      ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${F}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${_}${f}${y}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:O}}}),Vu,Gu,Hu,Qi,eh,Fu,Yi,ju,th,S0=P(()=>{x0(),qt(),vt(),Vu=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,Gu=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},Hu=(e,t,r,i,a,s,n,u,l,p)=>{let h=e.length-2,f=p.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let g=e[0],y=t[u?3:1]*a;for(let _=0,b=e.length-h-(u?1:0);_<h;++_,++b){let k=e[b],v=f?k*n[_]:p[_],$=Vu(k,n[_],s[_],t[b],r[_],v);Gu($,i,s,_,_+h),f&&p.push(n[_]*(k-1)+l[_]+(t[b]-1)*r[_]+1-s[_]-s[_+h])}p.splice(0,0,g),p.splice(u?3:1,0,y)},Qi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let p=e.strides.slice();if(p.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;p=new Array(f).fill(1)}Hu(u,r,l,e.autoPad,e.group,a,p,i,n,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:l,strides:p}),h},eh=e=>{let t=en(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,u=e.pads,l=e.strides,p=e.wIsConst(),h=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:h,outputShape:f,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Fu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,u)=>n+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,u)=>n+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,u)=>n+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,u)=>n+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Yi=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ve(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(Jc(s,r,i),{inputs:s})},ju=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let p=Qi({...t,pads:u,strides:n,dilations:s,kernelShape:a,outputPadding:l},i);Yi(e,i,p,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},th=(e,t)=>{if(Fu(e.inputs,t),e.inputs[0].dims.length===3)ju(e,t);else{let r=Qi(t,e.inputs);Yi(e,e.inputs,r)}}}),Ku,rh,ih,k0=P(()=>{te(),ie(),Se(),ae(),Ku=(e,t,r,i)=>{let a=R.size(t),s=t.length,n=M("input",e,s),u=Q("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=R.normalizeAxis(l,s),h=f=>{let g=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,y=Y("uniforms.input_shape","uniforms.axis",s),_=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...ee(t,t)]}),getShaderSource:h}},rh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Ku(i,r,a,t),{inputs:[0]})},ih=e=>{let t=e.exclusive===1,r=e.reverse===1;return fe({exclusive:t,reverse:r})}}),Zu,Xu,Qu,ah,nh,T0=P(()=>{te(),ie(),Se(),ae(),Zu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xu=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},Qu=(e,t)=>{let r,i,a,s,n,u,l=t.format==="NHWC",p=t.blocksize,h=t.mode==="DCR";l?([r,i,a,s]=e.dims,n=h?[r,i,a,p,p,s/p**2]:[r,i,a,s/p**2,p,p],u=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=h?[r,p,p,s/p**2,i,a]:[r,s/p**2,p,p,i,a],u=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(n),g=f.dims.length,y=e.dataType,_=M("a",y,g),b=Q("output",y,g),k=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Xu(u,g,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=l?[r,i*p,a*p,s/p**2]:[r,s/p**2,i*p,a*p],I=R.size($),S=f.dims,E=R.sortBasedOnPerm(S,u);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ee(S,E)]}},getShaderSource:k}},ah=(e,t)=>{Zu(e.inputs),e.compute(Qu(e.inputs[0],t))},nh=e=>fe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),qr,nr,Ji,Yu,Ju,el,tl,ea,rl,sh,oh,I0=P(()=>{te(),ie(),Se(),ae(),qr="[a-zA-Z]|\\.\\.\\.",nr="("+qr+")+",Ji="^"+nr+"$",Yu="("+nr+",)*"+nr,Ju="^"+Yu+"$",el=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},tl=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Ju)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let u=e[n].dims.slice();if(!s.match(RegExp(Ji)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,u,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(nr)))throw new Error("Invalid RHS");(a=i.match(RegExp(qr,"g")))==null||a.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],u=0;if(!e.match(RegExp(Ji))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(qr,"g")),p=new el(i);return l==null||l.forEach((h,f)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<n.length;y++){let _=String.fromCharCode(48+y);p.addSymbol(_,f+y),this.addSymbol(_,r[u++],i)}}else p.addSymbol(h,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[u++],i)}),p}},ea=e=>e+"_max",rl=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,h)=>M(`input${h}`,t,p)),s=R.size(i),n=Q("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let h=[],f="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],b=[],k=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{var C;if(r.rhs.symbolToIndices.has(E)){let A=(C=r.rhs.symbolToIndices.get(E))==null?void 0:C[0];A!==void 0&&r.lhs.forEach((w,O)=>{if(S.inputIndices.includes(O)){let D=w.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(L=>{h.push(`${a[O].indicesSet(`input${O}Indices`,L,n.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,w)=>{if(S.inputIndices.includes(w)){let O=A.symbolToIndices.get(E);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(D=>{_.push(`${a[w].indicesSet(`input${w}Indices`,D,`${E}`)}`)}),v.push(`prod *= ${a[w].getByIndices(`input${w}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${ea(E)}; ${E}++) {`),k.push("}")});let I=$?[...h,`let sum = ${a.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...h,g,...b,..._,f,...v,y,...k];return`
            ${p.registerUniforms(u.map(S=>({name:`${ea(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((S,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(f=>r.symbolToInfo.has(f)).map(f=>{var g;return{type:12,data:((g=r.symbolToInfo.get(f))==null?void 0:g.dimValue)||0}});p.push({type:12,data:s});let h=e.map((f,g)=>[...ee(f)]).reduce((f,g)=>f.concat(g),p);return h.push(...ee(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:l}},sh=(e,t)=>{let r=new tl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(rl(a,e.inputs[0].dataType,r,i))},oh=e=>{let t=e.equation.replace(/\s+/g,"");return fe({equation:t})}}),il,ta,al,nl,uh,E0=P(()=>{te(),ie(),ae(),il=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ta=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},al=(e,t)=>e.length>t.length?ta(e,t):ta(t,e),nl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=al(t,r),a=e[0].dataType,s=a===9||R.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/u),p=f=>{let g=M("input",a,t.length,n),y=Q("output",a,i.length,u),_;if(a===9){let b=(k,v,$="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${k}[${v}] = ${$}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${n}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},h=[{type:12,data:l},...ee(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},uh=e=>{il(e.inputs),e.compute(nl(e.inputs),{inputs:[0]})}}),sl,lh,z0=P(()=>{te(),ie(),ae(),Ja(),sl=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),a=i%4===0,s=n=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),p=Q("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(h).declareVariables(u,l,p)}

    ${Ea(Oe(t))}

    ${n.mainStart(jt)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",za("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/jt/4)}})}},lh=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?zc(e):e.compute(sl(e.inputs))}}),ol,ul,dh,ph,C0=P(()=>{te(),ie(),Se(),ae(),ol=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ul=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=R.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let u=r[s],l=e[0].dataType===9?4:1,p=Math.ceil(R.size(n)/l),h=[{type:12,data:p},{type:6,data:u},{type:12,data:s},...ee(e[0].dims,e[1].dims,n)],f=g=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),b=Q("output",e[0].dataType,n.length,l),k=$=>{let I=i.length,S=`var indicesIndices${$}  = ${_.type.indices}(0);`;for(let E=0;E<I;E++)S+=`${I>1?`indicesIndices${$}[${E}]`:`indicesIndices${$}`} = ${n.length>1?`outputIndices${$}[uniforms.axis + ${E}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${_.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${y.type.indices};
        `;for(let E=0,C=0;E<a;E++)E===s?(S+=`${a>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = u32(idx${$});`,C+=I):(S+=`${a>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = ${n.length>1?`outputIndices${$}[${C}]`:`outputIndices${$}`};`,C++);return S},v;if(e[0].dataType===9){let $=(I,S,E="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${I}[${S}] = ${E}(${y.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:f}},dh=e=>fe({axis:e.axis}),ph=(e,t)=>{let r=e.inputs;ol(r),e.compute(ul(e.inputs,t))}}),ll,ch,hh,A0=P(()=>{te(),ie(),ae(),ll=(e,t,r,i,a,s,n,u,l)=>{let p=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:u},{type:12,data:l}],h=[s];p.push(...ee(t.dims,h));let f=g=>{let y=M("indices_data",t.dataType,t.dims.length),_=Q("input_slice_offsets_data",12,1,1),b=[y,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(k).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},ch=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],u=R.sizeToDimension(s,s.length-1),l=R.sizeFromDimension(i,t.batchDims+n),p=R.sizeToDimension(i,t.batchDims),h=R.sizeFromDimension(i,t.batchDims),f=u/p,g=new Array(n),y=l;for(let S=0;S<n;++S)g[n-1-S]=y,y*=i[t.batchDims+n-1-S];let _=ll(e,r[1],g,t.batchDims,i,u,f,h,n),b=t.batchDims+n;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=s.slice(0,-1).concat(i.slice(b)),v=R.size(k),$=[{type:12,data:v},{type:12,data:l},...ee(r[0].dims,_.dims,k)],I=S=>{let E=M("data",r[0].dataType,r[0].dims.length),C=M("slice_offsets",12,_.dims.length),A=Q("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,C,A)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:I},{inputs:[r[0],_]})},hh=e=>({batchDims:e.batch_dims,cacheKey:""})}),dl,pl,fh,mh,O0=P(()=>{te(),ie(),Se(),ae(),dl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===s.dims[l]:u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((u,l)=>u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=R.normalizeAxis(t.gatherAxis,a),n=R.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(s,1,...i);let l=R.size(u),p=e[2].dataType,h=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...ee(...e.map((y,_)=>y.dims),u)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length),b=M("inputIndices",e[1].dataType,e[1].dims.length),k=M("scales",e[2].dataType,e[2].dims.length),v=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=Q("output",p,u.length),I=[_,b,k];v&&I.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...I,$)}
        ${y.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Oe(p)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},fh=(e,t)=>{let r=e.inputs;dl(r,t),e.compute(pl(e.inputs,t))},mh=e=>fe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),cl,hl,gh,yh,R0=P(()=>{te(),ie(),Se(),ae(),cl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},hl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,u=R.normalizeAxis(t.axis,a),l=r[u],p=s.slice(0),h=R.size(p),f=M("input",i,a),g=M("indicesInput",n,s.length),y=Q("output",i,p.length),_=[{type:12,data:h},{type:6,data:l},{type:12,data:u}];return _.push(...ee(r,s,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},gh=e=>fe({axis:e.axis}),yh=(e,t)=>{let r=e.inputs;cl(r),e.compute(hl(e.inputs,t))}}),fl,ml,_h,bh,B0=P(()=>{te(),ie(),ae(),fl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ml=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=gp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,s];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(s/l),h=Math.ceil(a/l),f=!0,g=R.size(u),y=[{type:12,data:f?p:g},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...ee(e[2].dims)),_.push("rank")),y.push(...ee(u));let b=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",S=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),C=S.type.value,A=null,w=[S,E];e.length===3&&(A=M("c",e[2].dataType,e[2].dims.length),w.push(A));let O=Q("output",e[0].dataType,u.length);w.push(O);let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(D).declareVariables(...w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${C}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=v=>{let $=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),S=null,E=[$,I];e.length===3&&(S=M("c",e[2].dataType,e[2].dims.length),E.push(S));let C=Q("output",e[0].dataType,u.length);E.push(C);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],w="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,w="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,w="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,w="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,w="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let D=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(A).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${w}
      }
      workgroupBarrier();
    }

    ${D}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*h},programUniforms:y}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},_h=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bh=(e,t)=>{fl(e.inputs),e.compute(ml(e.inputs,t))}}),nt,lt,It,Et,gl,yl,_l,bl,wl,$l,vl,xl,wh,$h,N0=P(()=>{te(),ie(),Se(),ae(),[nt,lt,It,Et]=[0,1,2,3],gl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},yl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,_l=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,bl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,wl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,$l=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${nt}] = batch;
     indices[${lt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${It}] = u32(r);
            indices[${Et}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${It}] = u32(clamp(r, 0, H - 1));
          indices[${Et}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${It}] = gs_reflect(r, border[1], border[3]);
          indices[${Et}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,vl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nt}], indices[${lt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nt}], indices[${lt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nt}], indices[${lt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nt}], indices[${lt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nt}], indices[${lt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nt}], indices[${lt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,xl=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[nt,lt,It,Et]=[0,3,1,2]);let n=Q("output",e[0].dataType,s.length),u=r.type.value,l=R.size(s),p=[{type:12,data:l},...ee(e[0].dims,i,s)],h=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${yl}
  ${_l(u)}
  ${bl(t)}
  ${wl(t)}
  ${$l(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${It}]);
      let W_in = i32(uniforms.x_shape[${Et}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${nt}], indices[${It}], indices[${Et}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${vl(n,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=R.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:h}},wh=(e,t)=>{gl(e.inputs),e.compute(xl(e.inputs,t))},$h=e=>fe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Re,Sl,vh,ra,kl,hr,xh,Sh=P(()=>{te(),ie(),Se(),Za(),Ya(),ae(),vt(),Re=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Sl=(e,t)=>{let r=e[0],i=Re(e,1),a=Re(e,2),s=Re(e,3),n=Re(e,4),u=Re(e,5),l=Re(e,6),p=Re(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,_=0,b=0,k=Math.floor(g/t.numHeads);if(l&&p&&R.size(l.dims)&&R.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&R.size(l.dims)||p&&R.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&R.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=_+y,I=0;if(n&&R.size(n.dims)>0){I=8;let A=n.dims;throw A.length===1?A[0]===h?I=1:A[0]===3*h+2&&(I=3):A.length===2&&A[0]===h&&A[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=g;if(a&&R.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],S=!0}}let C=!1;if(n&&R.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(u&&R.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:$,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:k,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:C,passPastInKv:S,qkvFormat:v}},vh=e=>fe({...e}),ra=fe({perm:[0,2,1,3]}),kl=(e,t,r,i,a,s,n)=>{let u=[i,a,s],l=R.size(u),p=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],h=f=>{let g=Q("qkv_with_bias",t.dataType,u),y=M("qkv",t.dataType,u),_=M("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(y,_,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},hr=(e,t,r,i,a,s,n,u)=>{let l=s;if(n&&R.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=kl(e,s,n,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ve(l,ra.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ve(l,ra.perm),{inputs:[l],outputs:[-1]})[0]},xh=(e,t)=>{let r=Sl(e.inputs,t),i=e.inputs[0],a=Re(e.inputs,1),s=Re(e.inputs,2),n=Re(e.inputs,3),u=Re(e.inputs,4),l=Re(e.inputs,5),p=Re(e.inputs,6),h=Re(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let f=a&&s&&a.dims.length===4&&s.dims.length===4,g=hr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(f)return yr(e,g,a,s,u,void 0,p,h,l,r);if(!a||!s)throw new Error("key and value must be provided");let y=hr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),_=hr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);yr(e,g,y,_,u,void 0,p,h,l,r)}}),Tl,Il,El,zl,Ba,kh,Th,Ih=P(()=>{te(),ie(),Se(),ae(),Tl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Il=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),fe({numOutputs:i,axis:t.axis,splitSizes:r})},El=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,zl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ba=(e,t)=>{let r=e[0].dims,i=R.size(r),a=e[0].dataType,s=R.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),p=[],h=[],f=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let b=r.slice();b[s]=t.splitSizes[_],h.push(b),n[_]=Q(`output${_}`,a,b.length),p.push({dims:h[_],dataType:e[0].dataType})}g.push({type:12,data:l},...ee(r,...h));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...n)}
  ${El(l.length)}
  ${zl(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},kh=(e,t)=>{Tl(e.inputs);let r=e.inputs.length===1?t:Il(e.inputs,t);e.compute(Ba(e.inputs,r),{inputs:[0]})},Th=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return fe({axis:t,numOutputs:i,splitSizes:r})}}),Cl,ei,Eh,zh=P(()=>{te(),ie(),Se(),ae(),Cl=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!R.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],h=a.dims[0],f=R.sizeFromDimension(r.dims,1)/p,g=u===0?a.dims[1]*2:f/n;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(p>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ei=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],u=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=u/l,h=e[2].dims[1],f=a===0?h*2:p/i,g=new Array(n,l,p/f,f-h),y=R.computeStrides(g),_=[{type:1,data:s},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,p,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=k=>{let v=M("input",e[0].dataType,e[0].dims.length),$=M("position_ids",e[1].dataType,e[1].dims.length),I=M("cos_cache",e[2].dataType,e[2].dims.length),S=M("sin_cache",e[3].dataType,e[3].dims.length),E=Q("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${k.declareVariables(v,$,I,S,E)}

        ${k.mainStart(jt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",Q("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:fe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(g)/jt)},programUniforms:_})}},Eh=(e,t)=>{Cl(e.inputs,t),e.compute(ei(e.inputs,t))}}),Al,Ol,ia,Rl,Ch,M0=P(()=>{Se(),te(),Ya(),Sh(),Ih(),vt(),zh(),ae(),Al=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],p=r.dims[1],h=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=p,g=0,y=!i||i.dims.length===0,_=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=_*t.numHeads);let b=s&&s.dims.length!==0,k=n&&n.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&k){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if(b||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,I=!1,S=t.kvNumHeads?_*t.kvNumHeads:h;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],I=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=E.dims.reduce((A,w)=>A*w,1);if(C!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${C}.`);for(let A=0;A<E.dims.length;A++)if(E.dims[A]!==1&&E.dims[A]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${A}] = ${E.dims[A]}.`)}return{batchSize:l,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Ol=fe({perm:[0,2,1,3]}),ia=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ve(i,Ol.perm),{inputs:[i],outputs:[-1]})[0]),i},Rl=(e,t,r,i)=>{let a=7,s=["type","type"],n=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],p=h=>{let f=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),y=Q("pos_ids",a,n),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(f,g,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p}},Ch=(e,t)=>{var S;let r=Al(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=fe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[g,y,_]=!a&&!s?e.compute(Ba([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],b,k;if(t.doRotary){let E=e.compute(Rl(r.batchSize,r.sequenceLength,l,p),{inputs:[l,p],outputs:[-1]})[0],C=e.inputs[7],A=e.inputs[8],w=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[g,E,C,A],D=[-1];b=e.compute(ei(O,w),{inputs:O,outputs:D})[0],O.splice(0,1,y);let L=fe({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(ei(O,L),{inputs:O,outputs:D})[0]}let v=hr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),$=ia(e,t.doRotary?k:y,r),I=ia(e,_,r);yr(e,v,$,I,void 0,void 0,n,u,void 0,r,l,p)}}),aa,Bl,Nl,Ah,D0=P(()=>{te(),ie(),vt(),ae(),aa=(e,t,r,i,a,s,n,u)=>{let l=xe(s),p=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,f=a*n,g=64;f===1&&(g=256);let y=[a,n,s/l],_=[a,n,2],b=["rank","type","type"],k=[];k.push(...ee(y,_));let v=$=>{let I=M("x",t.dataType,3,l),S=M("scale",r.dataType,r.dims),E=M("bias",i.dataType,i.dims),C=Q("output",1,3,2),A=[I,S,E,C];return`
  var<workgroup> workgroup_shared : array<${h}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...A)}
  ${$.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${$t("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${$t("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Bl=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],u=i[1],l=R.sizeFromDimension(i,s),p=xe(l),h=R.size(a)/p,f=aa(e,t[0],t[1],t[2],n,l,u,r.epsilon),g=[n,u,l/p],y=[n,u],_=["type","none"],b=k=>{let v=M("x",t[0].dataType,g.length,p),$=M("scale_shift",1,y.length,2),I=Q("output",t[0].dataType,g.length,p),S=[v,$,I];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ee(g,y,g)]}),getShaderSource:b},{inputs:[t[0],f]})},Nl=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],u=R.sizeFromDimension(i,1)/n,l=xe(n),p=R.size(a)/l,h=[{type:12,data:u},{type:12,data:Math.floor(n/l)}],f=["type","type"],g=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,y.push(v+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Ve(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,$)=>i[y[$]])),b=aa(e,_,t[1],t[2],s,u,n,r.epsilon),k=v=>{let $=Ee(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,S=A=>{let w=A===0?"x":"y",O=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${$}(${O}(scale.${w}))`;case 2:return`vec2<${$}>(${O}(scale[0].${w}, scale[1].${w}))`;case 4:return`vec4<${$}>(${O}(scale[0].${w}, scale[1].${w}, scale[2].${w}, scale[3].${w}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=M("input",t[0].dataType,t[0].dims,l),C=Q("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:k},{inputs:[t[0],b]})},Ah=(e,t)=>{t.format==="NHWC"?Nl(e,e.inputs,t):Bl(e,e.inputs,t)}}),Ml,Dl,Oh,P0=P(()=>{te(),ie(),ae(),Ml=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dl=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],u=a,l=R.normalizeAxis(t.axis,a.length),p=R.sizeToDimension(a,l),h=R.sizeFromDimension(a,l),f=R.size(s.dims),g=n?R.size(n.dims):0;if(f!==h||n&&g!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let y=[];for(let E=0;E<a.length;++E)E<l?y.push(a[E]):y.push(1);let _=xe(h),b=["type","type"],k=[{type:12,data:p},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];n&&b.push("type");let v=r>1,$=r>2,I=E=>{let C=Ee(e[0].dataType),A=[M("x",e[0].dataType,e[0].dims,_),M("scale",s.dataType,s.dims,_)];n&&A.push(M("bias",n.dataType,n.dims,_)),A.push(Q("output",e[0].dataType,u,_)),v&&A.push(Q("mean_data_output",1,y)),$&&A.push(Q("inv_std_output",1,y));let w=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(w).declareVariables(...A)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ka("f32",_)};
    var mean_square_vector = ${ka("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ht(C,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${$t("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${$t("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ht(C,_,"x[j + offset]")};
      let f32scale = ${Ht(C,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Ht(C,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:u,dataType:e[0].dataType}];return v&&S.push({dims:y,dataType:1}),$&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:k}),getShaderSource:I}},Oh=(e,t)=>{Ml(e.inputs),e.compute(Dl(e.inputs,t,e.outputCount))}}),Pl,Rh,U0=P(()=>{ie(),an(),nn(),Pl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Rh=e=>{Pl(e.inputs);let t=Ft.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(rn(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=R.size(e.inputs[0].dims.slice(0,-2)),n=R.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let u=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),p=[1,s,r],h=[u,l];e.compute(Jr(h,{activation:""},t,p),{inputs:h})}else e.compute(Jr(e.inputs,{activation:""},t))}}}),Ul,ql,Ll,Bh,Nh,q0=P(()=>{te(),ie(),Se(),ae(),Ul=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!R.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(R.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(R.size(l)!==p)throw new Error("zeroPoints input size error.")}},ql=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=R.size(u),p=e[1].dims[2]/4,h=e[0].dataType,f=xe(t.k),g=xe(p),y=xe(n),_=u.concat([a,n]),b=a>1&&n/y%2===0?2:1,k=R.size(_)/y/b,v=64,$=[],I=[l,a,s/f],S=R.convertShape(e[1].dims).slice();S.splice(-1,1,p/g),$.push(...ee(I)),$.push(...ee(S)),$.push(...ee(e[2].dims)),e.length===4&&$.push(...ee(R.convertShape(e[3].dims)));let E=[l,a,n/y];$.push(...ee(E));let C=A=>{let w=I.length,O=M("a",e[0].dataType,w,f),D=M("b",12,S.length,g),L=M("scales",e[2].dataType,e[2].dims.length),G=[O,D,L],j=e.length===4?M("zero_points",12,e[3].dims.length):void 0;j&&G.push(j);let B=E.length,H=Q("output",e[0].dataType,B,y),Z=Ee(e[0].dataType),J=(()=>{switch(f){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${f}-component is not supported.`)}})(),he=Math.floor(32/t.bits),V=Math.floor(he/8),ue=()=>{let X="";for(let q=0;q<V;q++){let me=q*t.bits*4,Ge=me+t.bits;X+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${J};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/f}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${O.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let Te=0;Te<y*b;Te++)X+=`
            b_value = ${g===1?`b${Te}_data`:`b${Te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${me}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ge}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Be,Ne)=>`${Z}(b_value_lower[${Ne}]), ${Z}(b_value_upper[${Ne}])`).join(", ")});
            b_dequantized_values = ${f===1?`${J}(${Array.from({length:8},(Be,Ne)=>`(b_quantized_values[${Ne}] - ${j?`zero_point${Te}`:"zero_point"}) * scale${Te}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${j?`zero_point${Te}`:"zero_point"}`).join(",")})) * scale${Te};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Te/y)}]${y>1?`[${Te%y}]`:""} += ${Array.from({length:8/f},(Be,Ne)=>`${f===1?`a_data${q>0?q:""}[${Ne}] * b_dequantized_values[${Ne}]`:`dot(a_data${q>0?q:""}[${Ne}], b_dequantized_values[${Ne}])`}`).join(" + ")};
          `}return X},U=()=>{let X=`
            var col_index = col * ${y};
            ${j?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Z}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<y*b;q++)X+=`
            let scale${q} = ${L.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${Z}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return X},F=()=>{let X=`col_index = col * ${y};`;for(let q=0;q<y*b;q++)X+=`
            let b${q}_data = ${D.getByIndices(`${D.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return X+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,X};return`
        var<workgroup> workgroup_shared: array<${H.type.value}, ${b*v}>;
        ${A.declareVariables(...G,H)}
        ${A.mainStart([v,1,1])}
          let output_indices = ${H.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${U()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${F()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ue()}
                word_offset += ${he/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${H.type.value} = ${H.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${H.setByIndices(`${H.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${y};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:k},programUniforms:$}),getShaderSource:C}},Ll=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=R.size(u),p=e[1].dims[2]/4,h=e[0].dataType,f=xe(t.k),g=xe(p),y=u.concat([a,n]),_=128,b=n%8===0?8:n%4===0?4:1,k=_/b,v=Math.floor(32/t.bits),$=k*g*v,I=$/f,S=$/t.blockSize,E=R.size(y)/b,C=[],A=[l,a,s/f],w=R.convertShape(e[1].dims).slice();w.splice(-1,1,p/g),C.push(...ee(A)),C.push(...ee(w)),C.push(...ee(e[2].dims)),e.length===4&&C.push(...ee(R.convertShape(e[3].dims)));let O=[l,a,n];C.push(...ee(O));let D=L=>{let G=A.length,j=M("a",e[0].dataType,G,f),B=M("b",12,w.length,g),H=M("scales",e[2].dataType,e[2].dims.length),Z=[j,B,H],J=e.length===4?M("zero_points",12,e[3].dims.length):void 0;J&&Z.push(J);let he=O.length,V=Q("output",e[0].dataType,he),ue=Ee(e[0].dataType),U=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${V.type.value}, ${k}>, ${b}>;
        ${L.declareVariables(...Z,V)}
        ${L.mainStart([k,b,1])}
          let output_indices = ${V.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ue}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ue}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${H.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let F=Math.floor(v/8),X="";for(let q=0;q<F;q++){let me=q*t.bits*4,Ge=me+t.bits;X+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${me}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ge}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ue}>(${Array.from({length:4},(Te,Be)=>`${ue}(b_value_lower[${Be}]), ${ue}(b_value_upper[${Be}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ue}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Te,Be)=>`${`dot(a_data${Be}, b_dequantized_values[${Be}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return X})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${V.type.value} = ${V.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${V.setByIndices(`${V.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${k};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:E},programUniforms:C}),getShaderSource:D}},Bh=(e,t)=>{Ul(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ll(e.inputs,t)):e.compute(ql(e.inputs,t))},Nh=e=>fe(e)}),Wl,Vl,Gl,Hl,Fl,jl,Kl,Zl,Mh,L0=P(()=>{te(),ie(),ae(),Wl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Vl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Gl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Hl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k = i32(${Y("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Fl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k -= i32(${Y("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jl=(e,t,r)=>{switch(r.mode){case 0:return Vl(e,t,r.pads.length);case 1:return Gl(e,t,r.pads.length);case 2:return Hl(e,t,r.pads.length);case 3:return Fl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Kl=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=R.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...ee(e[0].dims,r));let u=["rank"],l=p=>{let h=Q("output",e[0].dataType,r.length),f=M("x",e[0].dataType,i.length),g=f.type.value,y=jl(h,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?g:"f32"}),`
            ${p.registerUniforms(_).declareVariables(f,h)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:s}),getShaderSource:l}},Zl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)s[Number(u[l])]=Number(r[l]),s[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>s[Number(l)]=Number(u));let n=[];return s.forEach(u=>n.push(u)),{mode:t.mode,value:i,pads:n}}else return t},Mh=(e,t)=>{Wl(e.inputs);let r=Zl(e.inputs,t);e.compute(Kl(e.inputs,r),{inputs:[0]})}}),sr,na,sa,oa,ua,Xl,Ql,la,da,Dh,Ph,pa,Uh,qh,ca,Lh,Wh,Vh,Gh,W0=P(()=>{Fe(),te(),ie(),ae(),sr=e=>{if(be.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},na=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),u=t.strides.slice(),l=s?t.dilations.slice():[],p=t.pads.slice();Qr.adjustPoolAttributes(r,a,n,u,l,p);let h=Qr.computePoolOutputShape(r,a,u,l,n,p,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:n,strides:u,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:n,strides:u,pads:p,cacheKey:t.cacheKey});let g=h.slice();return g.push(g.splice(1,1)[0]),[f,i?g:h]},sa=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),a=R.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],f=!!(p+h);s.push({type:12,data:u},{type:12,data:l},{type:12,data:p},{type:12,data:h}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];g=!!(b+k),s.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:k}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=R.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,h)=>p+h);return[s,n,!!l,!1,!1]}},oa=(e,t,r,i,a,s,n,u,l,p,h,f)=>{let g=a.format==="NHWC",y=t.type.value,_=Q("output",t.type.tensor,i);if(a.kernelShape.length<=2){let b="",k="",v="",$=r-(g?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let I=r-(g?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${k}
              ${b}
              ${v}
              ${n}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=a.kernelShape.length,k=a.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${Y("uniforms.pads","j - 2u",k)};
                  ${v}
              }
              ${n}

              output[global_idx] = value;
            }`}},ua=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xl=e=>`${ua(e)};${e.countIncludePad}`,Ql=e=>`${ua(e)};${e.storageOrder};${e.dilations}`,la=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),da=(e,t,r,i)=>{let[a,s]=na(t,i,r),n=M("x",t.dataType,t.dims.length),u=n.type.value,l="value += x_val;",p="";a.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[h,f,g,y,_]=sa(s,a);h.push(...ee(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:h}),getShaderSource:k=>oa(k,n,t.dims.length,s.length,a,l,p,0,f,g,y,_)}},Dh=e=>{let t=e.count_include_pad!==0,r=la(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Xl(i)}},Ph=(e,t)=>{sr(e.inputs),e.compute(da("AveragePool",e.inputs[0],!1,t))},pa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Uh=e=>{let t=e.format;return{format:t,...pa,cacheKey:t}},qh=(e,t)=>{sr(e.inputs),e.compute(da("GlobalAveragePool",e.inputs[0],!0,t))},ca=(e,t,r,i)=>{let[a,s]=na(t,i,r),n=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),p=["rank"],[h,f,g,y,_]=sa(s,a);return h.push(...ee(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:h}),getShaderSource:b=>oa(b,l,t.dims.length,s.length,a,n,u,t.dataType===10?-65504:-1e5,f,g,y,_)}},Lh=(e,t)=>{sr(e.inputs),e.compute(ca("MaxPool",e.inputs[0],!1,t))},Wh=e=>{let t=e.storage_order,r=e.dilations,i=la(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Ql(a)}},Vh=e=>{let t=e.format;return{format:t,...pa,cacheKey:t}},Gh=(e,t)=>{sr(e.inputs),e.compute(ca("GlobalMaxPool",e.inputs[0],!0,t))}}),Yl,Jl,Hh,Fh,V0=P(()=>{te(),ie(),Se(),ae(),Yl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Jl=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,u=R.size(s),l=i===3||i===2,p=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(R.size(f.dims)/4)]:f.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,_=y===!1&&h.length===1,b=xe(u),k=y&&(!l||b===4),v=k?b:1,$=k&&!l?b:1,I=M("input",l?12:i,p.length,$),S=M("scale",n,h.length),E=f?M("zero_point",l?12:i,g.length):void 0,C=Q("output",n,s.length,v),A=[I,S];E&&A.push(E);let w=[p,h];f&&w.push(g);let O=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...ee(...w,s)],D=L=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${L.registerUniforms(G).declareVariables(...A,C)}
      ${L.mainStart()}
          ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:D,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:O})}},Hh=(e,t)=>{Yl(e.inputs,t),e.compute(Jl(e.inputs,t))},Fh=e=>fe({axis:e.axis,blockSize:e.blockSize})}),ed,td,jh,G0=P(()=>{Fe(),te(),ae(),ed=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},td=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,u=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...ee(s)],l=p=>{let h=Q("output",i,s.length),f=h.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${p.registerUniforms(g).declareVariables(h)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u})}},jh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),be.webgpu.validateInputContent&&ed(t,r,i),e.compute(td(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),rd,id,Kh,Zh,H0=P(()=>{te(),ie(),Se(),ae(),rd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},id=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(R.sizeToDimension(i,i.length-1)/s),u=i[i.length-1],l=R.sizeFromDimension(r,u),p=[{type:12,data:n},{type:12,data:u},{type:12,data:l},...ee(e[1].dims,e[2].dims,a)],h=f=>{let g=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?xp("output",e[0].dataType,a.length):Q("output",e[0].dataType,a.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${rd(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:h}},Kh=e=>fe({reduction:e.reduction}),Zh=(e,t)=>{e.compute(id(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ad,nd,sd,ha,od,ud,ld,dd,pd,cd,hd,fd,fa,md,gd,yd,_d,bd,Xh,Qh,F0=P(()=>{te(),ie(),Se(),ae(),ad=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},nd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},sd=(e,t,r,i,a,s)=>{let[n,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ad(i,t),t.axes.length>0&&nd(i,t.axes,p).forEach((h,f)=>i[f]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>a.push(Number(h))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},ha=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,od=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ha("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ha("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ud=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ld=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},dd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},pd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},cd=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",i)};
        var roi_low = ${Y("uniforms.roi","i",a)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hd=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",s)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,fd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,fa=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",md=(e,t,r,i,a)=>{let[s,n,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${fa(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${n}];
      var col:${p} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},gd=(e,t,r,i,a,s,n,u,l,p)=>{let h=r.length===2,[f,g]=h?[0,1]:[2,3],y=e.type.value,_=b=>{let k=b===f?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[b]},
        ${i[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${y} = originalIdx + ${y}(i);
          if (${k} < 0 || ${k} >= ${r[b]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${k} = max(0, min(${k}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${k})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},yd=(e,t,r,i,a)=>{let[s,n,u,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${fa(e,p,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${n}];
      var height:${h} = originalIndices[${u}];
      var width:${h} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},_d=(e,t,r,i,a,s)=>{let n=e.dims,u=ld(s,t.axes,n.length),l=dd(n,i,a,t.axes),p=i.slice();i.length===0&&(p=n.map(($,I)=>$===0?1:l[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(l=pd(n,p,t)));let h=Q("output",e.dataType,l.length),f=M("input",e.dataType,n.length),g=R.size(l),y=n.length===l.length&&n.every(($,I)=>$===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,k=f.type.value,v=$=>`
      ${y?"":`
      ${od(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fd(f,n)};
              ${ud(t.nearestMode,r,k)};
              ${hd(f,h,n,l,p.length,u.length,_)};
              `;case"linear":return`
              ${cd(h,n,l,p.length,u.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${md(f,h,n,_,b)}`;if(n.length===3||n.length===5)return`${yd(f,h,n,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${gd(f,h,n,l,p,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(f,h)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:u},...ee(n,l)]})}},bd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Xh=(e,t)=>{let r=[],i=[],a=[],s=bd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");sd(e.inputs,t,s,r,i,a),e.compute(_d(e.inputs[0],t,s,r,i,a),{inputs:[0]})},Qh=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return fe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:u,mode:l,nearestMode:p})}}),wd,$d,Yh,j0=P(()=>{te(),ie(),ae(),wd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},$d=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=R.size(s),u=s,l=n,p=s.slice(-1)[0],h=i?s.slice(0,-1).concat(1):[],f=!a&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,k=64,v=xe(p),$=[{type:12,data:l},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],I=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[M("x",e[0].dataType,e[0].dims,v),M("skip",e[1].dataType,e[1].dims,v),M("gamma",e[2].dataType,e[2].dims,v)];f&&A.push(M("beta",e[3].dataType,e[3].dims,v)),g&&A.push(M("bias",e[4].dataType,e[4].dims,v)),A.push(Q("output",e[0].dataType,u,v)),y&&A.push(Q("mean_output",1,h)),_&&A.push(Q("inv_std_output",1,h)),b&&A.push(Q("input_skip_bias_sum",e[0].dataType,u,v));let w=Ee(e[0].dataType),O=Ee(1,v);return`

      ${E.registerUniforms(C).declareVariables(...A)}
      var<workgroup> sum_shared : array<${O}, ${k}>;
      var<workgroup> sum_squared_shared : array<${O}, ${k}>;

      ${E.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":w+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ht(w,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${$t("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${$t("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${w}(mean)`}) *
            ${w}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:u,dataType:e[0].dataType}];return r>1&&S.push({dims:h,dataType:1}),r>2&&S.push({dims:h,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${b}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:I,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:$})}},Yh=(e,t)=>{wd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute($d(e.inputs,t,e.outputCount,!1),{outputs:r})}}),vd,or,xd,ma,Sd,kd,Jh,ef,K0=P(()=>{te(),ie(),Se(),ae(),vd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},or=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},xd=(e,t)=>{if(e.length>1){let r=or(e,1),i=or(e,2),a=or(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),fe({starts:r,ends:i,axes:a})}else return t},ma=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Sd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,kd=(e,t)=>{let r=e[0].dims,i=R.size(r),a=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=or(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((v,$)=>ma(v,$,r,a,s)),u=t.ends.map((v,$)=>ma(v,$,r,a,s));if(a.length!==n.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(n.splice(v,0,0),u.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,$,I)=>{if(v<0){let S=(u[$]-n[$])/v,E=n[$],C=E+S*s[$];n[$]=C,u[$]=E,I[$]=-v}});let p=r.slice(0);a.forEach((v,$)=>{p[v]=Math.ceil((u[v]-n[v])/s[v])});let h={dims:p,dataType:e[0].dataType},f=Q("output",e[0].dataType,p.length),g=M("input",e[0].dataType,e[0].dims.length),y=R.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:y},{type:12,data:n},{type:6,data:l},{type:12,data:s},...ee(e[0].dims,p)],k=v=>`
      ${v.registerUniforms(_).declareVariables(g,f)}
        ${Sd(g,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},Jh=(e,t)=>{vd(e.inputs,t);let r=xd(e.inputs,t);e.compute(kd(e.inputs,r),{inputs:[0]})},ef=e=>{let t=e.starts,r=e.ends,i=e.axes;return fe({starts:t,ends:r,axes:i})}}),Td,Id,tf,rf,Z0=P(()=>{te(),ie(),Se(),vt(),ae(),Td=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Id=(e,t)=>{let r=e.inputs[0],i=r.dims,a=R.size(i),s=i.length,n=R.normalizeAxis(t.axis,s),u=n<i.length-1,l,p=[];u?(p=Array.from({length:s},(A,w)=>w),p[n]=s-1,p[s-1]=n,l=e.compute(Ve(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,f=h[s-1],g=a/f,y=xe(f),_=f/y,b=64;g===1&&(b=256);let k=(A,w)=>w===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:w===2?`max(${A}.x, ${A}.y)`:w===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,v=M("x",l.dataType,l.dims,y),$=Q("result",l.dataType,l.dims,y),I=v.type.value,S=Ee(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,E=A=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${A.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${k("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${$t("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ve(C,p),{inputs:[C]})},tf=(e,t)=>{Td(e.inputs),Id(e,t)},rf=e=>fe({axis:e.axis})}),ga,Ed,zd,Cd,af,X0=P(()=>{te(),ie(),ae(),ga=e=>Array.from(e.getBigInt64Array(),Number),Ed=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ga(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Cd=(e,t)=>{let r=e[0].dims,i=t??ga(e[1]),a=zd(r,i),s=R.size(a),n=e[0].dataType,u=M("input",n,r.length),l=Q("output",n,a.length),p=h=>`
      const inputShape = ${u.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(u,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ee(e[0].dims,a)]}),getShaderSource:p}},af=e=>{Ed(e.inputs),e.compute(Cd(e.inputs),{inputs:[0]})}}),Ad,Od,nf,Q0=P(()=>{te(),ie(),ae(),Ad=(e,t,r,i,a)=>{let s=Q("output_data",a,r.length,4),n=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),p,h=(f,g,y)=>`select(${g}, ${f}, ${y})`;if(!i)p=s.setByOffset("global_idx",h(n.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,k=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${s.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${n.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${h(b,k,v)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Od=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(R.areEqual(t,r)&&R.areEqual(r,i)),n=t,u=R.size(t);if(s){let p=Ft.calcShape(Ft.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");n=p,u=R.size(n)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Ad(p,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ee(i,t,r,n)]})}},nf=e=>{e.compute(Od(e.inputs))}}),sf,Y0=P(()=>{c0(),Ya(),h0(),f0(),m0(),g0(),y0(),v0(),S0(),k0(),T0(),I0(),E0(),z0(),C0(),A0(),O0(),R0(),B0(),N0(),M0(),D0(),P0(),U0(),q0(),Sh(),L0(),W0(),V0(),G0(),H0(),Qa(),F0(),zh(),j0(),K0(),Z0(),Ih(),X0(),vt(),Ja(),Q0(),sf=new Map([["Abs",[Yp]],["Acos",[Jp]],["Acosh",[ec]],["Add",[Bc]],["ArgMax",[Kp,Ia]],["ArgMin",[jp,Ia]],["Asin",[tc]],["Asinh",[rc]],["Atan",[ic]],["Atanh",[ac]],["Attention",[Zp]],["AveragePool",[Ph,Dh]],["BatchNormalization",[Xp]],["BiasAdd",[Qp]],["BiasSplitGelu",[Rc]],["Cast",[sc,nc]],["Ceil",[uc]],["Clip",[oc]],["Concat",[Gc,Hc]],["Conv",[Ra,Oa]],["ConvTranspose",[th,eh]],["Cos",[lc]],["Cosh",[dc]],["CumSum",[rh,ih]],["DepthToSpace",[ah,nh]],["DequantizeLinear",[Hh,Fh]],["Div",[Nc]],["Einsum",[sh,oh]],["Elu",[pc,cr]],["Equal",[Mc]],["Erf",[cc]],["Exp",[hc]],["Expand",[uh]],["FastGelu",[lh]],["Floor",[fc]],["FusedConv",[Ra,Oa]],["Gather",[ph,dh]],["GatherElements",[yh,gh]],["GatherBlockQuantized",[fh,mh]],["GatherND",[ch,hh]],["Gelu",[mc]],["Gemm",[bh,_h]],["GlobalAveragePool",[qh,Uh]],["GlobalMaxPool",[Gh,Vh]],["Greater",[qc]],["GreaterOrEqual",[Wc]],["GridSample",[wh,$h]],["GroupQueryAttention",[Ch]],["HardSigmoid",[xc,vc]],["InstanceNormalization",[Ah]],["LayerNormalization",[Oh]],["LeakyRelu",[gc,cr]],["Less",[Lc]],["LessOrEqual",[Vc]],["Log",[Ac]],["MatMul",[Rh]],["MatMulNBits",[Bh,Nh]],["MaxPool",[Lh,Wh]],["Mul",[Dc]],["MultiHeadAttention",[xh,vh]],["Neg",[_c]],["Not",[yc]],["Pad",[Mh]],["Pow",[Pc]],["QuickGelu",[Oc,cr]],["Range",[jh]],["Reciprocal",[bc]],["ReduceMin",[Wp]],["ReduceMean",[Dp]],["ReduceMax",[Lp]],["ReduceSum",[Gp]],["ReduceProd",[Vp]],["ReduceL1",[Pp]],["ReduceL2",[Up]],["ReduceLogSum",[Fp]],["ReduceLogSumExp",[qp]],["ReduceSumSquare",[Hp]],["Relu",[wc]],["Resize",[Xh,Qh]],["RotaryEmbedding",[Eh]],["ScatterND",[Zh,Kh]],["Sigmoid",[$c]],["Sin",[Sc]],["Sinh",[kc]],["Slice",[Jh,ef]],["SkipLayerNormalization",[Yh]],["Split",[kh,Th]],["Sqrt",[Tc]],["Softmax",[tf,rf]],["Sub",[Uc]],["Tan",[Ic]],["Tanh",[Ec]],["ThresholdedRelu",[Cc,cr]],["Tile",[af]],["Transpose",[kp,Tp]],["Where",[nf]]])}),of,J0=P(()=>{Fe(),pt(),ae(),of=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){st(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});a&&u.push({binding:u.length,resource:a});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),tt(e.programInfo.name)}dispose(){}build(e,t){st(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=Sp(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,u=r.createShaderModule({code:n,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return tt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),uf={};Kt(uf,{WebGpuBackend:()=>lf});var Rd,Bd,Nd,lf,ey=P(()=>{Fe(),te(),pt(),bp(),d0(),Y0(),J0(),Rd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Bd=(e,t,r)=>{var a,s;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Rd(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Nd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},lf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Nd(n),this.gpuDataManager=vp(this),this.programManager=new of(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ja(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;st(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let s=r[a],n=s.kernelId,u=this.kernels.get(n),l=u.kernelType,p=u.kernelName,h=s.programName,f=s.inputTensorViews,g=s.outputTensorViews,y=t[a*2],_=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),k=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(k))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:dt(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:dt(v.dataType)})),kernelId:n,kernelType:l,kernelName:p,programName:h,startTime:b,endTime:k});else{let v="";f.forEach((I,S)=>{v+=`input[${S}]: [${I.dims}] | ${dt(I.dataType)}, `});let $="";g.forEach((I,S)=>{$+=`output[${S}]: [${I.dims}] | ${dt(I.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${p}|${h}" ${v}${$}start time: ${b} ns, execution time: ${k-b} ns`)}jr("GPU",`${h}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),tt()}run(e,t,r,i,a,s){st(e.name);let n=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let S=this.gpuDataManager.get(I);if(!S)throw new Error(`no GPU data for input: ${I}`);n.push(S)}let{outputs:u,dispatchGroup:l,programUniforms:p}=e.getRunData(t),h=r.length===0?u.map(($,I)=>I):r;if(h.length!==u.length)throw new Error(`Output size ${h.length} must be equal to ${u.length}.`);let f=[],g=[];for(let $=0;$<u.length;++$){if(!Number.isInteger(h[$])||h[$]<-3||h[$]>=s)throw new Error(`Invalid output index: ${h[$]}`);if(h[$]===-3)continue;let I=h[$]===-1,S=h[$]===-2,E=I||S?a(u[$].dataType,u[$].dims):i(h[$],u[$].dataType,u[$].dims);if(f.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(I&&this.temporaryData.push(C),S){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(C)}g.push(C)}if(n.length!==t.length||g.length!==f.length){if(g.length===0)return tt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(p){let $=0,I=[];p.forEach(A=>{let w=typeof A.data=="number"?[A.data]:A.data;if(w.length===0)return;let O=A.type===10?2:4,D,L;A.type===10?(L=w.length>4?16:w.length>2?8:w.length*O,D=w.length>4?16:O*w.length):(L=w.length<=2?w.length*O:16,D=16),$=Math.ceil($/L)*L,I.push($);let G=A.type===10?8:4;$+=w.length>4?Math.ceil(w.length/G)*D:w.length*O});let S=16;$=Math.ceil($/S)*S;let E=new ArrayBuffer($);p.forEach((A,w)=>{let O=I[w],D=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(E,O,D.length).set(D);else if(A.type===12)new Uint32Array(E,O,D.length).set(D);else if(A.type===10)new Uint16Array(E,O,D.length).set(D);else if(A.type===1)new Float32Array(E,O,D.length).set(D);else throw new Error(`Unsupported uniform type: ${dt(A.type)}`)});let C=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,$),this.gpuDataManager.release(C.id),y={offset:0,size:$,buffer:C.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,k=Bd(e,t,b),v=this.programManager.getArtifact(k);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(k,v),de("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let $=0;$<p.length;$++){let I=p[$],S=I.type,E=typeof I.data=="number"?1:I.data.length,[C,A]=v.uniformVariablesInfo[$];if(S!==C||E!==A)throw new Error(`Uniform variable ${$} mismatch: expect type ${C} with size ${A}, got type ${S} with size ${E} in program "${v.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,n,g,_,y),tt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=sf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${s}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Sa(this,e,t);return Ka(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),df={};Kt(df,{init:()=>pf});var Lr,Md,pf,ty=P(()=>{te(),pt(),ie(),l0(),Lr=class cf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new cf(this.module,this.dataType,this.data,t)}},Md=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let u=[];for(let l=0;l<n;l++){let p=Number(e.getValue(i*a++,s)),h=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,s)),g=[];for(let y=0;y<f;y++)g.push(Number(e.getValue(i*a++,s)));u.push(new Lr(e,p,h,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,l,p)=>new Lr(this.module,l,this.output(u,p),p),s=(u,l)=>{let p=Rt(u,l);if(!p)throw new Error(`Unsupported data type: ${u}`);let h=p>0?this.backend.gpuDataManager.create(p).id:0;return new Lr(this.module,u,h,l)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},pf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(ey(),gr(uf)).WebGpuBackend,n=new s;await n.initialize(r,i),a("webgpu",[n,u=>n.alloc(Number(u)),u=>n.free(u),(u,l,p,h=!1)=>{if(h)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(p)}`),n.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));n.upload(Number(l),f)}},async(u,l,p)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${p}`),await n.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(u,l,p)=>n.createKernel(u,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>n.releaseKernel(u),(u,l,p,h)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${l}`);let f=new Md(t,n,Number(l));return n.computeKernel(Number(u),f,h)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new $p(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,u,l,p,h)=>s.ensureTensor(n,u,l,p,h),(n,u)=>{s.uploadTensor(n,u)},async(n,u)=>s.downloadTensor(n,u),(n,u)=>s.registerMLContext(n,u),!!r.trace])}}}),Dd,sn,on,bt,Pd,ya,ti,un,ln,_a,dn,pn,cn,hf=P(()=>{Fe(),s0(),o0(),te(),Ut(),Va(),mp(),Dd=(e,t)=>{we()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},sn=async e=>{Dd(e.wasm.numThreads,Xr(e.logLevel))},on=async(e,t)=>{var i,a;(a=(i=we()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(ty(),gr(df)).init;t==="webgpu"&&await s("webgpu",we(),e,r),t==="webnn"&&await s("webnn",we(),e)}},bt=new Map,Pd=e=>{let t=we(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&ge("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},ya=(e,t)=>{let r=we(),i=r.stackSave(),a=0;try{let s=r.PTR_SIZE,n=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&ge("Can't get session input/output metadata.");let u=Number(r.getValue(n,"*"));a=Number(r.getValue(n+s,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let p=r.HEAPU32[a/4+1],h=[];for(let f=0;f<p;f++){let g=Number(r.getValue(a+8+f*s,"*"));h.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(f+p)*s,"*")))}return[u,l,h]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ti=e=>{let t=we(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},un=async(e,t)=>{var f,g,y,_;let r,i,a=we();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ti(e);let s=0,n=0,u=0,l=[],p=[],h=[];try{if([n,l]=await fp(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let w=[];for(let O of t.externalData){let D=typeof O=="string"?O:O.path;w.push(Fa(typeof O=="string"?O:O.data).then(L=>{a.mountExternalData(D,L)}))}await Promise.all(w)}for(let w of(t==null?void 0:t.executionProviders)??[])if((typeof w=="string"?w:w.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof w!="string"){let O=w,D=O==null?void 0:O.context,L=O==null?void 0:O.gpuDevice,G=O==null?void 0:O.deviceType,j=O==null?void 0:O.powerPreference;D?a.currentContext=D:L?a.currentContext=await a.webnnCreateMLContext(L):a.currentContext=await a.webnnCreateMLContext({deviceType:G,powerPreference:j})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),(f=a.webgpuOnCreateSession)==null||f.call(a,s),s===0&&ge("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[b,k]=Pd(s),v=!!(t!=null&&t.enableGraphCapture),$=[],I=[],S=[],E=[],C=[];for(let w=0;w<b;w++){let[O,D,L]=ya(s,w);O===0&&ge("Can't get an input name."),p.push(O);let G=a.UTF8ToString(O);$.push(G),S.push(D===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:dt(D),shape:L})}for(let w=0;w<k;w++){let[O,D,L]=ya(s,w+b);O===0&&ge("Can't get an output name."),h.push(O);let G=a.UTF8ToString(O);I.push(G),E.push(D===0?{name:G,isTensor:!1}:{name:G,isTensor:!0,type:dt(D),shape:L});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let j=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[G])??"cpu",B=a.webnnIsGraphOutput;if(j==="cpu"&&B&&B(s,G)){C.push("ml-tensor-cpu-output");continue}if(j!=="cpu"&&j!=="cpu-pinned"&&j!=="gpu-buffer"&&j!=="ml-tensor")throw new Error(`Not supported preferred output location: ${j}.`);if(v&&j!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${j}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(j)}}let A=null;return C.some(w=>w==="gpu-buffer"||w==="ml-tensor"||w==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(s),u===0&&ge("Can't create IO binding."),A={handle:u,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(w=>w==="ml-tensor-cpu-output"?"ml-tensor":w).map(w=>va(w))}),bt.set(s,[s,p,h,A,v,!1]),[s,$,I,S,E]}catch(b){throw p.forEach(k=>a._OrtFree(k)),h.forEach(k=>a._OrtFree(k)),u!==0&&a._OrtReleaseBinding(u)!==0&&ge("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&ge("Can't release session."),b}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&ge("Can't release session options."),l.forEach(b=>a._free(b)),(_=a.unmountExternalData)==null||_.call(a)}},ln=e=>{var l,p,h;let t=we(),r=bt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,u]=r;n&&(u&&t._OrtClearBoundOutputs(n.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&ge("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(p=t.webnnOnReleaseSession)==null||p.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),a.forEach(f=>t._OrtFree(f)),s.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&ge("Can't release session."),bt.delete(e)},_a=async(e,t,r,i,a,s,n=!1)=>{if(!e){t.push(0);return}let u=we(),l=u.PTR_SIZE,p=e[0],h=e[1],f=e[3],g=f,y,_;if(p==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=Rt(Ot(p),h);{let $=u.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=$(i,s,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=Rt(Ot(p),h);let $=u.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=$(i,v,Ot(p),h)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,y=u._malloc(_),r.push(y);for(let $=0;$<v.length;$++){if(typeof v[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);u.setValue(y+$*l,Je(v[$],r),"*")}}else{let $=u.webnnIsGraphInput,I=u.webnnIsGraphOutput;if(p!=="string"&&$&&I){let S=u.UTF8ToString(a);if($(i,S)||I(i,S)){let E=Ot(p);_=Rt(E,h),g="ml-tensor";let C=u.webnnCreateTemporaryTensor,A=u.webnnUploadTensor;if(!C||!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let w=await C(i,E,h);A(w,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=w}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let b=u.stackSave(),k=u.stackAlloc(4*h.length);try{h.forEach(($,I)=>u.setValue(k+I*l,$,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Ot(p),y,_,k,h.length,va(g));v===0&&ge(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{u.stackRestore(b)}},dn=async(e,t,r,i,a,s)=>{var G,j,B,H;let n=we(),u=n.PTR_SIZE,l=bt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=l[0],h=l[1],f=l[2],g=l[3],y=l[4],_=l[5],b=t.length,k=i.length,v=0,$=[],I=[],S=[],E=[],C=[],A=n.stackSave(),w=n.stackAlloc(b*u),O=n.stackAlloc(b*u),D=n.stackAlloc(k*u),L=n.stackAlloc(k*u);try{[v,$]=hp(s),Bt("wasm prepareInputOutputTensor");for(let V=0;V<b;V++)await _a(r[V],I,E,e,h[t[V]],t[V],y);for(let V=0;V<k;V++)await _a(a[V],S,E,e,f[i[V]],b+i[V],y);Nt("wasm prepareInputOutputTensor");for(let V=0;V<b;V++)n.setValue(w+V*u,I[V],"*"),n.setValue(O+V*u,h[t[V]],"*");for(let V=0;V<k;V++)n.setValue(D+V*u,S[V],"*"),n.setValue(L+V*u,f[i[V]],"*");if(g&&!_){let{handle:V,outputPreferredLocations:ue,outputPreferredLocationsEncoded:U}=g;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);Bt("wasm bindInputsOutputs");for(let F=0;F<b;F++){let X=t[F];await n._OrtBindInput(V,h[X],I[F])!==0&&ge(`Can't bind input[${F}] for session=${e}.`)}for(let F=0;F<k;F++){let X=i[F];(G=a[F])!=null&&G[3]?(C.push(S[F]),n._OrtBindOutput(V,f[X],S[F],0)!==0&&ge(`Can't bind pre-allocated output[${F}] for session=${e}.`)):n._OrtBindOutput(V,f[X],0,U[X])!==0&&ge(`Can't bind output[${F}] to ${ue[F]} for session=${e}.`)}Nt("wasm bindInputsOutputs"),bt.set(e,[p,h,f,g,y,!0])}(j=n.jsepOnRunStart)==null||j.call(n,p),(B=n.webnnOnRunStart)==null||B.call(n,p);let Z;g?Z=await n._OrtRunWithBinding(p,g.handle,k,D,v):Z=await n._OrtRun(p,O,w,b,L,k,D,v),Z!==0&&ge("failed to call OrtRun().");let J=[],he=[];Bt("wasm ProcessOutputTensor");for(let V=0;V<k;V++){let ue=Number(n.getValue(D+V*u,"*"));if(ue===S[V]||C.includes(S[V])){J.push(a[V]),ue!==S[V]&&n._OrtReleaseTensor(ue)!==0&&ge("Can't release tensor.");continue}let U=n.stackSave(),F=n.stackAlloc(4*u),X=!1,q,me=0;try{n._OrtGetTensorData(ue,F,F+u,F+2*u,F+3*u)!==0&&ge(`Can't access output tensor data on index ${V}.`);let Ge=u===4?"i32":"i64",Te=Number(n.getValue(F,Ge));me=n.getValue(F+u,"*");let Be=n.getValue(F+u*2,"*"),Ne=Number(n.getValue(F+u*3,Ge)),Pe=[];for(let $e=0;$e<Ne;$e++)Pe.push(Number(n.getValue(Be+$e*u,Ge)));n._OrtFree(Be)!==0&&ge("Can't free memory for tensor dims.");let Me=Pe.reduce(($e,re)=>$e*re,1);q=dt(Te);let ct=g==null?void 0:g.outputPreferredLocations[i[V]];if(q==="string"){if(ct==="gpu-buffer"||ct==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let $e=[];for(let re=0;re<Me;re++){let Ue=n.getValue(me+re*u,"*"),_r=n.getValue(me+(re+1)*u,"*"),Zt=re===Me-1?void 0:_r-Ue;$e.push(n.UTF8ToString(Ue,Zt))}J.push([q,Pe,$e,"cpu"])}else if(ct==="gpu-buffer"&&Me>0){let $e=n.jsepGetBuffer;if(!$e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let re=$e(me),Ue=Rt(Te,Me);if(Ue===void 0||!Ga(q))throw new Error(`Unsupported data type: ${q}`);X=!0,J.push([q,Pe,{gpuBuffer:re,download:n.jsepCreateDownloader(re,Ue,q),dispose:()=>{n._OrtReleaseTensor(ue)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(ct==="ml-tensor"&&Me>0){let $e=n.webnnEnsureTensor,re=n.webnnIsGraphInputOutputTypeSupported;if(!$e||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Rt(Te,Me)===void 0||!Ha(q))throw new Error(`Unsupported data type: ${q}`);if(!re(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let Ue=await $e(e,me,Te,Pe,!1);X=!0,J.push([q,Pe,{mlTensor:Ue,download:n.webnnCreateMLTensorDownloader(me,q),dispose:()=>{n.webnnReleaseTensorId(me),n._OrtReleaseTensor(ue)}},"ml-tensor"])}else if(ct==="ml-tensor-cpu-output"&&Me>0){let $e=n.webnnCreateMLTensorDownloader(me,q)(),re=J.length;X=!0,he.push((async()=>{let Ue=[re,await $e];return n.webnnReleaseTensorId(me),n._OrtReleaseTensor(ue),Ue})()),J.push([q,Pe,[],"cpu"])}else{let $e=ri(q),re=new $e(Me);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(n.HEAPU8.subarray(me,me+re.byteLength)),J.push([q,Pe,re,"cpu"])}}finally{n.stackRestore(U),q==="string"&&me&&n._free(me),X||n._OrtReleaseTensor(ue)}}g&&!y&&(n._OrtClearBoundOutputs(g.handle)!==0&&ge("Can't clear bound outputs."),bt.set(e,[p,h,f,g,y,!1]));for(let[V,ue]of await Promise.all(he))J[V][2]=ue;return Nt("wasm ProcessOutputTensor"),J}finally{(H=n.webnnOnRunEnd)==null||H.call(n,p),n.stackRestore(A),I.forEach(Z=>n._OrtReleaseTensor(Z)),S.forEach(Z=>n._OrtReleaseTensor(Z)),E.forEach(Z=>n._free(Z)),v!==0&&n._OrtReleaseRunOptions(v),$.forEach(Z=>n._free(Z))}},pn=e=>{let t=we(),r=bt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&ge("Can't get an profile file name."),t._OrtFree(a)},cn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),wt,De,Vt,ur,lr,Wr,ba,Vr,zt,Ct,Ud,ff,mf,gf,yf,_f,bf,wf,$f=P(()=>{Fe(),hf(),Ut(),La(),wt=()=>!!be.wasm.proxy&&typeof document<"u",Vt=!1,ur=!1,lr=!1,Vr=new Map,zt=(e,t)=>{let r=Vr.get(e);r?r.push(t):Vr.set(e,[t])},Ct=()=>{if(Vt||!ur||lr||!De)throw new Error("worker not ready")},Ud=e=>{switch(e.data.type){case"init-wasm":Vt=!1,e.data.err?(lr=!0,ba[1](e.data.err)):(ur=!0,ba[0]()),Wr&&(URL.revokeObjectURL(Wr),Wr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Vr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},ff=async()=>{if(!ur){if(Vt)throw new Error("multiple calls to 'initWasm()' detected.");if(lr)throw new Error("previous call to 'initWasm()' failed.");if(Vt=!0,wt())return new Promise((e,t)=>{De==null||De.terminate(),pp().then(([r,i])=>{try{De=i,De.onerror=s=>t(s),De.onmessage=Ud,ba=[e,t];let a={type:"init-wasm",in:be};!a.in.wasm.wasmPaths&&(r||$a)&&(a.in.wasm.wasmPaths={wasm:new URL("/Program%20Files/Git/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),De.postMessage(a),Wr=r}catch(a){t(a)}},t)});try{await Wa(be.wasm),await sn(be),ur=!0}catch(e){throw lr=!0,e}finally{Vt=!1}}},mf=async e=>{if(wt())return Ct(),new Promise((t,r)=>{zt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:be}};De.postMessage(i)});await on(be,e)},gf=async e=>wt()?(Ct(),new Promise((t,r)=>{zt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};De.postMessage(i,[e.buffer])})):ti(e),yf=async(e,t)=>{if(wt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ct(),new Promise((r,i)=>{zt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),De.postMessage(a,s)})}else return un(e,t)},_f=async e=>{if(wt())return Ct(),new Promise((t,r)=>{zt("release",[t,r]);let i={type:"release",in:e};De.postMessage(i)});ln(e)},bf=async(e,t,r,i,a,s)=>{if(wt()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ct(),new Promise((n,u)=>{zt("run",[n,u]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};De.postMessage(p,cn(l))})}else return dn(e,t,r,i,a,s)},wf=async e=>{if(wt())return Ct(),new Promise((t,r)=>{zt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};De.postMessage(i)});pn(e)}}),wa,qd,vf,ry=P(()=>{Fe(),$f(),te(),qa(),mp(),wa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},qd=e=>{switch(e[3]){case"cpu":return new et(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ga(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return et.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ha(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return et.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},vf=class{async fetchModelAndCopyToWasmMemory(e){return gf(await Fa(e))}async loadModel(e,t){st();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await yf(r,t),tt()}async dispose(){return _f(this.sessionId)}async run(e,t,r){st();let i=[],a=[];Object.entries(e).forEach(f=>{let g=f[0],y=f[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),a.push(_)});let s=[],n=[];Object.entries(t).forEach(f=>{let g=f[0],y=f[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);s.push(y),n.push(_)});let u=i.map((f,g)=>wa(f,()=>`input "${this.inputNames[a[g]]}"`)),l=s.map((f,g)=>f?wa(f,()=>`output "${this.outputNames[n[g]]}"`):null),p=await bf(this.sessionId,a,u,n,l,r),h={};for(let f=0;f<p.length;f++)h[this.outputNames[n[f]]]=s[f]??qd(p[f]);return tt(),h}startProfiling(){}endProfiling(){wf(this.sessionId)}}}),xf={};Kt(xf,{OnnxruntimeWebAssemblyBackend:()=>Ma,initializeFlags:()=>Na,wasmBackend:()=>Sf});var Na,Ma,Sf,iy=P(()=>{Fe(),$f(),ry(),Na=()=>{(typeof be.wasm.initTimeout!="number"||be.wasm.initTimeout<0)&&(be.wasm.initTimeout=0);let e=be.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),be.wasm.simd=!1),typeof be.wasm.proxy!="boolean"&&(be.wasm.proxy=!1),typeof be.wasm.trace!="boolean"&&(be.wasm.trace=!1),typeof be.wasm.numThreads!="number"||!Number.isInteger(be.wasm.numThreads)||be.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)be.wasm.numThreads=1;else{let t=typeof navigator>"u"?Wg("node:os").cpus().length:navigator.hardwareConcurrency;be.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ma=class{async init(e){Na(),await ff(),await mf(e)}async createInferenceSessionHandler(e,t){let r=new vf;return await r.loadModel(e,t),r}},Sf=new Ma});Fe();Fe();Fe();var ay="1.27.0";{let e=(iy(),gr(xf)).wasmBackend;Gt("webgpu",e,5),Gt("webnn",e,5),Gt("cpu",e,10),Gt("wasm",e,10)}Object.defineProperty(be.versions,"web",{value:ay,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ny=new Set([1,2,3,5,7]),sy={1:{ar:"دراجة",en:"bicycle"},2:{ar:"سيارة",en:"car"},3:{ar:"دراجة نارية",en:"motorcycle"},5:{ar:"حافلة",en:"bus"},7:{ar:"شاحنة",en:"truck"}},Ae=640,oy=.32,uy=.45;let mr=null,Da="wasm";function ly(){return Da}async function dy(e){if(mr)return;const t=`${e}models/yolo11n.onnx`;be.wasm.numThreads=1;try{be.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.jsep.wasm`},mr=await Kr.create(t,{executionProviders:["webgpu"]}),Da="webgpu"}catch{be.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.wasm`},mr=await Kr.create(t,{executionProviders:["wasm"]}),Da="wasm"}}const Gr=typeof document<"u"?document.createElement("canvas"):null;async function py(e){if(!mr||!Gr)return[];const t=e.videoWidth,r=e.videoHeight;if(!t||!r)return[];Gr.width=Ae,Gr.height=Ae;const i=Gr.getContext("2d",{willReadFrequently:!0}),a=Math.min(Ae/t,Ae/r),s=Math.round(t*a),n=Math.round(r*a),u=(Ae-s)/2,l=(Ae-n)/2;i.fillStyle="#727272",i.fillRect(0,0,Ae,Ae),i.drawImage(e,u,l,s,n);const{data:p}=i.getImageData(0,0,Ae,Ae),h=new Float32Array(3*Ae*Ae),f=Ae*Ae;for(let v=0;v<f;v++)h[v]=p[v*4]/255,h[v+f]=p[v*4+1]/255,h[v+2*f]=p[v*4+2]/255;const g=new et("float32",h,[1,3,Ae,Ae]),_=(await mr.run({images:g})).output0.data,b=8400,k=[];for(let v=0;v<b;v++){let $=0,I=-1;for(let w=0;w<80;w++){const O=_[(4+w)*b+v];O>$&&($=O,I=w)}if($<oy||!ny.has(I))continue;const S=_[v],E=_[b+v],C=_[2*b+v],A=_[3*b+v];k.push({x:(S-C/2-u)/a,y:(E-A/2-l)/a,w:C/a,h:A/a,score:$,classId:I})}return cy(k)}function kf(e,t){const r=Math.max(e.x,t.x),i=Math.max(e.y,t.y),a=Math.min(e.x+e.w,t.x+t.w),s=Math.min(e.y+e.h,t.y+t.h),n=Math.max(0,a-r)*Math.max(0,s-i);return n/(e.w*e.h+t.w*t.h-n||1)}function cy(e){const t=[...e].sort((i,a)=>a.score-i.score),r=[];for(const i of t)r.every(a=>kf(a,i)<uy)&&r.push(i);return r}function hy(e){let t=1,r=[];for(const i of e){for(const a of i.boxes){let s=null,n=.25;for(const u of r){const l=kf(a,u);l>n&&(n=l,s=u)}a.trackId=(s==null?void 0:s.trackId)??t++}r=i.boxes}return e}function fy(e,t,r){const i=t*r,a=new Map;let s=0,n=0;const u=new Set;for(const l of e)for(const p of l.boxes){if(p.trackId===void 0)continue;const f=p.y+p.h/2>i?1:-1,g=a.get(p.trackId);g!==void 0&&g!==f&&!u.has(p.trackId)&&(u.add(p.trackId),f===1?s+=1:n+=1),a.set(p.trackId,f)}return{down:s,up:n,total:s+n}}const my="_screen_1368h_1",gy="_header_1368h_11",yy="_back_1368h_13",_y="_title_1368h_19",by="_subtitle_1368h_20",wy="_why_1368h_21",$y="_stage_1368h_23",vy="_video_1368h_31",xy="_overlay_1368h_33",Sy="_progressWrap_1368h_41",ky="_progressBar_1368h_56",Ty="_progressPct_1368h_66",Iy="_controls_1368h_73",Ey="_primary_1368h_80",zy="_uploadBtn_1368h_86",Cy="_status_1368h_92",Ay="_error_1368h_93",Oy="_replayBadge_1368h_95",Ry="_stat_1368h_92",By="_provider_1368h_103",Ny="_linkBtn_1368h_106",My="_honesty_1368h_111",ke={screen:my,header:gy,back:yy,title:_y,subtitle:by,why:wy,stage:$y,video:vy,overlay:xy,progressWrap:Sy,progressBar:ky,progressPct:Ty,controls:Iy,primary:Ey,uploadBtn:zy,status:Cy,error:Ay,replayBadge:Oy,stat:Ry,provider:By,linkBtn:Ny,honesty:My},Ld=.55,Dy=.18,Py={ar:{title:"تحليل تقاطع بالفيديو",subtitle:"كشف مركبات داخل المتصفح بالكامل — لا يغادر الفيديو جهازك",why:"لماذا؟ أكثر من 40% من حوادث الأردن عند التقاطعات (إدارة السير 2024)",loadingModel:"تحميل النموذج (~10MB أول مرة)…",analyze:"حلّل المقطع",analyzing:"جارٍ التحليل مرة واحدة…",replay:"إعادة تشغيل سلسة من الذاكرة",upload:"ارفع مقطعاً آخر",counted:"مركبات عبرت الخط",down:"باتجاه الكاميرا",up:"مبتعدة",tracks:"مسارات مرصودة",provider:"المعالجة",modelCard:"بطاقة النماذج",err:"تعذر تحميل النموذج — أعد المحاولة أو استخدم متصفح Chrome/Edge حديثاً",honesty:"نموذج YOLO11n عام (COCO) — لا نعلن دقة رقمية على مشاهد أردنية لأنها غير مقيسة؛ العدّ مصمم قرب الكاميرا حيث يكون الكشف موثوقاً."},en:{title:"Intersection video analysis",subtitle:"Fully in-browser vehicle detection — the video never leaves your device",why:"Why? 40%+ of Jordan accidents happen at intersections (PSD 2024)",loadingModel:"Loading the model (~10MB first time)…",analyze:"Analyze the clip",analyzing:"Analyzing once…",replay:"Smooth replay from cache",upload:"Upload another clip",counted:"Vehicles crossed the line",down:"Toward camera",up:"Away",tracks:"Tracks observed",provider:"Processing",modelCard:"Model Card",err:"Model failed to load — retry or use a recent Chrome/Edge",honesty:"Generic YOLO11n (COCO) — no numeric accuracy is claimed on Jordanian scenes as none was measured; counting is designed near-camera where detection is reliable."}};function Gy(){const{language:e}=Mg(),t=Dg(),r=Py[e],i="/Program%20Files/Git/uqab-preview/",a=qe.useRef(null),s=qe.useRef(null),n=qe.useRef([]),u=qe.useRef({down:0,up:0,total:0}),l=qe.useRef(0),[p,h]=qe.useState("loading-model"),[f,g]=qe.useState(0),[y,_]=qe.useState(`${i}assets/detection/demo-intersection.mp4`),[b,k]=qe.useState(0);qe.useEffect(()=>{let S=!0;return dy(i).then(()=>S&&h("ready")).catch(()=>S&&h("error")),()=>{S=!1}},[i]);const v=qe.useCallback(S=>{var B;const E=a.current,C=s.current;if(!E||!C)return;const A=E.videoWidth,w=E.videoHeight;C.width!==A&&(C.width=A,C.height=w);const O=C.getContext("2d");O.clearRect(0,0,A,w);const D=Ld*w;O.strokeStyle="rgba(217, 193, 155, 0.9)",O.setLineDash([14,10]),O.lineWidth=3,O.beginPath(),O.moveTo(0,D),O.lineTo(A,D),O.stroke(),O.setLineDash([]);for(const H of S){O.strokeStyle="#6FAE92",O.lineWidth=2.5,O.strokeRect(H.x,H.y,H.w,H.h);const Z=`${((B=sy[H.classId])==null?void 0:B[e])??""} #${H.trackId??""}`;O.font="600 15px Outfit, Tajawal, sans-serif";const J=O.measureText(Z).width+10;O.fillStyle="rgba(13, 23, 33, 0.82)",O.fillRect(H.x,Math.max(0,H.y-22),J,20),O.fillStyle="#D9C19B",O.fillText(Z,H.x+5,Math.max(14,H.y-7))}const L=u.current,G=`${r.counted}: ${L.total} · ${r.down} ${L.down} · ${r.up} ${L.up}`;O.font="700 17px Outfit, Tajawal, sans-serif";const j=O.measureText(G).width+18;O.fillStyle="rgba(13, 23, 33, 0.85)",O.fillRect(A-j-12,12,j,30),O.fillStyle="#E9EEF4",O.fillText(G,A-j-3,33)},[e,r]),$=qe.useCallback(async()=>{const S=a.current;if(!S)return;h("analyzing"),g(0),n.current=[],S.currentTime=0,S.muted=!0,await S.play();let E=-1,C=!1;await new Promise(D=>{const L=()=>{if(S.ended){D();return}const G=S.currentTime;!C&&G-E>=Dy&&(C=!0,E=G,py(S).then(j=>{n.current.push({t:G,boxes:j}),g(Math.min(99,Math.round(G/S.duration*100))),C=!1})),S.requestVideoFrameCallback(L)};S.requestVideoFrameCallback(L),S.onended=()=>D()}),hy(n.current),u.current=fy(n.current,Ld,S.videoHeight);const A=new Set;for(const D of n.current)for(const L of D.boxes)L.trackId&&A.add(L.trackId);k(A.size),g(100),h("replay"),S.currentTime=0,await S.play();let w=0;const O=()=>{var G;const D=S.currentTime,L=n.current;for(;w<L.length-1&&L[w+1].t<=D;)w+=1;w>0&&D<L[w].t&&(w=0),v(((G=L[w])==null?void 0:G.boxes)??[]),l.current=requestAnimationFrame(O)};S.loop=!0,l.current=requestAnimationFrame(O)},[v]);qe.useEffect(()=>()=>cancelAnimationFrame(l.current),[]);const I=S=>{S&&(cancelAnimationFrame(l.current),n.current=[],u.current={down:0,up:0,total:0},k(0),_(URL.createObjectURL(S)),h("ready"))};return ye.jsx(Pg,{activePath:"/ops/cameras",noBottomNav:!0,children:ye.jsxs("div",{className:ke.screen,children:[ye.jsxs("header",{className:ke.header,children:[ye.jsx("button",{type:"button",className:ke.back,onClick:()=>t(-1),children:"‹"}),ye.jsxs("div",{children:[ye.jsx("h1",{className:ke.title,children:r.title}),ye.jsx("p",{className:ke.subtitle,children:r.subtitle}),ye.jsx("p",{className:ke.why,children:r.why})]})]}),ye.jsxs("div",{className:ke.stage,children:[ye.jsx("video",{ref:a,src:y,className:ke.video,playsInline:!0,preload:"auto"}),ye.jsx("canvas",{ref:s,className:ke.overlay}),p==="analyzing"&&ye.jsxs("div",{className:ke.progressWrap,children:[ye.jsx("span",{children:r.analyzing}),ye.jsx("div",{className:ke.progressBar,children:ye.jsx("i",{style:{width:`${f}%`}})}),ye.jsxs("b",{className:ke.progressPct,children:[f,"%"]})]})]}),ye.jsxs("div",{className:ke.controls,children:[p==="loading-model"&&ye.jsx("span",{className:ke.status,children:r.loadingModel}),p==="error"&&ye.jsx("span",{className:ke.error,children:r.err}),p==="ready"&&ye.jsxs("button",{type:"button",className:ke.primary,onClick:()=>void $(),children:["▶ ",r.analyze]}),p==="replay"&&ye.jsxs(ye.Fragment,{children:[ye.jsxs("span",{className:ke.replayBadge,children:["✓ ",r.replay]}),ye.jsxs("span",{className:ke.stat,children:[r.tracks,": ",ye.jsx("b",{children:b})]})]}),(p==="ready"||p==="replay")&&ye.jsxs("label",{className:ke.uploadBtn,children:[r.upload,ye.jsx("input",{type:"file",accept:"video/*",hidden:!0,onChange:S=>{var E;return I(((E=S.target.files)==null?void 0:E[0])??null)}})]}),ye.jsxs("span",{className:ke.provider,children:[r.provider,": ",ye.jsx("b",{children:p==="loading-model"?"…":ly()})]}),ye.jsx("button",{type:"button",className:ke.linkBtn,onClick:()=>t("/model-card"),children:r.modelCard})]}),ye.jsx("p",{className:ke.honesty,children:r.honesty})]})})}export{Gy as DetectionScreen};
