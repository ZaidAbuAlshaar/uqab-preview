var Mg=Object.defineProperty;var Dg=(e,t,r)=>t in e?Mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var lo=(e,t,r)=>Dg(e,typeof t!="symbol"?t+"":t,r);import{a as Pg,u as Ug,l as qg,r as Ae,j as H,O as Lg}from"./index-DPFfR4cA.js";import{f as Wg}from"./sources-CQLZErlj.js";import{i as Vg,N as nt}from"./Num-CBPmOLLE.js";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var La=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,Hg=Object.getOwnPropertyNames,jg=Object.prototype.hasOwnProperty,Fg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),Zt=(e,t)=>{for(var r in t)La(e,r,{get:t[r],enumerable:!0})},Kg=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Hg(t))!jg.call(e,a)&&a!==r&&La(e,a,{get:()=>t[a],enumerable:!(i=Gg(t,a))||i.enumerable});return e},yr=e=>Kg(La({},"__esModule",{value:!0}),e),tr,bt,Ht,po,Gd,Hd=q(()=>{tr=new Map,bt=[],Ht=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=tr.get(e);if(i===void 0)tr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=bt.indexOf(e);a!==-1&&bt.splice(a,1);for(let s=0;s<bt.length;s++)if(tr.get(bt[s]).priority<=r){bt.splice(s,0,e);return}bt.push(e)}return}throw new TypeError("not a valid backend")},po=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Gd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?bt:r,a,s=[],n=new Set;for(let l of i){let d=await po(l);typeof d=="string"?s.push({name:l,err:d}):(a||(a=d),a===d&&n.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Zg=q(()=>{Hd()}),jd,Xg=q(()=>{jd="1.27.0"}),Ti,ze,Fd=q(()=>{Xg(),Ti="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:jd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ti=e}},get logLevel(){return Ti}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),we,Qg=q(()=>{Fd(),we=ze}),Kd,Zd,Yg=q(()=>{Kd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=s*a,h=0,g=c,y=c*2,_=-1;n==="RGBA"?(h=0,g=c,y=c*2,_=c*3):n==="RGB"?(h=0,g=c,y=c*2):n==="RBG"&&(h=0,y=c,g=c*2);for(let w=0;w<s;w++)for(let S=0;S<a;S++){let v=(e.data[h++]-d[0])*l[0],$=(e.data[g++]-d[1])*l[1],I=(e.data[y++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+$+","+I+","+k+")",i.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Zd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,w=2,S=3,v=0,$=h,I=h*2,k=-1;u==="RGBA"?(v=0,$=h,I=h*2,k=h*3):u==="RGB"?(v=0,$=h,I=h*2):u==="RBG"&&(v=0,I=h,$=h*2),i=r.createImageData(a,s);for(let E=0;E<s*a;y+=g,_+=g,w+=g,S+=g,E++)i.data[y]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[$++]-c[1])*d[1],i.data[w]=(e.data[I++]-c[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Or,Xd,Qd,Yd,Jd,ep,Jg=q(()=>{Wa(),Or=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,g=0,y=1,_=2,w=3,S=0,v=d,$=d*2,I=-1;u==="RGB"&&(h=3,g=0,y=1,_=2,w=-1),l==="RGBA"?I=d*3:l==="RBG"?(S=0,$=d,v=d*2):l==="BGR"&&($=0,v=d,S=d*2);for(let k=0;k<d;k++,g+=h,_+=h,y+=h,w+=h)c[S++]=(e[g]+n[0])/s[0],c[v++]=(e[y]+n[1])/s[1],c[$++]=(e[_]+n[2])/s[2],I!==-1&&w!==-1&&(c[I++]=(e[w]+n[3])/s[3]);return l==="RGBA"?new Ve("float32",c,[1,4,r,i]):new Ve("float32",c,[1,3,r,i])},Xd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;h.drawImage(e,0,0),n=h.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=h,t!==void 0){let g=l();g.width=h,g.height=c;let y=d(g);if(y!=null)y.putImageData(e,0,0),n=y.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let g=e.height,y=e.width;return h.drawImage(e,0,0,y,g),n=h.getImageData(0,0,y,g).data,u.height=g,u.width=y,Or(n,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,h)=>{let g=l(),y=d(g);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let w=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Or(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Or(n,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Qd=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new Ve({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},Yd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Ve({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},Jd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Ve({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},ep=(e,t,r)=>new Ve({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ot,pr,Ii,tp,e0=q(()=>{Ot=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),pr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ii=!1,tp=()=>{if(!Ii){Ii=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Ot.set("int64",BigInt64Array),pr.set(BigInt64Array,"int64")),t&&(Ot.set("uint64",BigUint64Array),pr.set(BigUint64Array,"uint64")),i?(Ot.set("float16",r),pr.set(r,"float16")):Ot.set("float16",Uint16Array)}}}),rp,ip,t0=q(()=>{Wa(),rp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},ip=(e,t)=>{switch(e.location){case"cpu":return new Ve(e.type,e.data,t);case"cpu-pinned":return new Ve({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ve({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ve({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ve({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ve,Wa=q(()=>{Yg(),Jg(),e0(),t0(),Ve=class{constructor(e,t,r){tp();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=Ot.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=Ot.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",n=e;else if(l==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let l=pr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,n=e}if(u===void 0)u=[n.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=n,this.dataLocation="cpu"}let s=rp(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return Xd(e,t)}static fromTexture(e,t){return Qd(e,t)}static fromGpuBuffer(e,t){return Yd(e,t)}static fromMLTensor(e,t){return Jd(e,t)}static fromPinnedBuffer(e,t,r){return ep(e,t,r)}toDataURL(e){return Kd(this,e)}toImageData(e){return Zd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ip(this,e)}}}),et,ap=q(()=>{Wa(),et=Ve}),Kr,Ei,ot,tt,Nt,Mt,np=q(()=>{Fd(),Kr=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ei=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Kr("CPU",n);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},ot=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ei("BEGIN",e)},tt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ei("END",e)},Nt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Mt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),sp,r0=q(()=>{Hd(),ap(),np(),sp=class op{constructor(t){this.handler=t}async run(t,r,i){ot(),Nt("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof et||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof et)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof et)&&(d=!0,n=!1,a[h]=g)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(n)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,s),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof et?l[d]=c:l[d]=new et(c.type,c.data,c.dims)}return Mt("InferenceSession.run"),tt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){ot(),Nt("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Gd(n),d=await u.createInferenceSessionHandler(s,l);return Mt("InferenceSession.create"),tt(),new op(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Zr,i0=q(()=>{r0(),Zr=sp}),a0=q(()=>{}),n0=q(()=>{}),s0=q(()=>{}),o0=q(()=>{}),u0={};Zt(u0,{InferenceSession:()=>Zr,TRACE:()=>Kr,TRACE_EVENT_BEGIN:()=>Nt,TRACE_EVENT_END:()=>Mt,TRACE_FUNC_BEGIN:()=>ot,TRACE_FUNC_END:()=>tt,Tensor:()=>et,env:()=>we,registerBackend:()=>Ht});var je=q(()=>{Zg(),Qg(),i0(),ap(),a0(),n0(),np(),s0(),o0()}),Va=q(()=>{}),up={};Zt(up,{default:()=>lp});var zi,Ci,lp,l0=q(()=>{var e;mf(),qt(),Ga(),zi="ort-wasm-proxy-worker",Ci=((e=globalThis.self)==null?void 0:e.name)===zi,Ci&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Ha(i.wasm).then(()=>{ln(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:s}=i;dn(s,a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:a}=i,s=ri(a);postMessage({type:r,out:s});break}case"create":{let{model:a,options:s}=i;pn(a,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":cn(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:s,inputs:n,outputIndices:u,options:l}=i;hn(a,s,n,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},mn([...n,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":fn(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),lp=Ci?null:t=>new Worker(t??We,{type:"module",name:zi})}),dp={};Zt(dp,{default:()=>pp});async function co(e={}){var oo,uo;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&((oo=self.name)==null?void 0:oo.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=o=>async(...p)=>{var m;try{if(t.Yc)throw Error("Session already started");let f=t.Yc={Kd:p[0],errors:[]},x=await o(...p);if(t.Yc!==f)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let T=f.errors;if(0<T.length){let C=await Promise.all(T);if(C=C.filter(B=>B),0<C.length)throw Error(C.join(`
`))}return x}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(f,x,T,C)=>m.registerBuffer(f,x,T,C),t.jsepGetBuffer=f=>m.getBuffer(f),t.jsepCreateDownloader=(f,x,T)=>m.createDownloader(f,x,T),t.jsepOnCreateSession=f=>{m.onCreateSession(f)},t.jsepOnReleaseSession=f=>{m.onReleaseSession(f)},t.jsepOnRunStart=f=>m.onRunStart(f),t.Id=(f,x)=>{m.upload(f,x)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=f=>m.onRunStart(f),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=f=>{m.onReleaseSession(f)},t.webnnCreateMLTensorDownloader=(f,x)=>m.createMLTensorDownloader(f,x),t.webnnRegisterMLTensor=(f,x,T,C)=>m.registerMLTensor(f,x,T,C),t.webnnCreateMLContext=f=>m.createMLContext(f),t.webnnRegisterMLConstant=(f,x,T,C,B,G)=>m.registerMLConstant(f,x,T,C,B,t.Xc,G),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let n=()=>{let o=p=>(...m)=>{let f=it;return m=p(...m),it!=f?new Promise((x,T)=>{hi={resolve:x,reject:T}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),n=void 0};t.asyncInit=()=>{n==null||n()};var u,l,d=(o,p)=>{throw p},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(O(o))return new Promise((m,f)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):f(x.status)},x.onerror=f,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,y,_,w,S,v,$=console.log.bind(console),I=console.error.bind(console),k=$,E=I,A=!1,O=o=>o.startsWith("file://");function b(){mt.buffer!=U.buffer&&V()}if(a){let o=function(p){try{var m=p.data,f=m.Sc;if(f==="load"){let x=[];self.onmessage=T=>x.push(T),v=()=>{postMessage({Sc:"loaded"});for(let T of x)o(T);self.onmessage=o};for(let T of m.xd)t[T]&&!t[T].proxy||(t[T]=(...C)=>{postMessage({Sc:"callHandler",wd:T,args:C})},T=="print"&&(k=t[T]),T=="printErr"&&(E=t[T]));mt=m.Od,V(),y=m.Pd,Be(),Ar()}else if(f==="run"){(function(x){var T=(b(),W)[x+52>>>2>>>0];x=(b(),W)[x+56>>>2>>>0],ys(T,T-x),pe(T)})(m.Rc),_i(m.Rc,0,0,1,0,0),_n(),di(m.Rc),N||(ps(),N=!0);try{Ef(m.Md,m.bd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(f==="checkMailbox"?N&&Sr():f&&(E(`worker: received unknown command ${f}`),E(m)))}catch(x){throw cs(),x}};var N=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var U,F,X,Y,z,W,j,Q,ue,D,ae,P=!1;function V(){var o=mt.buffer;t.HEAP8=U=new Int8Array(o),X=new Int16Array(o),t.HEAPU8=F=new Uint8Array(o),Y=new Uint16Array(o),t.HEAP32=z=new Int32Array(o),t.HEAPU32=W=new Uint32Array(o),j=new Float32Array(o),Q=new Float64Array(o),ue=new BigInt64Array(o),D=new BigUint64Array(o)}function K(){P=!0,a?v():lt.sb()}function L(o){throw E(o="Aborted("+o+")"),A=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function de(){return{a:{ma:Qm,gb:Xm,g:zf,J:Cf,f:Af,o:Of,h:Rf,ha:Bf,b:Nf,T:Mf,Ha:Sn,n:Df,$:En,Xa:zn,Da:Cn,Fa:An,Ya:On,Va:Rn,Oa:Bn,Ua:Nn,ka:Mn,Ea:Dn,Ba:Pn,Wa:Un,Ca:qn,bb:Pf,ea:Uf,wa:qf,ua:Wf,da:Gf,O:Hf,H:jf,va:Ff,_:em,xa:tm,Ra:rm,za:am,Ia:nm,sa:sm,fa:om,Qa:di,_a:um,R:cm,r:ym,c:ui,hb:_m,y:bm,M:wm,D:$m,l:vm,s:Kn,ib:xm,I:Sm,S:km,j:Tm,u:Im,q:Em,k:zm,La:Cm,Ma:Am,Na:Om,Ja:Yn,Ka:Jn,ta:es,db:Bm,ab:Mm,v:Dm,aa:Pm,ga:Um,$a:Nm,W:qm,Za:Lm,Aa:Wm,F:Rm,U:Vm,la:zr,ya:Hm,fb:Gm,eb:jm,Sa:as,Ta:ns,Ga:Xt,V:ss,ja:os,Pa:us,ia:ls,kb:Rg,na:Eg,lb:Og,oa:Ig,G:_g,e:tg,t:Jm,w:Ym,B:pg,mb:Sg,K:mg,x:ag,pa:kg,Y:zg,ba:xg,nb:vg,ob:$g,P:cg,qa:wg,pb:bg,N:gg,Z:Tg,d:eg,A:ig,m:rg,jb:Bg,p:sg,z:og,C:ng,E:ug,L:hg,qb:yg,Q:Cg,ca:fg,X:Ag,rb:dg,ra:lg,i:Km,a:mt,cb:Le}}}async function Be(){function o(f,x){var T=lt=f.exports;f={};for(let[C,B]of Object.entries(T))typeof B=="function"?(T=lm(B),f[C]=T):f[C]=B;return lt=f,lt=function(){var C=lt,B=Z=>le=>Z(le)>>>0,G=Z=>()=>Z()>>>0;return(C=Object.assign({},C)).tb=B(C.tb),C.Xb=G(C.Xb),C.Zb=B(C.Zb),C.lc=B(C.lc),C.mc=G(C.mc),C.qc=B(C.qc),C}(),gn.push(lt._b),ds=(f=lt).tb,ps=f.ub,t._OrtInit=f.vb,t._OrtGetLastError=f.wb,t._OrtCreateSessionOptions=f.xb,t._OrtAppendExecutionProvider=f.yb,t._OrtAddFreeDimensionOverride=f.zb,t._OrtAddSessionConfigEntry=f.Ab,t._OrtReleaseSessionOptions=f.Bb,t._OrtCreateSession=f.Cb,t._OrtReleaseSession=f.Db,t._OrtGetInputOutputCount=f.Eb,t._OrtGetInputOutputMetadata=f.Fb,t._OrtFree=f.Gb,t._OrtCreateTensor=f.Hb,t._OrtGetTensorData=f.Ib,t._OrtReleaseTensor=f.Jb,t._OrtCreateRunOptions=f.Kb,t._OrtAddRunConfigEntry=f.Lb,t._OrtReleaseRunOptions=f.Mb,t._OrtCreateBinding=f.Nb,t._OrtBindInput=f.Ob,t._OrtBindOutput=f.Pb,t._OrtClearBoundOutputs=f.Qb,t._OrtReleaseBinding=f.Rb,t._OrtRunWithBinding=f.Sb,t._OrtRun=f.Tb,t._OrtEndProfiling=f.Ub,t._JsepOutput=f.Vb,t._JsepGetNodeName=f.Wb,Cr=f.Xb,at=t._free=f.Yb,Jt=t._malloc=f.Zb,_i=f.ac,cs=f.bc,hs=f.cc,fs=f.dc,bi=f.ec,ms=f.fc,gs=f.gc,he=f.hc,er=f.ic,ys=f.jc,pe=f.kc,wi=f.lc,ce=f.mc,_s=f.nc,$i=f.oc,bs=f.pc,ws=f.qc,$s=f.rc,vi=f.sc,vs=f.tc,xs=f.uc,Ss=f.vc,ks=f.wc,Ts=f.xc,Is=f.yc,Es=f.zc,zs=f.Ac,Cs=f.Bc,As=f.Cc,Os=f.Dc,Rs=f.Ec,Bs=f.Fc,Ns=f.Gc,Ms=f.Hc,Ds=f.Ic,Ps=f.Jc,Us=f.Kc,qs=f.Lc,Ls=f.Mc,Ws=f.Nc,Vs=f.Pc,Gs=f.Qc,Hs=f.$c,js=f.ad,Fs=f.fd,Ks=f.jd,Zs=f.kd,Xs=f.ld,Qs=f.md,Ys=f.nd,Js=f.od,eo=f.pd,to=f.qd,ro=f.vd,io=f.Td,ao=f.Ud,no=f.Vd,so=f.Wd,y=x,lt}var p,m=de();return t.instantiateWasm?new Promise(f=>{t.instantiateWasm(m,(x,T)=>{f(o(x,T))})}):a?o(new WebAssembly.Instance(y,de()),y):(ae??(ae=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),p=await async function(f){var x=ae;if(!g&&!O(x))try{var T=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,f)}catch(C){E(`wasm streaming compile failed: ${C}`),E("falling back to ArrayBuffer instantiation")}return async function(C,B){try{var G=await async function(Z){if(!g)try{var le=await u(Z);return new Uint8Array(le)}catch{}if(Z==ae&&g)Z=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";Z=l(Z)}return Z}(C);return await WebAssembly.instantiate(G,B)}catch(Z){E(`failed to asynchronously prepare wasm: ${Z}`),L(Z)}}(x,f)}(m),o(p.instance,p.module))}class ke{constructor(p){lo(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Me=o=>{o.terminate(),o.onmessage=()=>{}},De=[],qe=0,Pe=null,ht=o=>{ft.length==0&&(wn(),bn(ft[0]));var p=ft.pop();if(!p)return 6;Qt.push(p),St[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},ve=0,ne=(o,p,...m)=>{var f,x=16*m.length,T=ce(),C=wi(x),B=C>>>3;for(f of m)typeof f=="bigint"?((b(),ue)[B++>>>0]=1n,(b(),ue)[B++>>>0]=f):((b(),ue)[B++>>>0]=0n,(b(),Q)[B++>>>0]=f);return o=hs(o,0,x,C,p),pe(T),o};function Le(o){if(a)return ne(0,1,o);if(_=o,!(0<ve)){for(var p of Qt)Me(p);for(p of ft)Me(p);ft=[],Qt=[],St={},A=!0}d(0,new ke(o))}function br(o){if(a)return ne(1,0,o);Xt(o)}var Xt=o=>{if(_=o,a)throw br(o),"unwind";Le(o)},ft=[],Qt=[],gn=[],St={},yn=o=>{var p=o.Rc;delete St[p],ft.push(o),Qt.splice(Qt.indexOf(o),1),o.Rc=0,fs(p)};function _n(){gn.forEach(o=>o())}var bn=o=>new Promise(p=>{o.onmessage=x=>{var T=x.data;if(x=T.Sc,T.Zc&&T.Zc!=Cr()){var C=St[T.Zc];C?C.postMessage(T,T.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${T.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?Sr():x==="spawnThread"?ht(T):x==="cleanupThread"?xr(()=>{yn(St[T.Nd])}):x==="loaded"?(o.loaded=!0,p(o)):T.target==="setimmediate"?o.postMessage(T):x==="uncaughtException"?o.onerror(T.error):x==="callHandler"?t[T.wd](...T.args):x&&E(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,f=[];for(m of[])t.propertyIsEnumerable(m)&&f.push(m);o.postMessage({Sc:"load",xd:f,Od:mt,Pd:y})});function wn(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ft.push(o)}var mt,Ef=(o,p)=>{ve=0,o=vi(o,p),0<ve?_=o:bi(o)},wr=[],$r=0;function zf(o){var p=new ai(o>>>=0);return(b(),U)[p.Tc+12>>>0]==0&&($n(p,!0),$r--),vn(p,!1),wr.push(p),ws(o)}var Wt=0,Cf=()=>{he(0,0);var o=wr.pop();_s(o.cd),Wt=0};function $n(o,p){p=p?1:0,(b(),U)[o.Tc+12>>>0]=p}function vn(o,p){p=p?1:0,(b(),U)[o.Tc+13>>>0]=p}class ai{constructor(p){this.cd=p,this.Tc=p-24}}var ni=o=>{var p=Wt;if(!p)return er(0),0;var m=new ai(p);(b(),W)[m.Tc+16>>>2>>>0]=p;var f=(b(),W)[m.Tc+4>>>2>>>0];if(!f)return er(0),p;for(var x of o){if(x===0||x===f)break;if(bs(x,f,m.Tc+16))return er(x),p}return er(f),p};function Af(){return ni([])}function Of(o){return ni([o>>>0])}function Rf(o,p,m,f){return ni([o>>>0,p>>>0,m>>>0,f>>>0])}var Bf=()=>{var o=wr.pop();o||L("no exception to throw");var p=o.cd;throw(b(),U)[o.Tc+13>>>0]==0&&(wr.push(o),vn(o,!0),$n(o,!1),$r++),$i(p),Wt=p};function Nf(o,p,m){var f=new ai(o>>>=0);throw p>>>=0,m>>>=0,(b(),W)[f.Tc+16>>>2>>>0]=0,(b(),W)[f.Tc+4>>>2>>>0]=p,(b(),W)[f.Tc+8>>>2>>>0]=m,$i(o),$r++,Wt=o}var Mf=()=>$r;function xn(o,p,m,f){return a?ne(2,1,o,p,m,f):Sn(o,p,m,f)}function Sn(o,p,m,f){if(o>>>=0,p>>>=0,m>>>=0,f>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return a&&x.length===0?xn(o,p,m,f):(o={Ld:m,Rc:o,bd:f,rd:x},a?(o.Sc="spawnThread",postMessage(o,x),0):ht(o))}function Df(o){throw Wt||(Wt=o>>>0),Wt}var kn=globalThis.TextDecoder&&new TextDecoder,Tn=(o,p,m,f)=>{if(m=p+m,f)return m;for(;o[p]&&!(p>=m);)++p;return p},In=(o,p=0,m,f)=>{if(16<(m=Tn(o,p>>>=0,m,f))-p&&o.buffer&&kn)return kn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(f="";p<m;){var x=o[p++];if(128&x){var T=63&o[p++];if((224&x)==192)f+=String.fromCharCode((31&x)<<6|T);else{var C=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|T<<6|C:(7&x)<<18|T<<12|C<<6|63&o[p++])?f+=String.fromCharCode(x):(x-=65536,f+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else f+=String.fromCharCode(x)}return f},Ie=(o,p,m)=>(o>>>=0)?In((b(),F),o,p,m):"";function En(o,p,m){return a?ne(3,1,o,p,m):0}function zn(o,p){if(a)return ne(4,1,o,p)}function Cn(o,p){if(a)return ne(5,1,o,p)}function An(o,p,m){if(a)return ne(6,1,o,p,m)}function On(o,p,m){return a?ne(7,1,o,p,m):0}function Rn(o,p){if(a)return ne(8,1,o,p)}function Bn(o,p,m){if(a)return ne(9,1,o,p,m)}function Nn(o,p,m,f){if(a)return ne(10,1,o,p,m,f)}function Mn(o,p,m,f){if(a)return ne(11,1,o,p,m,f)}function Dn(o,p,m,f){if(a)return ne(12,1,o,p,m,f)}function Pn(o){if(a)return ne(13,1,o)}function Un(o,p){if(a)return ne(14,1,o,p)}function qn(o,p,m){if(a)return ne(15,1,o,p,m)}var Pf=()=>L(""),rt=o=>{o>>>=0;for(var p="";;){var m=(b(),F)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},si={},oi={},Vt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ut(o,p,m={}){return function(f,x,T={}){var C=x.name;if(!f)throw new Vt(`type "${C}" must have a positive integer typeid pointer`);if(oi.hasOwnProperty(f)){if(T.yd)return;throw new Vt(`Cannot register type '${C}' twice`)}oi[f]=x,si.hasOwnProperty(f)&&(x=si[f],delete si[f],x.forEach(B=>B()))}(o,p,m)}var Ln=(o,p,m)=>{switch(p){case 1:return m?f=>(b(),U)[f>>>0]:f=>(b(),F)[f>>>0];case 2:return m?f=>(b(),X)[f>>>1>>>0]:f=>(b(),Y)[f>>>1>>>0];case 4:return m?f=>(b(),z)[f>>>2>>>0]:f=>(b(),W)[f>>>2>>>0];case 8:return m?f=>(b(),ue)[f>>>3>>>0]:f=>(b(),D)[f>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function Uf(o,p,m,f,x){o>>>=0,m>>>=0,p=rt(p>>>0);let T=C=>C;if(f=f===0n){let C=8*m;T=B=>BigInt.asUintN(C,B),x=T(x)}ut(o,{name:p,Oc:T,Vc:(C,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:Ln(p,m,!f),Wc:null})}function qf(o,p,m,f){ut(o>>>=0,{name:p=rt(p>>>0),Oc:function(x){return!!x},Vc:function(x,T){return T?m:f},Uc:function(x){return this.Oc((b(),F)[x>>>0])},Wc:null})}var Wn=[],kt=[0,1,,1,null,1,!0,1,!1,1];function ui(o){9<(o>>>=0)&&--kt[o+1]===0&&(kt[o]=void 0,Wn.push(o))}var He=o=>{if(!o)throw new Vt(`Cannot use deleted val. handle = ${o}`);return kt[o]},Fe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Wn.pop()||kt.length;return kt[p]=o,kt[p+1]=1,p}};function li(o){return this.Oc((b(),W)[o>>>2>>>0])}var Lf={name:"emscripten::val",Oc:o=>{var p=He(o);return ui(o),p},Vc:(o,p)=>Fe(p),Uc:li,Wc:null};function Wf(o){return ut(o>>>0,Lf)}var Vf=(o,p)=>{switch(p){case 4:return function(m){return this.Oc((b(),j)[m>>>2>>>0])};case 8:return function(m){return this.Oc((b(),Q)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Gf(o,p,m){m>>>=0,ut(o>>>=0,{name:p=rt(p>>>0),Oc:f=>f,Vc:(f,x)=>x,Uc:Vf(p,m),Wc:null})}function Hf(o,p,m,f,x){o>>>=0,m>>>=0,p=rt(p>>>0);let T=B=>B;if(f===0){var C=32-8*m;T=B=>B<<C>>>C,x=T(x)}ut(o,{name:p,Oc:T,Vc:(B,G)=>G,Uc:Ln(p,m,f!==0),Wc:null})}function jf(o,p,m){function f(T){var C=(b(),W)[T>>>2>>>0];return T=(b(),W)[T+4>>>2>>>0],new x((b(),U).buffer,T,C)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ut(o>>>=0,{name:m=rt(m>>>0),Oc:f,Uc:f},{yd:!0})}var gt=(o,p,m)=>{var f=(b(),F);if(p>>>=0,0<m){var x=p;m=p+m-1;for(var T=0;T<o.length;++T){var C=o.codePointAt(T);if(127>=C){if(p>=m)break;f[p++>>>0]=C}else if(2047>=C){if(p+1>=m)break;f[p++>>>0]=192|C>>6,f[p++>>>0]=128|63&C}else if(65535>=C){if(p+2>=m)break;f[p++>>>0]=224|C>>12,f[p++>>>0]=128|C>>6&63,f[p++>>>0]=128|63&C}else{if(p+3>=m)break;f[p++>>>0]=240|C>>18,f[p++>>>0]=128|C>>12&63,f[p++>>>0]=128|C>>6&63,f[p++>>>0]=128|63&C,T++}}f[p>>>0]=0,o=p-x}else o=0;return o},vr=o=>{for(var p=0,m=0;m<o.length;++m){var f=o.charCodeAt(m);127>=f?p++:2047>=f?p+=2:55296<=f&&57343>=f?(p+=4,++m):p+=3}return p};function Ff(o,p){ut(o>>>=0,{name:p=rt(p>>>0),Oc(m){var f=(b(),W)[m>>>2>>>0];return f=Ie(m+4,f,!0),at(m),f},Vc(m,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var x=typeof f=="string";if(!(x||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1))throw new Vt("Cannot pass non-string to std::string");var T=x?vr(f):f.length,C=Jt(4+T+1),B=C+4;return(b(),W)[C>>>2>>>0]=T,x?gt(f,B,T+1):(b(),F).set(f,B>>>0),m!==null&&m.push(at,C),C},Uc:li,Wc(m){at(m)}})}var Vn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Kf=(o,p,m)=>{if(o>>>=1,16<(p=Tn((b(),Y),o,p/2,m))-o&&Vn)return Vn.decode((b(),Y).slice(o,p));for(m="";o<p;++o){var f=(b(),Y)[o>>>0];m+=String.fromCharCode(f)}return m},Zf=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var f=p;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var T=o.charCodeAt(x);(b(),X)[p>>>1>>>0]=T,p+=2}return(b(),X)[p>>>1>>>0]=0,p-f},Xf=o=>2*o.length,Qf=(o,p,m)=>{var f="";o>>>=2;for(var x=0;!(x>=p/4);x++){var T=(b(),W)[o+x>>>0];if(!T&&!m)break;f+=String.fromCodePoint(T)}return f},Yf=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var f=p;m=f+m-4;for(var x=0;x<o.length;++x){var T=o.codePointAt(x);if(65535<T&&x++,(b(),z)[p>>>2>>>0]=T,(p+=4)+4>m)break}return(b(),z)[p>>>2>>>0]=0,p-f},Jf=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function em(o,p,m){if(o>>>=0,p>>>=0,m=rt(m>>>=0),p===2)var f=Kf,x=Zf,T=Xf;else f=Qf,x=Yf,T=Jf;ut(o,{name:m,Oc:C=>{var B=(b(),W)[C>>>2>>>0];return B=f(C+4,B*p,!0),at(C),B},Vc:(C,B)=>{if(typeof B!="string")throw new Vt(`Cannot pass non-string to C++ string type ${m}`);var G=T(B),Z=Jt(4+G+p);return(b(),W)[Z>>>2>>>0]=G/p,x(B,Z+4,G+p),C!==null&&C.push(at,Z),Z},Uc:li,Wc(C){at(C)}})}function tm(o,p){ut(o>>>=0,{zd:!0,name:p=rt(p>>>0),Oc:()=>{},Vc:()=>{}})}function rm(o){_i(o>>>0,!i,1,!r,131072,!1),_n()}var xr=o=>{if(!A)try{if(o(),!(0<ve))try{a?Cr()&&bi(_):Xt(_)}catch(p){p instanceof ke||p=="unwind"||d(0,p)}}catch(p){p instanceof ke||p=="unwind"||d(0,p)}},im=!Atomics.waitAsync||((uo=globalThis.navigator)==null?void 0:uo.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function di(o){o>>>=0,im||(Atomics.waitAsync((b(),z),o>>>2,o).value.then(Sr),o+=128,Atomics.store((b(),z),o>>>2,1))}var Sr=()=>xr(()=>{var o=Cr();o&&(di(o),gs())});function am(o,p){(o>>>=0)==p>>>0?setTimeout(Sr):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=St[o])&&o.postMessage({Sc:"checkMailbox"})}var pi=[];function nm(o,p,m,f,x){for(p>>>=0,x>>>=0,pi.length=0,m=x>>>3,f=x+f>>>3;m<f;){var T;T=(b(),ue)[m++>>>0]?(b(),ue)[m++>>>0]:(b(),Q)[m++>>>0],pi.push(T)}return(p?xi[p]:Zm[o])(...pi)}var sm=()=>{ve=0};function om(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):yn(St[o])}function um(o){}var kr=o=>{try{o()}catch(p){L(p)}};function lm(o){var p=(...m)=>{Tr.push(o);try{return o(...m)}finally{A||(Tr.pop(),it&&yt===1&&Tr.length===0&&(yt=0,ve+=1,kr(ao),typeof Fibers<"u"&&Fibers.Zd()))}};return jn.set(o,p),p}var yt=0,it=null,Gn=0,Tr=[],ci=new Map,Hn=new Map,jn=new Map,dm=0,hi=null,pm=[],Fn=o=>function(p){if(!A){if(yt===0){var m=!1,f=!1;p((x=0)=>{if(!A&&(Gn=x,m=!0,f)){yt=2,kr(()=>no(it)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var T=function(){var G=(b(),z)[it+8>>>2>>>0];return G=Hn.get(G),G=jn.get(G),--ve,G()}()}catch(G){T=G,x=!0}var C=!1;if(!it){var B=hi;B&&(hi=null,(x?B.reject:B.resolve)(T),C=!0)}if(x&&!C)throw T}}),f=!0,m||(yt=1,it=function(){var x=Jt(65548),T=x+12;if((b(),W)[x>>>2>>>0]=T,(b(),W)[x+4>>>2>>>0]=T+65536,T=Tr[0],!ci.has(T)){var C=dm++;ci.set(T,C),Hn.set(C,T)}return T=ci.get(T),(b(),z)[x+8>>>2>>>0]=T,x}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),kr(()=>io(it)))}else yt===2?(yt=0,kr(so),at(it),it=null,pm.forEach(xr)):L(`invalid state: ${yt}`);return Gn}}(p=>{o().then(p)});function cm(o){return o>>>=0,Fn(async()=>{var p=await He(o);return Fe(p)})}var fi=[],hm=o=>{var p=fi.length;return fi.push(o),p},fm=(o,p)=>{for(var m=Array(o),f=0;f<o;++f){var x=f,T=(b(),W)[p+4*f>>>2>>>0],C=oi[T];if(C===void 0)throw o=`parameter ${f}`,T=ds(T),p=rt(T),at(T),new Vt(`${o} has unknown type ${p}`);m[x]=C}return m},mm=(o,p,m)=>{var f=[];return o=o(f,m),f.length&&((b(),W)[p>>>2>>>0]=Fe(f)),o},gm={},Ir=o=>{var p=gm[o];return p===void 0?rt(o):p};function ym(o,p,m){var[f,...x]=fm(o,p>>>0);p=f.Vc.bind(f);var T=x.map(G=>G.Uc.bind(G));o--;var C={toValue:He};switch(o=T.map((G,Z)=>{var le=`argFromPtr${Z}`;return C[le]=G,`${le}(args${Z?"+"+8*Z:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:C.getStringOrSymbol=Ir,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,f.zd||(C.toReturnWire=p,C.emval_returnValue=mm,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(C),B)(...Object.values(C)),B=`methodCaller<(${x.map(G=>G.name)}) => ${f.name}>`,hm(Object.defineProperty(m,"name",{value:B}))}function _m(o,p){return p>>>=0,(o=He(o>>>0))==He(p)}function bm(o){return(o>>>=0)?(o=Ir(o),Fe(globalThis[o])):Fe(globalThis)}function wm(o){return o=Ir(o>>>0),Fe(t[o])}function $m(o,p){return p>>>=0,o=He(o>>>0),p=He(p),Fe(o[p])}function vm(o){9<(o>>>=0)&&(kt[o+1]+=1)}function Kn(o,p,m,f,x){return fi[o>>>0](p>>>0,m>>>0,f>>>0,x>>>0)}function xm(o,p,m,f,x){return Kn(o>>>0,p>>>0,m>>>0,f>>>0,x>>>0)}function Sm(){return Fe([])}function km(o){o=He(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Fe(p)}function Tm(o){return Fe(Ir(o>>>0))}function Im(){return Fe({})}function Em(o){for(var p=He(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ui(o)}function zm(o,p,m){p>>>=0,m>>>=0,o=He(o>>>0),p=He(p),m=He(m),o[p]=m}function Cm(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(b(),z)[p>>>2>>>0]=o.getUTCSeconds(),(b(),z)[p+4>>>2>>>0]=o.getUTCMinutes(),(b(),z)[p+8>>>2>>>0]=o.getUTCHours(),(b(),z)[p+12>>>2>>>0]=o.getUTCDate(),(b(),z)[p+16>>>2>>>0]=o.getUTCMonth(),(b(),z)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,(b(),z)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(b(),z)[p+28>>>2>>>0]=o}var Zn=o=>o%4==0&&(o%100!=0||o%400==0),Xn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function Am(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),(b(),z)[p>>>2>>>0]=o.getSeconds(),(b(),z)[p+4>>>2>>>0]=o.getMinutes(),(b(),z)[p+8>>>2>>>0]=o.getHours(),(b(),z)[p+12>>>2>>>0]=o.getDate(),(b(),z)[p+16>>>2>>>0]=o.getMonth(),(b(),z)[p+20>>>2>>>0]=o.getFullYear()-1900,(b(),z)[p+24>>>2>>>0]=o.getDay();var m=(Zn(o.getFullYear())?Xn:Qn)[o.getMonth()]+o.getDate()-1|0;(b(),z)[p+28>>>2>>>0]=m,(b(),z)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var f=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=f&&o.getTimezoneOffset()==Math.min(f,m)),(b(),z)[p+32>>>2>>>0]=o}function Om(o){o>>>=0;var p=new Date((b(),z)[o+20>>>2>>>0]+1900,(b(),z)[o+16>>>2>>>0],(b(),z)[o+12>>>2>>>0],(b(),z)[o+8>>>2>>>0],(b(),z)[o+4>>>2>>>0],(b(),z)[o>>>2>>>0],0),m=(b(),z)[o+32>>>2>>>0],f=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),T=new Date(p.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(T,x);return 0>m?(b(),z)[o+32>>>2>>>0]=+(x!=T&&C==f):0<m!=(C==f)&&(x=Math.max(T,x),p.setTime(p.getTime()+6e4*((0<m?C:x)-f))),(b(),z)[o+24>>>2>>>0]=p.getDay(),m=(Zn(p.getFullYear())?Xn:Qn)[p.getMonth()]+p.getDate()-1|0,(b(),z)[o+28>>>2>>>0]=m,(b(),z)[o>>>2>>>0]=p.getSeconds(),(b(),z)[o+4>>>2>>>0]=p.getMinutes(),(b(),z)[o+8>>>2>>>0]=p.getHours(),(b(),z)[o+12>>>2>>>0]=p.getDate(),(b(),z)[o+16>>>2>>>0]=p.getMonth(),(b(),z)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Yn(o,p,m,f,x,T,C){return a?ne(16,1,o,p,m,f,x,T,C):-52}function Jn(o,p,m,f,x,T){if(a)return ne(17,1,o,p,m,f,x,T)}var Yt={},Rm=()=>performance.timeOrigin+performance.now();function es(o,p){if(a)return ne(18,1,o,p);if(Yt[o]&&(clearTimeout(Yt[o].id),delete Yt[o]),!p)return 0;var m=setTimeout(()=>{delete Yt[o],xr(()=>ms(o,performance.timeOrigin+performance.now()))},p);return Yt[o]={id:m,Yd:p},0}function Bm(o,p,m,f){o>>>=0,p>>>=0,m>>>=0,f>>>=0;var x=new Date().getFullYear(),T=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var C=Math.max(T,x);(b(),W)[o>>>2>>>0]=60*C,(b(),z)[p>>>2>>>0]=+(T!=x),o=(p=B=>{var G=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(T),p=p(x),x<T?(gt(o,m,17),gt(p,f,17)):(gt(o,f,17),gt(p,m,17))}var Nm=()=>Date.now();function Mm(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(b(),ue)[m>>>3>>>0]=BigInt(o),0):28}var mi=[],ts=(o,p)=>{mi.length=0;for(var m;m=(b(),F)[o++>>>0];){var f=m!=105;p+=(f&=m!=112)&&p%8?4:0,mi.push(m==112?(b(),W)[p>>>2>>>0]:m==106?(b(),ue)[p>>>3>>>0]:m==105?(b(),z)[p>>>2>>>0]:(b(),Q)[p>>>3>>>0]),p+=f?8:4}return mi};function Dm(o,p,m){return o>>>=0,p=ts(p>>>0,m>>>0),xi[o](...p)}function Pm(o,p,m){return o>>>=0,p=ts(p>>>0,m>>>0),xi[o](...p)}var Um=()=>{};function qm(o,p){return E(Ie(o>>>0,p>>>0))}var Lm=()=>{throw ve+=1,"unwind"};function Wm(){return 4294901760}var Vm=()=>navigator.hardwareConcurrency,Tt={},Er=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},rs=o=>{for(var p of o)(o=Er(p))&&(Tt[o]=p)};function Gm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),rs(o),Tt.gd=Er(o[3]),Tt.Jd=o,Tt.gd}function zr(o){if(!(o=Tt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}at(zr.hd??0),p=vr(o)+1;var m=Jt(p);return m&&gt(o,m,p),zr.hd=m,zr.hd}function Hm(o){o>>>=0;var p=(b(),F).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var f=p*(1+.2/m);f=Math.min(f,o+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(o,f)/65536))-mt.buffer.byteLength+65535)/65536|0;try{mt.grow(f),V();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function jm(o,p,m){if(o>>>=0,p>>>=0,Tt.gd==o)var f=Tt.Jd;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),rs(f);for(var x=3;f[x]&&Er(f[x])!=o;)++x;for(o=0;o<m&&f[o+x];++o)(b(),z)[p+4*o>>>2>>>0]=Er(f[o+x]);return o}var gi,yi={},is=()=>{var f;if(!gi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((f=globalThis.navigator)==null?void 0:f.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in yi)yi[o]===void 0?delete p[o]:p[o]=yi[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);gi=m}return gi};function as(o,p){if(a)return ne(19,1,o,p);o>>>=0,p>>>=0;var m,f=0,x=0;for(m of is()){var T=p+f;(b(),W)[o+x>>>2>>>0]=T,f+=gt(m,T,1/0)+1,x+=4}return 0}function ns(o,p){if(a)return ne(20,1,o,p);o>>>=0,p>>>=0;var m=is();for(var f of((b(),W)[o>>>2>>>0]=m.length,o=0,m))o+=vr(f)+1;return(b(),W)[p>>>2>>>0]=o,0}function ss(o){return a?ne(21,1,o):52}function os(o,p,m,f){return a?ne(22,1,o,p,m,f):52}function us(o,p,m,f){return a?ne(23,1,o,p,m,f):70}var Fm=[null,[],[]];function ls(o,p,m,f){if(a)return ne(24,1,o,p,m,f);p>>>=0,m>>>=0,f>>>=0;for(var x=0,T=0;T<m;T++){var C=(b(),W)[p>>>2>>>0],B=(b(),W)[p+4>>>2>>>0];p+=8;for(var G=0;G<B;G++){var Z=o,le=(b(),F)[C+G>>>0],me=Fm[Z];le===0||le===10?((Z===1?k:E)(In(me)),me.length=0):me.push(le)}x+=B}return(b(),W)[f>>>2>>>0]=x,0}function Km(o){return o>>>0}a||function(){for(var o=t.numThreads-1;o--;)wn();De.push(async()=>{var p=async function(){if(!a)return Promise.all(ft.map(bn))}();qe++,await p,--qe==0&&Pe&&(p=Pe,Pe=null,p())})}(),a||(mt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),V()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ce(),t.stackRestore=o=>pe(o),t.stackAlloc=o=>wi(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(b(),U)[o>>>0]=p;break;case"i16":(b(),X)[o>>>1>>>0]=p;break;case"i32":(b(),z)[o>>>2>>>0]=p;break;case"i64":(b(),ue)[o>>>3>>>0]=BigInt(p);break;case"float":(b(),j)[o>>>2>>>0]=p;break;case"double":(b(),Q)[o>>>3>>>0]=p;break;case"*":(b(),W)[o>>>2>>>0]=p;break;default:L(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return(b(),U)[o>>>0];case"i16":return(b(),X)[o>>>1>>>0];case"i32":return(b(),z)[o>>>2>>>0];case"i64":return(b(),ue)[o>>>3>>>0];case"float":return(b(),j)[o>>>2>>>0];case"double":return(b(),Q)[o>>>3>>>0];case"*":return(b(),W)[o>>>2>>>0];default:L(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Ie,t.stringToUTF8=gt,t.lengthBytesUTF8=vr;var ds,ps,Cr,at,Jt,_i,cs,hs,fs,bi,ms,gs,he,er,ys,pe,wi,ce,_s,$i,bs,ws,$s,vi,vs,xs,Ss,ks,Ts,Is,Es,zs,Cs,As,Os,Rs,Bs,Ns,Ms,Ds,Ps,Us,qs,Ls,Ws,Vs,Gs,Hs,js,Fs,Ks,Zs,Xs,Qs,Ys,Js,eo,to,ro,io,ao,no,so,lt,Zm=[Le,br,xn,En,zn,Cn,An,On,Rn,Bn,Nn,Mn,Dn,Pn,Un,qn,Yn,Jn,es,as,ns,ss,os,us,ls],xi={1003524:(o,p,m,f,x)=>{if(t===void 0||!t.Xc)return 1;if((o=Ie(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),f=Number(f>>>0),p+m>o.byteLength)return 3;try{let T=o.subarray(p,p+m);switch(x){case 0:(b(),F).set(T,f>>>0);break;case 1:t.Qd?t.Qd(f,T):t.Id(f,T);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,(b(),F).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,f,x)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007283:(o,p,m,f,x)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007457:(o,p,m,f,x)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007631:(o,p,m,f,x)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007806:(o,p,m,f,x)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1007980:(o,p,m,f,x)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008153:(o,p,m,f,x)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008326:(o,p,m,f,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008503:(o,p,m,f,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008683:(o,p,m,f,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from((b(),z).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ie(m),format:f?"NHWC":"NCHW"})},1009173:(o,p,m,f)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ie(m),format:f?"NHWC":"NCHW"})},1009306:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe,_t)=>{t.$b("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[T,C],strides:[B],wIsConst:()=>!!(b(),U)[Z>>>0],outputPadding:le?Array.from((b(),z).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from((b(),z).subarray(Number(be)>>>0,Number(xe)>>>0)):[],activation:Ie(_t)})},1009739:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((b(),z).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((b(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((b(),z).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((b(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!(b(),U)[G>>>0],outputPadding:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:Ie(xe)})},1010400:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe,_t)=>{t.$b("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:p,dilations:[m],group:f,kernelShape:[x],pads:[T,C],strides:[B],wIsConst:()=>!!(b(),U)[Z>>>0],outputPadding:le?Array.from((b(),z).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from((b(),z).subarray(Number(be)>>>0,Number(xe)>>>0)):[],activation:Ie(_t)})},1010833:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from((b(),z).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:f,kernelShape:Array.from((b(),z).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from((b(),z).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((b(),z).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!(b(),U)[G>>>0],outputPadding:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:Ie(xe)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("AveragePool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from((b(),z).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],strides:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("AveragePool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from((b(),z).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],strides:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("MaxPool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from((b(),z).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],strides:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe)=>{t.$b("MaxPool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:f,storage_order:x,dilations:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from((b(),z).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],strides:me?Array.from((b(),z).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1013758:(o,p,m,f,x)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:f,transB:x})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,f)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014024:(o,p,m,f)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:f})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,f,x)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,f,x,T,C,B,G,Z,le)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from((b(),z).subarray(Number(m)>>>0,Number(f)>>>0)):[],coordinateTransformMode:Ie(x),cubicCoeffA:T,excludeOutside:C,extrapolationValue:B,keepAspectRatioPolicy:Ie(G),mode:Ie(Z),nearestMode:Ie(le)})},1015056:(o,p,m,f,x,T,C)=>{t.$b("Slice",o,{starts:p?Array.from((b(),z).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[],axes:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:Ie(p)})},1015734:(o,p,m,f,x)=>{t.$b("Pad",o,{mode:p,value:m,pads:f?Array.from((b(),z).subarray(Number(f)>>>0,Number(x)>>>0)):[]})},1015877:(o,p,m,f,x,T)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:T?"NHWC":"NCHW"})},1016046:(o,p,m,f,x,T)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!f,format:T?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Ie(m),padding_mode:Ie(f),format:x?"NHWC":"NCHW"})},1016572:(o,p,m,f,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Ie(m),padding_mode:Ie(f),format:x?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:Ie(p)})},1016827:(o,p,m,f,x,T,C,B,G)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:T,qkvHiddenSizes:C?Array.from((b(),z).subarray(Number(B)>>>0,Number(B)+C>>>0)):[],pastPresentShareBuffer:!!G})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe,_t,Si)=>{t.$b("Conv",o,{format:me?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from((b(),z).subarray(Number(m)>>>0,Number(f)>>>0)):[],group:x,kernel_shape:T?Array.from((b(),z).subarray(Number(T)>>>0,Number(C)>>>0)):[],pads:B?Array.from((b(),z).subarray(Number(B)>>>0,Number(G)>>>0)):[],strides:Z?Array.from((b(),z).subarray(Number(Z)>>>0,Number(le)>>>0)):[],w_is_const:()=>!!(b(),U)[Number(be)>>>0],activation:Ie(xe),activation_params:_t?Array.from((b(),j).subarray(Number(_t)>>>0,Number(Si)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,f,x,T,C,B,G)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:f,softcap:x,doRotary:T,rotaryInterleaved:C,smoothSoftmax:B,localWindowSize:G})},1018124:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018235:(o,p,m,f)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!f})},1018346:(o,p,m,f,x,T)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:f,bits:x,blockSize:T})},1018473:(o,p,m,f,x,T)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:f,scale:x,doRotary:T})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,f,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:f,scale:x})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,f)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:f})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function Xm(o,p,m){return Fn(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function Qm(){return typeof wasmOffsetConverter<"u"}function Ym(o,p,m,f){var x=ce();try{return zs(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function Jm(o,p,m){var f=ce();try{return ks(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;he(1,0)}}function eg(o){var p=ce();try{vs(o)}catch(m){if(pe(p),m!==m+0)throw m;he(1,0)}}function tg(o,p){var m=ce();try{return vi(o,p)}catch(f){if(pe(m),f!==f+0)throw f;he(1,0)}}function rg(o,p,m){var f=ce();try{$s(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;he(1,0)}}function ig(o,p){var m=ce();try{Cs(o,p)}catch(f){if(pe(m),f!==f+0)throw f;he(1,0)}}function ag(o,p,m,f,x,T,C){var B=ce();try{return Is(o,p,m,f,x,T,C)}catch(G){if(pe(B),G!==G+0)throw G;he(1,0)}}function ng(o,p,m,f,x,T){var C=ce();try{xs(o,p,m,f,x,T)}catch(B){if(pe(C),B!==B+0)throw B;he(1,0)}}function sg(o,p,m,f){var x=ce();try{Es(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function og(o,p,m,f,x){var T=ce();try{Ss(o,p,m,f,x)}catch(C){if(pe(T),C!==C+0)throw C;he(1,0)}}function ug(o,p,m,f,x,T,C){var B=ce();try{Os(o,p,m,f,x,T,C)}catch(G){if(pe(B),G!==G+0)throw G;he(1,0)}}function lg(o,p,m,f,x,T,C){var B=ce();try{Rs(o,p,m,f,x,T,C)}catch(G){if(pe(B),G!==G+0)throw G;he(1,0)}}function dg(o,p,m,f,x,T,C,B){var G=ce();try{Ds(o,p,m,f,x,T,C,B)}catch(Z){if(pe(G),Z!==Z+0)throw Z;he(1,0)}}function pg(o,p,m,f,x){var T=ce();try{return As(o,p,m,f,x)}catch(C){if(pe(T),C!==C+0)throw C;he(1,0)}}function cg(o,p,m){var f=ce();try{return Ps(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;he(1,0)}}function hg(o,p,m,f,x,T,C,B){var G=ce();try{Us(o,p,m,f,x,T,C,B)}catch(Z){if(pe(G),Z!==Z+0)throw Z;he(1,0)}}function fg(o,p,m,f,x,T,C,B,G,Z,le,me){var be=ce();try{Bs(o,p,m,f,x,T,C,B,G,Z,le,me)}catch(xe){if(pe(be),xe!==xe+0)throw xe;he(1,0)}}function mg(o,p,m,f,x,T){var C=ce();try{return Ns(o,p,m,f,x,T)}catch(B){if(pe(C),B!==B+0)throw B;he(1,0)}}function gg(o,p,m){var f=ce();try{return qs(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;return he(1,0),0n}}function yg(o,p,m,f,x,T,C,B,G){var Z=ce();try{Ts(o,p,m,f,x,T,C,B,G)}catch(le){if(pe(Z),le!==le+0)throw le;he(1,0)}}function _g(o){var p=ce();try{return Ls(o)}catch(m){if(pe(p),m!==m+0)throw m;he(1,0)}}function bg(o,p){var m=ce();try{return ro(o,p)}catch(f){if(pe(m),f!==f+0)throw f;return he(1,0),0n}}function wg(o){var p=ce();try{return Ws(o)}catch(m){if(pe(p),m!==m+0)throw m;return he(1,0),0n}}function $g(o,p,m,f){var x=ce();try{return Ks(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function vg(o,p,m,f,x){var T=ce();try{return Zs(o,p,m,f,x)}catch(C){if(pe(T),C!==C+0)throw C;he(1,0)}}function xg(o,p,m,f,x,T){var C=ce();try{return Xs(o,p,m,f,x,T)}catch(B){if(pe(C),B!==B+0)throw B;he(1,0)}}function Sg(o,p,m,f,x,T){var C=ce();try{return Qs(o,p,m,f,x,T)}catch(B){if(pe(C),B!==B+0)throw B;he(1,0)}}function kg(o,p,m,f,x,T,C,B){var G=ce();try{return Ms(o,p,m,f,x,T,C,B)}catch(Z){if(pe(G),Z!==Z+0)throw Z;he(1,0)}}function Tg(o,p,m,f,x){var T=ce();try{return Ys(o,p,m,f,x)}catch(C){if(pe(T),C!==C+0)throw C;return he(1,0),0n}}function Ig(o,p,m,f){var x=ce();try{return Js(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function Eg(o,p,m,f){var x=ce();try{return eo(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function zg(o,p,m,f,x,T,C,B,G,Z,le,me){var be=ce();try{return to(o,p,m,f,x,T,C,B,G,Z,le,me)}catch(xe){if(pe(be),xe!==xe+0)throw xe;he(1,0)}}function Cg(o,p,m,f,x,T,C,B,G,Z,le){var me=ce();try{js(o,p,m,f,x,T,C,B,G,Z,le)}catch(be){if(pe(me),be!==be+0)throw be;he(1,0)}}function Ag(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe,_t,Si){var Ng=ce();try{Fs(o,p,m,f,x,T,C,B,G,Z,le,me,be,xe,_t,Si)}catch(ki){if(pe(Ng),ki!==ki+0)throw ki;he(1,0)}}function Og(o,p,m){var f=ce();try{return Vs(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;he(1,0)}}function Rg(o,p,m){var f=ce();try{return Gs(o,p,m)}catch(x){if(pe(f),x!==x+0)throw x;he(1,0)}}function Bg(o,p,m,f){var x=ce();try{Hs(o,p,m,f)}catch(T){if(pe(x),T!==T+0)throw T;he(1,0)}}function Ar(){if(0<qe)Pe=Ar;else if(a)w==null||w(t),K();else{for(var o=De;0<o.length;)o.shift()(t);0<qe?Pe=Ar:(t.calledRun=!0,A||(K(),w==null||w(t)))}}return a||(lt=await Be(),Ar()),t.PTR_SIZE=4,P?t:new Promise((o,p)=>{w=o,S=p})}var pp,ho,d0=q(()=>{var e,t;pp=co,ho=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),ho&&co()}),Ai,Sa,fo,We,cp,Rr,mo,go,Oi,yo,Ri,hp,Bi,fp,Ga=q(()=>{Va(),Ai=typeof location>"u"?void 0:location.origin,Sa=import.meta.url>"file:"&&import.meta.url<"file;",fo=()=>{{if(Sa){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ai).href}return import.meta.url}},We=fo(),cp=()=>{if(We&&!We.startsWith("blob:"))return We.substring(0,We.lastIndexOf("/")+1)},Rr=(e,t)=>{try{let r=t??We;return(r?new URL(e,r):new URL(e)).origin===Ai}catch{return!1}},mo=(e,t)=>{let r=t??We;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},go=(e,t)=>`${t??"./"}${e}`,Oi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},yo=async e=>(await import(e)).default,Ri=(l0(),yr(up)).default,hp=async()=>{if(!We)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Rr(We))return[void 0,Ri()];let e=await Oi(We);return[e,Ri(e)]},Bi=(d0(),yr(dp)).default,fp=async(e,t,r,i)=>{let a=Bi&&!(e||t);if(a)if(We)a=Rr(We)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Bi];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??mo(s,t),u=r&&n&&!Rr(n,t),l=u?await Oi(n):n??go(s,t);return[u?l:void 0,await yo(l)]}}}),Ni,Br,rr,Mi,_o,bo,wo,Ha,$e,qt=q(()=>{Ga(),Br=!1,rr=!1,Mi=!1,_o=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},bo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},wo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ha=async e=>{if(Br)return Promise.resolve();if(rr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Mi)throw new Error("previous call to 'initializeWebAssembly()' failed.");rr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!wo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!bo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=_o();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a==null?void 0:a.mjs,u=(n==null?void 0:n.href)??n,l=a==null?void 0:a.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,g]=await fp(u,s,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=$=>$;else if(d||s)v.locateFile=$=>d??s+$;else if(u&&u.indexOf("blob:")!==0)v.locateFile=$=>new URL($,u).href;else if(h){let $=cp();$&&(v.locateFile=I=>$+I)}g(v).then($=>{rr=!1,Br=!0,Ni=$,w(),h&&URL.revokeObjectURL(h)},$=>{rr=!1,Mi=!0,S($)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},$e=()=>{if(Br&&Ni)return Ni;throw new Error("WebAssembly is not initialized yet.")}}),Je,Xr,_e,ja=q(()=>{qt(),Je=(e,t)=>{let r=$e(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Xr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")Xr(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},_e=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),u=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),mp,p0=q(()=>{qt(),ja(),mp=e=>{let t=$e(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Je(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&_e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Xr(e.extra,"",new WeakSet,(n,u)=>{let l=Je(n,i),d=Je(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&_e(`Can't set a run config entry: ${n} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),$o,vo,xo,It,So,gp,c0=q(()=>{qt(),ja(),$o=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},It=(e,t,r,i)=>{let a=Je(t,i),s=Je(r,i);$e()._OrtAddSessionConfigEntry(e,a,s)!==0&&_e(`Can't set a session config entry: ${t} - ${r}.`)},So=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",It(e,"session.disable_quant_qdq","1",r),It(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let h=a==null?void 0:a.deviceType;h&&It(e,"deviceType",h,r)}break;case"webgpu":if(s="JS",typeof a!="string"){let h=a;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);It(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let u=Je(s,r),l=n.length,d=0,c=0;if(l>0){d=$e()._malloc(l*$e().PTR_SIZE),r.push(d),c=$e()._malloc(l*$e().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)$e().setValue(d+h*$e().PTR_SIZE,n[h][0],"*"),$e().setValue(c+h*$e().PTR_SIZE,n[h][1],"*")}await $e()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&_e(`Can't append execution provider: ${s}.`)}},gp=async e=>{let t=$e(),r=0,i=[],a=e||{};xo(a);try{let s=$o(a.graphOptimizationLevel??"all"),n=vo(a.executionMode??"sequential"),u=typeof a.logId=="string"?Je(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Je(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,u,l,d,c),r===0&&_e("Can't create session options."),a.executionProviders&&await So(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);It(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[h,g]of Object.entries(a.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Je(h,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&_e(`Can't set a free dimension override: ${h} - ${g}.`)}return a.extra!==void 0&&Xr(a.extra,"",new WeakSet,(h,g)=>{It(r,h,g,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&_e("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),Rt,pt,Bt,ii,Qr,Fa,Ka,ka,ie=q(()=>{Rt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},pt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Bt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},ii=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ka=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ka=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Za,yp=q(()=>{Va(),Za=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let n=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(s,n,d).set(l),n+=d}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ko,To,Io,Eo,Xa,zo,fe,ct=q(()=>{ie(),ko=["V","I","W","E","F"],To=(e,t)=>{console.log(`[${ko[e]},${new Date().toISOString()}]${t}`)},Xa=(e,t)=>{Io=e,Eo=t},zo=(e,t)=>{let r=Qr(e),i=Qr(Io);r>=i&&To(r,typeof t=="function"?t():t)},fe=(...e)=>{Eo&&zo(...e)}}),Co,Ft,R,Yr,_p,bp,wp,se=q(()=>{Co=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ft=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let u=Co.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[n[s-2],n[s-1]]=u}for(let u=r?3:1;u<=s;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)n[s-u]=Math.max(l,d);else{if(c>1)return;n[s-u]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},R=class jr{static size(t){return jr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Yr=class cr{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<i.length*2;u++)if(u<n.length){if(n[u]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[u]>=i[u]||n[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)cr.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],i[l],a[l],s,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,s,n,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return cr.computeShapeHelper(t,r,l,i,a,s,n,u),l}static computeConvOutputShape(t,r,i,a,s,n,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return cr.computeShapeHelper(!1,t,l,i,a,s,n,u),l}static computeShapeHelper(t,r,i,a,s,n,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(cr.adjustPadAndReturnShape(r[d+2],a[d],s[d],n[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,s,n,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return s[n]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[u]=c-s[n],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[u]-d)/r+1)}},_p=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,u;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||u<=0||n<=0)throw new Error("invalid shape specified");if(a&&!Ft.isValidBroadcast(a,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,n]}},bp=-34028234663852886e22,wp=34028234663852886e22}),Qa,$p=q(()=>{ie(),Qa=(e,t)=>new(ii(t))(e)}),Di,Ta,Pi,Ao,Ui,Oo,qi,Li,Wi,Ro,vp,h0=q(()=>{ie(),ct(),Di=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ta=(e,t)=>{if(t==="int32")return e;let r=Di.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,s=new(ii(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let u=0;u<a;u++){let l=s[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[u]=Number(l)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ao=1,Ui=()=>Ao++,Oo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),qi=(e,t)=>{let r=Di.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Li=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return qi(this.dataType,this.tensorShape)}destroy(){fe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Pi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Wi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!(s!=null&&s.input.dataTypes.includes(t))){if(n=Oo.get(t),!n||(s==null?void 0:s.input.dataTypes.includes(n)))throw new Error(`WebNN backend does not support data type: ${t}`);fe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==qi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ta(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else fe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Pi(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ro=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ui();return this.tensorTrackersById.set(e,new Wi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){fe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){fe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),s=Ui(),n=new Li({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new Wi(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,r,i,a,s,n){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){fe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}fe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:n??t,shape:r,dimensions:r,usage:i,writable:a,readable:s});return new Li({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},vp=(...e)=>new Ro(...e)}),ir,Bo,xp,f0=q(()=>{ie(),qt(),$p(),h0(),ct(),ir=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},xp=class{constructor(e){this.tensorManager=vp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Xa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){fe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){fe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)fe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Bo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){fe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let s=ir.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,a)}async createTemporaryTensor(e,t,r){fe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ir.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!$e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");fe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Qa(r,t)}}registerMLTensor(e,t,r,i){let a=ir.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,a,i);return fe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,a,s,n=!1){if(!s)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=s.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(n){let h=Ta(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return fe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${n?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ir.get(Rt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(a!=null&&a.input.dataTypes.includes(i)):!!(a!=null&&a.output.dataTypes.includes(i))}flush(){}}}),Ya=q(()=>{}),Vi,Nr,Mr,No,Mo,Gi,Ia,Do,Sp,m0=q(()=>{ct(),Ya(),Vi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Nr=[],Mr=e=>Math.ceil(Number(e)/16)*16,No=e=>{for(let t=0;t<Nr.length;t++){let r=Nr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Mo=1,Gi=()=>Mo++,Ia=async(e,t,r,i)=>{let a=Mr(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},Do=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Vi)Nr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=Mr(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),u.destroy(),fe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Mr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return fe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Gi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),fe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),fe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=No(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:Gi(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),fe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return fe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ia(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Vi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(fe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Sp=(...e)=>new Do(...e)}),Po,ye,Te=q(()=>{Po=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ye=e=>new Po(e)}),Kt,Dr,Ee,Re,te,Se,Ea,jt,vt,ee,ar,M,J,kp,Ja,Uo,Tp,oe=q(()=>{ie(),se(),Kt=64,Dr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Dr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Dr(e,t);return typeof r=="string"?r:r[1]},te=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,Ea=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,jt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ee=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ar=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,u=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,d=Dr(t,a),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:h,tensor:t},y=P=>typeof P=="string"?P:`${P}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",S=`${w}${e}_shape`,v=`${w}${e}_strides`,$="";for(let P=0;P<n-1;P++)$+=`
    let dim${P} = current / ${ee(v,P,n)};
    let rest${P} = current % ${ee(v,P,n)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;$+=`indices[${n-1}] = current;`;let I=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${$}
    return indices;
  }`,k=P=>(_.offsetToIndices=!0,n<2?P:`o2i_${e}(${P})`),E=[];if(n>=2)for(let P=n-1;P>=0;P--)E.push(`${ee(v,P,n)} * (indices[${P}])`);let A=n<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,O=P=>(_.indicesToOffset=!0,n<2?P:`i2o_${e}(${P})`),b=(...P)=>n===0?"0u":`${g.indices}(${P.map(y).join(",")})`,N=(P,V)=>n<2?`${P}`:`${ee(P,V,n)}`,U=(P,V,K)=>n<2?`${P}=${K};`:`${ee(P,V,n)}=${K};`,F={},X=(P,V)=>{_.broadcastedIndicesToOffset=!0;let K=`${V.name}broadcastedIndicesTo${e}Offset`;if(K in F)return`${K}(${P})`;let L=[];for(let de=n-1;de>=0;de--){let Be=V.indicesGet("outputIndices",de+V.rank-n);L.push(`${N(v,de)} * (${Be} % ${N(S,de)})`)}return F[K]=`fn ${K}(outputIndices: ${V.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${K}(${P})`},Y=(P,V)=>(()=>{if(g.storage===g.value)return`${e}[${P}]=${V};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${V}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),z=P=>(()=>{if(g.storage===g.value)return`${e}[${P}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${P}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${P}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),W=n<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${z(`i2o_${e}(indices)`)};
  }`,j=n<2?"":(()=>{let P=u.map(K=>`d${K}: u32`).join(", "),V=u.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${P}) -> ${c} {
    return get_${e}ByIndices(${b(V)});
  }`})(),Q=(...P)=>{if(P.length!==n)throw new Error(`indices length must be ${n}`);let V=P.map(y).join(",");return n===0?z("0u"):n===1?z(V[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${V})`)},ue=P=>n<2?z(P):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${P})`),D=n<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${Y(`i2o_${e}(indices)`,"value")}
  }`,ae=n<2?"":(()=>{let P=u.map(K=>`d${K}: u32`).join(", "),V=u.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${P}, value: ${c}) {
    set_${e}ByIndices(${b(V)}, value);
  }`})();return{impl:()=>{let P=[],V=!1;return _.offsetToIndices&&(P.push(I),V=!0),_.indicesToOffset&&(P.push(A),V=!0),_.broadcastedIndicesToOffset&&(Object.values(F).forEach(K=>P.push(K)),V=!0),_.set&&(P.push(ae),V=!0),_.setByIndices&&(P.push(D),V=!0),_.get&&(P.push(j),V=!0),_.getByIndices&&(P.push(W),V=!0),!s&&V&&P.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${R.computeStrides(r).join(",")});`),P.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:O,broadcastedIndicesToOffset:X,indices:b,indicesGet:N,indicesSet:U,set:(...P)=>{if(P.length!==n+1)throw new Error(`indices length must be ${n}`);let V=P[n];if(typeof V!="string")throw new Error("value must be string");let K=P.slice(0,n).map(y).join(",");return n===0?Y("0u",V):n===1?Y(K[0],V):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${K}, ${V})`)},setByOffset:Y,setByIndices:(P,V)=>n<2?Y(P,V):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${V});`),get:Q,getByOffset:z,getByIndices:ue,usage:i,name:e,strides:v,shape:S,rank:n}},M=(e,t,r,i=1)=>ar(e,t,r,"input",i),J=(e,t,r,i=1)=>ar(e,t,r,"output",i),kp=(e,t,r)=>ar(e,t,r,"atomicOutput",1),Ja=(e,t,r,i=1)=>ar(e,t,r,"internal",i),Uo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Kt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Tp=(e,t)=>new Uo(e,t)}),qo,Hi,Lo,Wo,Vo,Go,Ge,Ip,Ep,xt=q(()=>{ie(),se(),Te(),oe(),qo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Hi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Lo=(e,t)=>R.sortBasedOnPerm(e,Hi(e.length,t)),Wo=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},Vo=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Go=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ge=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Hi(i,t),s=Lo(e.dims,a),n=e.dims,u=s,l=i<2||Go(a,e.dims),d;if(l)return d=_=>{let w=M("input",r,n,4),S=J("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Vo(e.dims,a),g=R.areEqual(h,[2,3,1]),y=R.areEqual(h,[3,1,2]);if(c.length===2||g||y){n=g?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,u=[n[1],n[0]];let _=16;return d=w=>{let S=M("a",r,n.length),v=J("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:w},...te(n,u)]}},getShaderSource:d}}return d=_=>{let w=M("a",r,n.length),S=J("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,S)}

  ${Wo(a,i,w,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(n,u)]}},getShaderSource:d}},Ip=(e,t)=>{qo(e.inputs,t.perm),e.compute(Ge(e.inputs[0],t.perm))},Ep=e=>ye({perm:e.perm})}),Ho,jo,Fo,Ko,Zo,Xo,Qo,Yo,Jo,eu,Ke,zp,Cp,Ap,Op,Rp,Bp,Np,Mp,Dp,Pp,g0=q(()=>{ie(),se(),oe(),en(),xt(),Ho={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},jo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ko={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Zo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Xo=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},Qo=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},Yo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Jo=(e,t)=>{let r=[];if(!Yo(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},eu=(e,t,r,i,a,s,n)=>{let u=r[0].dims,l=R.size(s),d=R.size(n),c=M("_A",r[0].dataType,u),h=J("output",a,s),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fo[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Ho[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${jo[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Ko[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ke=(e,t,r,i)=>{let a=e.inputs.length===1?r:za(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let n=R.normalizeAxes(s,e.inputs[0].dims.length),u=n,l=e.inputs[0],d=Jo(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ge(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Zo(u.length,l.dims.length));let[c,h]=Xo(l.dims,u),g=c;a.keepDims&&(g=Qo(c,n)),e.compute(eu(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},zp=(e,t)=>{Ke(e,"ReduceMeanShared",t,"mean")},Cp=(e,t)=>{Ke(e,"ReduceL1Shared",t,"l1")},Ap=(e,t)=>{Ke(e,"ReduceL2Shared",t,"l2")},Op=(e,t)=>{Ke(e,"ReduceLogSumExpShared",t,"logSumExp")},Rp=(e,t)=>{Ke(e,"ReduceMaxShared",t,"max")},Bp=(e,t)=>{Ke(e,"ReduceMinShared",t,"min")},Np=(e,t)=>{Ke(e,"ReduceProdShared",t,"prod")},Mp=(e,t)=>{Ke(e,"ReduceSumShared",t,"sum")},Dp=(e,t)=>{Ke(e,"ReduceSumSquareShared",t,"sumSquare")},Pp=(e,t)=>{Ke(e,"ReduceLogSumShared",t,"logSum")}}),Ze,tu,Jr,za,Xe,ru,iu,au,nu,su,ou,uu,lu,du,pu,Qe,Up,qp,Lp,Wp,Vp,Gp,Hp,jp,Fp,Kp,en=q(()=>{ie(),se(),Te(),oe(),g0(),Ze=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},tu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Jr=(e,t,r,i,a,s,n=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,h=R.normalizeAxes(a,c),g=!u&&h.length===0;d.forEach((w,S)=>{g||h.indexOf(S)>=0?n&&l.push(1):l.push(w)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],v=M("_A",r[0].dataType,c),$=J("output",s,y),I=i(v,$,h),k=I[2];for(let E=0,A=0;E<c;E++)g||h.indexOf(E)>=0?(n&&A++,k=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${I[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",E,$.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,$)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${k}
          ${I[3]}
          ${I.length===4?$.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(d,l)]})}},za=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ye({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Xe=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:za(a,r);e.compute(Jr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?tu:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},ru=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},iu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},au=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},nu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},su=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},ou=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},uu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},lu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},du=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},pu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Qe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},Up=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):zp(e,t)},qp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Cp(e,t)},Lp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Ap(e,t)},Wp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Op(e,t)},Vp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Rp(e,t)},Gp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Bp(e,t)},Hp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Np(e,t)},jp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Mp(e,t)},Fp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):Dp(e,t)},Kp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Pp(e,t)}}),ji,Zp,Xp,Ca,y0=q(()=>{ie(),Te(),en(),ji=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Zp=(e,t)=>{ji(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Xp=(e,t)=>{ji(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ca=e=>ye(e)}),cu,Pr,hu,fu,mu,_r,gu,Qp,tn=q(()=>{ie(),se(),Ya(),oe(),cu=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],u=e[5];if(n&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=a.dims[0]/3,g=h,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==h+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(n){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=n.dims[3])}let S=_+w,v=-1,$=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Pr=(e,t,r)=>t&&e?`
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
    `,hu=(e,t,r,i,a,s,n,u)=>{let l=Se(n?1:s),d=64,c=s/l;c<d&&(d=32);let h=Math.ceil(s/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:h}],y=Ee(e.dataType,l),_=Re(1,l),w=["type"];n&&w.push("type"),u&&w.push("type");let S=v=>{let $=J("x",e.dataType,e.dims,l),I=[$],k=n?M("seq_lens",n.dataType,n.dims):void 0;k&&I.push(k);let E=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;E&&I.push(E);let A=Re(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(O).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Pr(k,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},fu=(e,t,r,i,a,s,n,u,l)=>{let d=n+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],h=e>1&&i,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=h?[s.batchSize,g,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,w=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=Se(s.headSize),v=s.headSize/S,$=12,I={x:Math.ceil(d/$),y:Math.ceil(s.sequenceLength/$),z:s.batchSize*s.numHeads},k=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:w},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=h&&i&&R.size(i.dims)>0,A=["type","type"];E&&A.push("type"),a&&A.push("type"),u&&A.push("type"),l&&A.push("type");let O=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&O.push({dims:y,dataType:t.dataType,gpuDataType:0});let b=N=>{let U=M("q",t.dataType,t.dims,S),F=M("key",r.dataType,r.dims,S),X=[U,F];if(E){let D=M("past_key",i.dataType,i.dims,S);X.push(D)}a&&X.push(M("attention_bias",a.dataType,a.dims));let Y=u?M("seq_lens",u.dataType,u.dims):void 0;Y&&X.push(Y);let z=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;z&&X.push(z);let W=J("output",t.dataType,c),j=[W];h&&j.push(J("present_key",t.dataType,y,S));let Q=Re(1,S),ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${U.type.storage}, ${$*$}>;
  ${N.registerUniforms(ue).declareVariables(...X,...j)}
  ${N.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Pr(Y,z,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:O,dispatchGroup:I,programUniforms:k}),getShaderSource:b}},mu=(e,t,r,i,a,s,n=void 0,u=void 0)=>{let l=s+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=h?[a.batchSize,g,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,c],w=12,S={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:d}],$=h&&i&&R.size(i.dims)>0,I=["type","type"];$&&I.push("type"),n&&I.push("type"),u&&I.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&k.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=A=>{let O=M("probs",t.dataType,t.dims),b=M("v",r.dataType,r.dims),N=[O,b];$&&N.push(M("past_value",i.dataType,i.dims));let U=n?M("seq_lens",n.dataType,n.dims):void 0;n&&N.push(U);let F=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(F);let X=[J("output",t.dataType,_)];h&&X.push(J("present_value",t.dataType,y));let Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${O.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${O.type.value}, ${w*w}>;
  ${A.registerUniforms(Y).declareVariables(...N,...X)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Pr(U,F,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:E}},_r=(e,t,r,i,a,s,n,u,l,d,c=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(n?1:0)+(u?1:0)),y=g>1?n:void 0,_=g>1?u:void 0,w=g>1?d.pastSequenceLength:0,S=w+d.kvSequenceLength,v=l&&R.size(l.dims)>0?l:void 0,$=[t,r];y&&R.size(y.dims)>0&&$.push(y),v&&$.push(v),c&&$.push(c),h&&$.push(h);let I=e.compute(fu(g,t,r,y,v,d,w,c,h),{inputs:$,outputs:g>1?[-1,1]:[-1]})[0];e.compute(hu(I,d.batchSize,d.numHeads,w,d.sequenceLength,S,c,h),{inputs:c&&h?[I,c,h]:[I],outputs:[]});let k=[I,i];_&&R.size(_.dims)>0&&k.push(_),c&&k.push(c),h&&k.push(h),e.compute(mu(g,I,i,_,d,w,c,h),{inputs:k,outputs:g>1?[0,2]:[0]})},gu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,u={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let g=J("output_q",l[0].dataType,r),y=J("output_k",l[0].dataType,r),_=J("output_v",l[0].dataType,r),w=M("input",l[0].dataType,l[0].dims),S=M("weight",l[1].dataType,l[1].dims),v=M("bias",l[2].dataType,l[2].dims),$=w.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${$}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${$}, ${n*n}>;
  var<workgroup> tileWeightK: array<${$}, ${n*n}>;
  var<workgroup> tileWeightV: array<${$}, ${n*n}>;
  ${h.registerUniforms(I).declareVariables(w,S,v,g,y,_)}
  ${h.mainStart([n,n,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Qp=(e,t)=>{let r=cu(e.inputs,t),[i,a,s]=gu(e,r);return _r(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),yu,_u,bu,Yp,_0=q(()=>{je(),ie(),se(),Te(),oe(),yu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},_u=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?Se(s[s.length-1]):1,u=a==="NHWC"&&s.length>1?n:1,l=R.size(s)/n,d=i,c=d?s.length:s,h=M("x",e[0].dataType,e[0].dims,n),g=M("scale",e[1].dataType,e[1].dims,u),y=M("bias",e[2].dataType,e[2].dims,u),_=M("inputMean",e[3].dataType,e[3].dims,u),w=M("inputVar",e[4].dataType,e[4].dims,u),S=J("y",e[0].dataType,c,n),v=()=>{let I="";if(i)I=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")I=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let k=1;k<g.rank;k++)I+=`cIndices[${k}] = outputIndices[${k}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},$=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,g,y,_,w,S)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${n}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...te(s)]:[{type:12,data:l}]})}},bu=e=>ye(e),Yp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=bu({...t,outputCount:i});if(we.webgpu.validateInputContent&&yu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(_u(r,a))}}),wu,$u,Jp,b0=q(()=>{se(),oe(),wu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$u=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,a=e[0].dataType,s=M("input",a,t,4),n=M("bias",a,[r],4),u=M("residual",a,t,4),l=J("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,n,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Jp=e=>{wu(e.inputs),e.compute($u(e.inputs))}}),vu,ge,ec,tc,rc,ic,ac,nc,sc,oc,uc,xu,lc,dc,pc,cc,hr,hc,Fr,fc,mc,gc,yc,_c,bc,wc,$c,vc,xc,Sc,kc,Tc,Ic,Ec,zc,Fi,Cc,Aa,Oa,Ac,Oc,Rc,Su,ku,Bc,rn=q(()=>{ie(),se(),Te(),oe(),vu=(e,t,r,i,a,s,n)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=M("inputData",r,[u],4),c=J("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return n&&h.push(...n),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ge=(e,t,r,i,a,s=e.dataType,n,u)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>vu(d,R.size(e.dims),e.dataType,s,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},ec=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},tc=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},rc=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},ic=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},ac=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},nc=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},sc=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},oc=e=>ye(e),uc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},xu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ye({min:t,max:r})},lc=(e,t)=>{let r=t||xu(e.inputs),i=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},dc=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},pc=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},cc=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},hr=e=>ye(e),hc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
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
}`,fc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Fr(t)))},mc=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},gc=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},yc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Fr(t)))},_c=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},bc=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},wc=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},$c=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},vc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},xc=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Sc=e=>ye(e),kc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Tc=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},Ic=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},Ec=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},zc=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},Fi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Cc=e=>{e.compute(ge(e.inputs[0],"Tanh",Fi))},Aa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Fi("v")};
}
`,Oa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ac=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",Oa,Aa(t),void 0,e.inputs[0].dataType))},Oc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Rc=e=>{e.compute(ge(e.inputs[0],"Log","log"))},Su=(e,t)=>`
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
`,ku=e=>`quick_gelu_impl(${e})`,Bc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",ku,Su(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Tu,Iu,Nc,w0=q(()=>{se(),oe(),rn(),Tu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Iu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=J("output",e[0].dataType,t,4),s=R.size(t)/4,n=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
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
  }`}},Nc=e=>{Tu(e.inputs),e.compute(Iu(e.inputs))}}),Eu,zu,Ye,Mc,Dc,Pc,Uc,qc,Lc,Wc,Vc,Gc,Hc,$0=q(()=>{ie(),se(),oe(),Eu=(e,t,r,i,a,s,n,u,l,d,c,h)=>{let g,y;typeof u=="string"?g=y=($,I)=>`${u}((${$}),(${I}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=J("outputData",c,i.length,4),w=M("aData",l,t.length,4),S=M("bData",d,r.length,4),v;if(a)if(s){let $=R.size(t)===1,I=R.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;$||I?v=_.setByOffset("global_idx",y($?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(n||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(I,k,E="")=>{let A=`aData[indexA${k}][componentA${k}]`,O=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${I}[${k}] = ${E}(${g(A,O)});
          `};c===9?v=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},zu=(e,t,r,i,a,s,n=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(u,l),c=u,h=R.size(u),g=!1,y=!1,_=[d];if(d){let w=Ft.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),h=R.size(c);let S=R.size(u)===1,v=R.size(l)===1,$=u.length>0&&u[u.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(v),_.push($),_.push(I);let k=1;for(let E=1;E<c.length;E++){let A=u[u.length-E],O=l[l.length-E];if(A===O)k*=A;else break}k%4===0?(y=!0,g=!0):(S||v||$||I)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Eu(w,u,l,c,g,d,y,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:c,dataType:n}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(c)/4)},...te(u,l,c)]})}},Ye=(e,t,r,i,a,s)=>{e.compute(zu(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},Mc=e=>{Ye(e,"Add",(t,r)=>`${t}+${r}`)},Dc=e=>{Ye(e,"Div",(t,r)=>`${t}/${r}`)},Pc=e=>{Ye(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Uc=e=>{Ye(e,"Mul",(t,r)=>`${t}*${r}`)},qc=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ye(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},Lc=e=>{Ye(e,"Sub",(t,r)=>`${t}-${r}`)},Wc=e=>{Ye(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Vc=e=>{Ye(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Gc=e=>{Ye(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Hc=e=>{Ye(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Cu,Au,Ou,Ru,jc,Fc,v0=q(()=>{ie(),se(),Te(),oe(),Cu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,u)=>{if(u!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Au=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ou=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},Ru=(e,t,r,i)=>{let a=R.size(r),s=new Array(e.length),n=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],s[w]=u,d.push(e[w].dims.length),n[w]=M(`input${w}`,i,d[w]),l.push("rank"),c.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)c.push(...te(e[w].dims));c.push(...te(r));let h=J("output",i,r.length),g=h.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...n,h)})()}

  ${Au(s.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ou(n,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:_}},jc=(e,t)=>{let r=e.inputs,i=r[0].dims,a=R.normalizeAxis(t.axis,i.length);Cu(r,a);let s=i.slice();s[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let n=r.filter(u=>R.size(u.dims)>0);e.compute(Ru(n,a,s,r[0].dataType),{inputs:n})},Fc=e=>ye({axis:e.axis})}),Dt,Pt,Ut,an,Lt=q(()=>{ie(),se(),Dt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ut=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},an=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[bp,wp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Kc,nn=q(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Kc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zc,x0=q(()=>{Zc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),mr,sn,on=q(()=>{ie(),se(),oe(),Lt(),mr=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,u)=>`
      if (${ee(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,ee(a,u+s,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},sn=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n[n.length-2],d=u[u.length-1],c=n[n.length-1],h=Se(d),g=Se(c),y=Se(l),_=R.size(r)/h/y,w=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[R.size(S),l,d],$=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Pt(t,$),$.push(...te(S,n,u)),w&&$.push(...te(e[2].dims)),$.push(...te(v));let I=k=>{let E=Ja("batch_dims",e[0].dataType,S.length),A=M("a",e[0].dataType,n.length,g),O=M("b",e[1].dataType,u.length,h),b=J("output",e[0].dataType,v.length,h),N=Ee(b.type.tensor),U=Dt(t,b.type.value,N),F=[A,O],X="";if(w){let W=a?h:1;F.push(M("bias",e[2].dataType,e[2].dims.length,W)),X=`${a?`value += bias[col / ${W}];`:`value += ${b.type.value}(bias[row + i]);`}`}let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ut(t,Y);let z=()=>{let W=`var a_data: ${A.type.value};`;for(let j=0;j<g;j++)W+=`
              let b_data${j} = b[(b_offset + (k + ${j}) * uniforms.N + col) / ${h}];`;for(let j=0;j<y;j++){W+=`a_data = a[(a_offset + (row + ${j}) * uniforms.K + k) / ${g}];`;for(let Q=0;Q<g;Q++)W+=`
            values[${j}] = fma(${O.type.value}(a_data${g===1?"":`[${Q}]`}), b_data${Q}, values[${j}]);
`}return W};return`
  ${k.registerUniforms(Y).registerInternalVariables(E).declareVariables(...F,b)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${mr("a_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${mr("b_indices",O,O.rank-2,E.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${b.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${z()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${X}
      ${U}
      let cur_indices = ${b.type.indices}(batch, row + i, col);
      let offset = ${b.indicesToOffset("cur_indices")};
      ${b.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${y};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:$}),getShaderSource:I}}}),Bu,Nu,Ra,Ki,Mu,Ba,Du,ei,un=q(()=>{ie(),se(),oe(),Lt(),on(),nn(),Bu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Nu=(e,t)=>e?`
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
        }`,Ra=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:s,h=a?s:l,g=c/t[0],y=s/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

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
          ${Bu(a,i)}
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

          ${Nu(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ki=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Mu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ba=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=a?d:s,g=a?s:d;if(!(g%t[1]===0&&h%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=h/t[0],w=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Ki(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
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
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ki(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
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
      ${Mu(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
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
    ${S}
  }
`},Du=(e,t,r,i,a=!1)=>{let[s,n,u,l]=i,d=Ee(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${mr("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${mr("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ce(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ei=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=R.size(c),g=n[n.length-2],y=n[n.length-1],_=u[u.length-1],w=y%4===0&&_%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(_/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],I=w?4:1,k=[...l,g,y/I],E=k.length,A=[...d,y,_/I],O=A.length,b=[h,g,_/I],N=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Pt(t,N),N.push(...te(c,k,A));let U=["rank","rank"],F=e.length>2;F&&(N.push(...te(e[2].dims)),U.push("rank")),N.push(...te(b));let X=Y=>{let z=c.length,W=Ja("batchDims",e[0].dataType,z,1),j=Ee(e[0].dataType),Q=M("a",e[0].dataType,E,I),ue=M("b",e[1].dataType,O,I),D=J("result",e[0].dataType,b.length,I),ae=[Q,ue];if(F){let de=a?I:1;ae.push(M("bias",e[2].dataType,e[2].dims.length,de))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ut(t,P);let V=Ee(D.type.tensor),K=Dt(t,D.type.value,V),L=Du(I,F,K,[W,Q,ue,D],a);return`
  ${Y.registerUniforms(P).registerInternalVariables(W).declareVariables(...ae,D)}
  ${L}
  ${w?Ra(S,v,j,W):Ba(S,v,j,W)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${a}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:N}),getShaderSource:X}}}),Pu,Xc,S0=q(()=>{ie(),ct(),oe(),Lt(),nn(),x0(),un(),Pu=(e,t,r,i,a=!1,s,n=4,u=4,l=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},g=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(n,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(n)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${n};
    ${$}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ce(n,d)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${$}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ce(n,d)}(0.0);`,k=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ce(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ce(u,d)}(0.0);`,E=Ce(l,d),A=Ce(e?n:u,d),O=Ce(e?u:n,d),b=Dt(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?I:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?k:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Kc(a)}
      ${b}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Xc=(e,t,r,i,a,s,n,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:g*y,v=d?g*y:_,$=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/$[0]/I[0]),Math.ceil(v/$[1]/I[1]),Math.ceil(h/$[2]/I[2])];fe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=w?d&&c%4!==0?3:4:1,A=$[1]*I[1],O=$[0]*I[0],b=Math.max($[0]*E,$[1]),N=i%A===0,U=a%O===0,F=s%b===0,X=w?[E,4,4]:[1,1,1],Y=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,Y),Y.push(...te(e[0].dims,e[1].dims));let z=["rank","rank"];n&&(Y.push(...te(e[2].dims)),z.push("rank")),Y.push(...te(r));let W=j=>{let Q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ut(t,Q);let ue=w?4:1,D=Ee(e[0].dataType),ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${D}>`:D}) {
        result[flatIndex] = ${w?`vec4<${D}>`:D}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${D}>`:D}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,P=M("x",e[0].dataType,e[0].dims.length,E===3?1:E),V=M("w",e[1].dataType,e[1].dims.length,ue),K=[P,V],L=J("result",e[0].dataType,r.length,ue);if(n){let de=M("bias",e[2].dataType,e[2].dims.length,ue);K.push(de),ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${D}>`:D} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Zc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${j.registerUniforms(Q).declareVariables(...K,L)}
        ${ae}
        ${Pu(d,N,U,F,n,t,X[0],X[1],X[2],D)}
        ${w?Ra(I,$,D,void 0,!d,b):Ba(I,$,D,void 0,!d,b,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${w};${N};${U};${F};${A};${O};${b}`,inputDependencies:z},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Y}),getShaderSource:W}}}),Uu,Zi,nr,qu,Xi,Lu,Qc,Yc,k0=q(()=>{ie(),ct(),se(),oe(),Lt(),nn(),Uu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Zi=e=>typeof e=="number"?[e,e,e]:e,nr=(e,t)=>t<=1?e:e+(e-1)*(t-1),qu=(e,t,r,i=1)=>{let a=nr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Xi=(e,t,r,i,a)=>{a==null&&(a=qu(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},Lu=(e,t,r,i,a,s,n,u,l,d)=>{let c,h,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Xi([t,r,i,1],[u,l,d],1,[a,s,n],e);h=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,S,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Xi([t,r,i,1],[u,l,d],1,[a,s,n],e[0]);h=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/a),g=Math.ceil(r/s),y=Math.ceil(i/n);let _=(h-1)*a+u-t,w=(g-1)*s+l-r,S=(y-1)*n+d-i,v=Math.floor(_/2),$=_-v,I=Math.floor(w/2),k=w-I,E=Math.floor(S/2),A=S-E;c={top:I,bottom:k,left:E,right:A,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:g,outWidth:y}},Qc=(e,t,r,i,a,s=!1,n="channelsLast")=>{let u,l,d,c,h;if(n==="channelsLast")[u,l,d,c,h]=e;else if(n==="channelsFirst")[u,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${n}`);let[g,,y,_,w]=t,[S,v,$]=Zi(r),[I,k,E]=Zi(i),A=nr(y,I),O=nr(_,k),b=nr(w,E),{padInfo:N,outDepth:U,outHeight:F,outWidth:X}=Lu(a,l,d,c,S,v,$,A,O,b),Y=s?g*h:g,z=[0,0,0,0,0];return n==="channelsFirst"?z=[u,Y,U,F,X]:n==="channelsLast"&&(z=[u,U,F,X,Y]),{batchSize:u,dataFormat:n,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:U,outHeight:F,outWidth:X,outChannels:Y,padInfo:N,strideDepth:S,strideHeight:v,strideWidth:$,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:O,effectiveFilterWidth:b,dilationDepth:I,dilationHeight:k,dilationWidth:E,inShape:e,outShape:z,filterShape:t}},Yc=(e,t,r,i,a,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(Uu(l.x.map(S=>r[S]))/u[0]),1,1];fe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=R.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,g),g.push(...te(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...te(e[2].dims)),y.push("rank")),g.push(...te(r));let w=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ut(t,v);let $=1,I=Ee(e[0].dataType),k=M("x",e[0].dataType,e[0].dims.length,c),E=M("W",e[1].dataType,e[1].dims.length,$),A=[k,E],O=J("result",e[0].dataType,r.length,$),b="";if(_){let F=M("bias",e[2].dataType,e[2].dims.length,$);A.push(F),b+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${n?ee("coords",4,5):ee("coords",1,5)}];
        }`}let N=Ce(c,I),U=Dt(t,N,I);return`
            ${b}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...A,O)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${ee("coords",0,k.rank)};
              let d2 = ${n?ee("coords",k.rank-1,k.rank):ee("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${n?ee("coords",1,k.rank):ee("coords",2,k.rank)},
              ${n?ee("coords",2,k.rank):ee("coords",3,k.rank)},
              ${n?ee("coords",3,k.rank):ee("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?ee("uniforms.x_shape",1,k.rank):ee("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${n?ee("uniforms.x_shape",2,k.rank):ee("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${n?ee("uniforms.x_shape",3,k.rank):ee("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${n?ee("uniforms.x_shape",4,k.rank):ee("uniforms.x_shape",1,k.rank)};
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
              ${U}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:w}}}),Jc,eh,T0=q(()=>{ie(),se(),oe(),Lt(),Jc=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?Se(d):1,g=R.size(r)/h,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Pt(t,y),y.push(...te(n,[u[0],u[1],u[2],u[3]/h]));let _=a?["rank","rank","rank"]:["rank","rank"];y.push(...te([r[0],r[1],r[2],r[3]/h]));let w=S=>{let v=J("output",e[0].dataType,r.length,h),$=Ee(v.type.tensor),I=Dt(t,v.type.value,$),k=M("x",e[0].dataType,n.length),E=M("w",e[1].dataType,u.length,h),A=[k,E];a&&A.push(M("b",e[2].dataType,e[2].dims,h));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ut(t,O);let b=l?`
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
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(O).declareVariables(...A,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${b}
    ${s}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},eh=(e,t,r,i)=>{let a=e.length>2,s=Se(r[3]),n=Se(r[2]),u=R.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,h),h.push(...te(l,d,c));let g=(n-1)*t.strides[1]+d[1],y=_=>{let w=J("output",e[0].dataType,c.length,s),S=Ee(w.type.tensor),v=Dt(t,w.type.value,S),$=M("x",e[0].dataType,l.length,s),I=M("w",e[1].dataType,d.length,s),k=[$,I];a&&k.push(M("b",e[2].dataType,e[2].dims,s));let E=a?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ut(t,A),`
  ${_.registerUniforms(A).declareVariables(...k,w)}
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
    var values: array<${w.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
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
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
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
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${g};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:y}}}),Wu,Ur,Vu,qr,Na,Qi,Gu,Hu,Ma,I0=q(()=>{se(),S0(),k0(),un(),T0(),Lt(),on(),xt(),Wu=(e,t,r,i,a,s)=>{let n=e[0],u=e.slice(s?1:2,s?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),h=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-c[y]+a[y])/a[y]));return h.splice(0,0,n),h.splice(s?3:1,0,d),h},Ur=[2,3,1,0],Vu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Yr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Na=e=>{let t=an(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Qi=(e,t,r,i)=>{let a=r.format==="NHWC",s=Wu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let A=[t[0]];if(a){let O=e.kernelCustomData.wT??e.compute(Ge(t[1],Ur),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),A.push(O)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(eh(A,r,s,i),{inputs:A}):e.compute(Jc(A,r,s,i),{inputs:A});return}let n=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],h=t[1].dims[3],g=s[a?1:2],y=s[a?2:3],_=s[a?3:1],w=a&&c===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=s[0],O,b,N,U=[];if(a){let Y=e.kernelCustomData.wT??e.compute(Ge(t[1],Ur),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Y),w){let z=u*l*d;O=t[0].reshape([1,A,z]),b=Y.reshape([1,z,_]),N=[1,A,_]}else O=t[0].reshape([A,u*l,d]),b=Y.reshape([1,d,_]),N=[A,g*y,_];U.push(O),U.push(b)}else O=t[0].reshape([A,d,u*l]),b=t[1].reshape([1,_,d]),N=[A,_,g*y],U.push(b),U.push(O);n&&U.push(t[2]);let F=N[2],X=U[0].dims[U[0].dims.length-1];F<8&&X<8?e.compute(sn(U,r,s,N,a,i),{inputs:U}):e.compute(ei(U,r,s,N,a,i),{inputs:U});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Ge(t[1],Ur),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];n&&$.push(t[2]);let I=a?g*y:_,k=a?_:g*y,E=c*h*d;e.compute(Xc($,r,s,I,k,E,n,S,i),{inputs:$})},Gu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=qr({...t,pads:a,strides:s,dilations:n,kernelShape:u},i);Qi(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Hu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=qr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=Qc(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Yc(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},Ma=(e,t)=>{if(Vu(e.inputs,t),e.inputs[0].dims.length===3)Gu(e,t);else if(e.inputs[0].dims.length===5)Hu(e,e.inputs,t);else{let r=qr(t,e.inputs);Qi(e,e.inputs,r)}}}),th,E0=q(()=>{ie(),ct(),se(),oe(),th=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,u=e[1].dims,l=u[2]/n,d=u[3],c=s?Se(l):1,h=s&&d===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-g,_=s?Se(d):1,w=s?d===1?c:_:1,S=R.size(a)/_,v=[Math.ceil(S/64),1,1];fe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let $=["rank","rank"],I=[t.strides[0],t.strides[1]],k=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],A=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],O=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],b=[{type:12,data:S},{type:12,data:I},{type:12,data:k},{type:12,data:E},{type:12,data:A},{type:6,data:O},{type:12,data:g},{type:12,data:l},{type:12,data:d},...te(e[0].dims,e[1].dims)];i&&(b.push(...te(e[2].dims)),$.push("rank")),b.push(...te(a));let N=U=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],X=Ee(e[0].dataType),Y=s?1:2,z=s?2:3,W=s?3:1,j=M("W",e[1].dataType,e[1].dims.length,w),Q=M("Dy",e[0].dataType,e[0].dims.length,c),ue=[Q,j];i&&ue.push(M("bias",e[2].dataType,[a[W]].length,_));let D=J("result",e[0].dataType,a.length,_),ae=()=>{let K="";if(h)c===4?K+=`
        let xValue = ${Q.getByOffset("x_offset")};
        let wValue = ${j.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?K+=`
          dotProd = dotProd + dot(vec4<${X}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}), vec4<${X}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(K+=`
          dotProd = dotProd + dot(vec4<${X}>(${Q.getByOffset("x_offset")}, ${Q.getByOffset("x_offset + 1u")}, ${Q.getByOffset("x_offset + 2u")}, ${Q.getByOffset("x_offset + 3u")}), vec4<${X}>(${j.getByOffset("w_offset")}, ${j.getByOffset("w_offset + 1u")}, ${j.getByOffset("w_offset + 2u")}, ${j.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(K+=`
                  let xValue = ${s?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Q.get("batch","inputChannel","idyR","idyC")};
        `,c===1)K+=`
          let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${j.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let L=0;L<c;L++)K+=`
            let wValue${L} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${L}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${L}] * wValue${L};`;return K},P=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let K="";if(c===1){K+="dotProd = dotProd";for(let L=0;L<y;L++)K+=`
            + ${Q.getByOffset(`x_offset + ${L}`)} * ${j.getByOffset(`w_offset + ${L}`)}`;K+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);K+=`
          let xValue = ${Q.getByOffset("x_offset")};
          let wValue = ${j.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return K},V=`
            let outputIndices = ${D.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${D.indicesGet("outputIndices",0)};
            let d1 = ${D.indicesGet("outputIndices",W)};
            let r = ${D.indicesGet("outputIndices",Y)};
            let c = ${D.indicesGet("outputIndices",z)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${D.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${X}(dyRCorner) + ${X}(wR)) / ${X}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${X}(uniforms.Dy_shape[${Y}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${X}(dyCCorner) + ${X}(wC)) / ${X}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${X}(uniforms.Dy_shape[${z}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${j.indicesToOffset(`${j.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${ae()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${D.setByOffset("global_idx","value")};
          `;return`
    ${U.registerUniforms(F).declareVariables(...ue,D)}
      ${U.mainStart()}
      ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${V}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${_}${h}${y}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:b}),getShaderSource:N}}}),ju,Fu,Ku,Yi,rh,Zu,Ji,Xu,ih,z0=q(()=>{E0(),Lt(),xt(),ju=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,Fu=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},Ku=(e,t,r,i,a,s,n,u,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],y=t[u?3:1]*a;for(let _=0,w=e.length-c-(u?1:0);_<c;++_,++w){let S=e[w],v=h?S*n[_]:d[_],$=ju(S,n[_],s[_],t[w],r[_],v);Fu($,i,s,_,_+c),h&&d.push(n[_]*(S-1)+l[_]+(t[w]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,g),d.splice(u?3:1,0,y)},Yi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}Ku(u,r,l,e.autoPad,e.group,a,d,i,n,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:l,strides:d}),c},rh=e=>{let t=an(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:c,outputShape:h,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Zu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,u)=>n+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,u)=>n+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,u)=>n+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,u)=>n+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ji=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ge(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(th(s,r,i),{inputs:s})},Xu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=Yi({...t,pads:u,strides:n,dilations:s,kernelShape:a,outputPadding:l},i);Ji(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},ih=(e,t)=>{if(Zu(e.inputs,t),e.inputs[0].dims.length===3)Xu(e,t);else{let r=Yi(t,e.inputs);Ji(e,e.inputs,r)}}}),Qu,ah,nh,C0=q(()=>{ie(),se(),Te(),oe(),Qu=(e,t,r,i)=>{let a=R.size(t),s=t.length,n=M("input",e,s),u=J("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,s),c=h=>{let g=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,y=ee("uniforms.input_shape","uniforms.axis",s),_=i.reverse?g+(i.exclusive?" + 1":""):"0",w=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...te(t,t)]}),getShaderSource:c}},ah=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Qu(i,r,a,t),{inputs:[0]})},nh=e=>{let t=e.exclusive===1,r=e.reverse===1;return ye({exclusive:t,reverse:r})}}),Yu,Ju,el,sh,oh,A0=q(()=>{ie(),se(),Te(),oe(),Yu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ju=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},el=(e,t)=>{let r,i,a,s,n,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,s]=e.dims,n=c?[r,i,a,d,d,s/d**2]:[r,i,a,s/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=c?[r,d,d,s/d**2,i,a]:[r,s/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(n),g=h.dims.length,y=e.dataType,_=M("a",y,g),w=J("output",y,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,w)}

  ${Ju(u,g,_,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=l?[r,i*d,a*d,s/d**2]:[r,s/d**2,i*d,a*d],I=R.size($),k=h.dims,E=R.sortBasedOnPerm(k,u);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...te(k,E)]}},getShaderSource:S}},sh=(e,t)=>{Yu(e.inputs),e.compute(el(e.inputs[0],t))},oh=e=>ye({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Lr,sr,ea,tl,rl,il,al,ta,nl,uh,lh,O0=q(()=>{ie(),se(),Te(),oe(),Lr="[a-zA-Z]|\\.\\.\\.",sr="("+Lr+")+",ea="^"+sr+"$",tl="("+sr+",)*"+sr,rl="^"+tl+"$",il=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},al=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(rl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let u=e[n].dims.slice();if(!s.match(RegExp(ea)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,u,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(sr)))throw new Error("Invalid RHS");(a=i.match(RegExp(Lr,"g")))==null||a.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],u=0;if(!e.match(RegExp(ea))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Lr,"g")),d=new il(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<n.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,h+y),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},ta=e=>e+"_max",nl=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>M(`input${c}`,t,d)),s=R.size(i),n=J("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],w=[],S=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{var A;if(r.rhs.symbolToIndices.has(E)){let O=(A=r.rhs.symbolToIndices.get(E))==null?void 0:A[0];O!==void 0&&r.lhs.forEach((b,N)=>{if(k.inputIndices.includes(N)){let U=b.symbolToIndices.get(E);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(F=>{c.push(`${a[N].indicesSet(`input${N}Indices`,F,n.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,b)=>{if(k.inputIndices.includes(b)){let N=O.symbolToIndices.get(E);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(U=>{_.push(`${a[b].indicesSet(`input${b}Indices`,U,`${E}`)}`)}),v.push(`prod *= ${a[b].getByIndices(`input${b}Indices`)};`)}}),w.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${ta(E)}; ${E}++) {`),S.push("}")});let I=$?[...c,`let sum = ${a.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...w,..._,h,...v,y,...S];return`
            ${d.registerUniforms(u.map(k=>({name:`${ta(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((k,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(h=>r.symbolToInfo.has(h)).map(h=>{var g;return{type:12,data:((g=r.symbolToInfo.get(h))==null?void 0:g.dimValue)||0}});d.push({type:12,data:s});let c=e.map((h,g)=>[...te(h)]).reduce((h,g)=>h.concat(g),d);return c.push(...te(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},uh=(e,t)=>{let r=new al(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(nl(a,e.inputs[0].dataType,r,i))},lh=e=>{let t=e.equation.replace(/\s+/g,"");return ye({equation:t})}}),sl,ra,ol,ul,dh,R0=q(()=>{ie(),se(),oe(),sl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ra=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},ol=(e,t)=>e.length>t.length?ra(e,t):ra(t,e),ul=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=ol(t,r),a=e[0].dataType,s=a===9||R.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/u),d=h=>{let g=M("input",a,t.length,n),y=J("output",a,i.length,u),_;if(a===9){let w=(S,v,$="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${$}(${g.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${n}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...te(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},dh=e=>{sl(e.inputs),e.compute(ul(e.inputs),{inputs:[0]})}}),ll,ph,B0=q(()=>{ie(),se(),oe(),rn(),ll=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),a=i%4===0,s=n=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),d=J("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(c).declareVariables(u,l,d)}

    ${Aa(Re(t))}

    ${n.mainStart(Kt)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Oa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Kt/4)}})}},ph=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Ac(e):e.compute(ll(e.inputs))}}),dl,pl,ch,hh,N0=q(()=>{ie(),se(),Te(),oe(),dl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},pl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=R.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let u=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(n)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:s},...te(e[0].dims,e[1].dims,n)],h=g=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),w=J("output",e[0].dataType,n.length,l),S=$=>{let I=i.length,k=`var indicesIndices${$}  = ${_.type.indices}(0);`;for(let E=0;E<I;E++)k+=`${I>1?`indicesIndices${$}[${E}]`:`indicesIndices${$}`} = ${n.length>1?`outputIndices${$}[uniforms.axis + ${E}]`:`outputIndices${$}`};`;k+=`
          var idx${$} = ${_.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${y.type.indices};
        `;for(let E=0,A=0;E<a;E++)E===s?(k+=`${a>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = u32(idx${$});`,A+=I):(k+=`${a>1?`dataIndices${$}[${E}]`:`dataIndices${$}`} = ${n.length>1?`outputIndices${$}[${A}]`:`outputIndices${$}`};`,A++);return k},v;if(e[0].dataType===9){let $=(I,k,E="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${y.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${I}[${k}] = ${E}(${y.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},ch=e=>ye({axis:e.axis}),hh=(e,t)=>{let r=e.inputs;dl(r),e.compute(pl(e.inputs,t))}}),cl,fh,mh,M0=q(()=>{ie(),se(),oe(),cl=(e,t,r,i,a,s,n,u,l)=>{let d=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:u},{type:12,data:l}],c=[s];d.push(...te(t.dims,c));let h=g=>{let y=M("indices_data",t.dataType,t.dims.length),_=J("input_slice_offsets_data",12,1,1),w=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...w)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},fh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],u=R.sizeToDimension(s,s.length-1),l=R.sizeFromDimension(i,t.batchDims+n),d=R.sizeToDimension(i,t.batchDims),c=R.sizeFromDimension(i,t.batchDims),h=u/d,g=new Array(n),y=l;for(let k=0;k<n;++k)g[n-1-k]=y,y*=i[t.batchDims+n-1-k];let _=cl(e,r[1],g,t.batchDims,i,u,h,c,n),w=t.batchDims+n;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(i.slice(w)),v=R.size(S),$=[{type:12,data:v},{type:12,data:l},...te(r[0].dims,_.dims,S)],I=k=>{let E=M("data",r[0].dataType,r[0].dims.length),A=M("slice_offsets",12,_.dims.length),O=J("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,A,O)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:I},{inputs:[r[0],_]})},mh=e=>({batchDims:e.batch_dims,cacheKey:""})}),hl,fl,gh,yh,D0=q(()=>{ie(),se(),Te(),oe(),hl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===s.dims[l]:u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((u,l)=>u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},fl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=R.normalizeAxis(t.gatherAxis,a),n=R.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(s,1,...i);let l=R.size(u),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...te(...e.map((y,_)=>y.dims),u)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length),w=M("inputIndices",e[1].dataType,e[1].dims.length),S=M("scales",e[2].dataType,e[2].dims.length),v=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=J("output",d,u.length),I=[_,w,S];v&&I.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(k).declareVariables(...I,$)}
        ${y.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
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
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(d)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},gh=(e,t)=>{let r=e.inputs;hl(r,t),e.compute(fl(e.inputs,t))},yh=e=>ye({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ml,gl,_h,bh,P0=q(()=>{ie(),se(),Te(),oe(),ml=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,u=R.normalizeAxis(t.axis,a),l=r[u],d=s.slice(0),c=R.size(d),h=M("input",i,a),g=M("indicesInput",n,s.length),y=J("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...te(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},_h=e=>ye({axis:e.axis}),bh=(e,t)=>{let r=e.inputs;ml(r),e.compute(gl(e.inputs,t))}}),yl,_l,wh,$h,U0=q(()=>{ie(),se(),oe(),yl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},_l=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=_p.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,s];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(a/l),h=!0,g=R.size(u),y=[{type:12,data:h?d:g},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...te(e[2].dims)),_.push("rank")),y.push(...te(u));let w=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",k=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),A=k.type.value,O=null,b=[k,E];e.length===3&&(O=M("c",e[2].dataType,e[2].dims.length),b.push(O));let N=J("output",e[0].dataType,u.length);b.push(N);let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(U).declareVariables(...b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${I}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${A}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let $=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),k=null,E=[$,I];e.length===3&&(k=M("c",e[2].dataType,e[2].dims.length),E.push(k));let A=J("output",e[0].dataType,u.length);E.push(A);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],b="",N="";t.transA&&t.transB?(N=`
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
      `,b="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
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
      `,b="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
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
      `,b="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
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
      `,b="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let U=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(O).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${b}
      }
      workgroupBarrier();
    }

    ${U}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},wh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},$h=(e,t)=>{yl(e.inputs),e.compute(_l(e.inputs,t))}}),st,dt,Et,zt,bl,wl,$l,vl,xl,Sl,kl,Tl,vh,xh,q0=q(()=>{ie(),se(),Te(),oe(),[st,dt,Et,zt]=[0,1,2,3],bl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wl=`
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
`,$l=e=>`
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
`,vl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xl=e=>`
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
`,Sl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${st}] = batch;
     indices[${dt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Et}] = u32(r);
            indices[${zt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Et}] = u32(clamp(r, 0, H - 1));
          indices[${zt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Et}] = gs_reflect(r, border[1], border[3]);
          indices[${zt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,kl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${st}], indices[${dt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${st}], indices[${dt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${st}], indices[${dt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${st}], indices[${dt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${st}], indices[${dt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${st}], indices[${dt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Tl=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[st,dt,Et,zt]=[0,3,1,2]);let n=J("output",e[0].dataType,s.length),u=r.type.value,l=R.size(s),d=[{type:12,data:l},...te(e[0].dims,i,s)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${wl}
  ${$l(u)}
  ${vl(t)}
  ${xl(t)}
  ${Sl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Et}]);
      let W_in = i32(uniforms.x_shape[${zt}]);

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
      var grid_indices = vec3<u32>(indices[${st}], indices[${Et}], indices[${zt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${kl(n,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=R.size(s);return{outputs:[{dims:s,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},vh=(e,t)=>{bl(e.inputs),e.compute(Tl(e.inputs,t))},xh=e=>ye({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ne,Il,Sh,ia,El,fr,kh,Th=q(()=>{ie(),se(),Te(),Ya(),tn(),oe(),xt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Il=(e,t)=>{let r=e[0],i=Ne(e,1),a=Ne(e,2),s=Ne(e,3),n=Ne(e,4),u=Ne(e,5),l=Ne(e,6),d=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,w=0,S=Math.floor(g/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],w=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&R.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=_+y,I=0;if(n&&R.size(n.dims)>0){I=8;let O=n.dims;throw O.length===1?O[0]===c?I=1:O[0]===3*c+2&&(I=3):O.length===2&&O[0]===c&&O[1]===$&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=g;if(a&&R.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],k=!0}}let A=!1;if(n&&R.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(u&&R.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:$,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:A,passPastInKv:k,qkvFormat:v}},Sh=e=>ye({...e}),ia=ye({perm:[0,2,1,3]}),El=(e,t,r,i,a,s,n)=>{let u=[i,a,s],l=R.size(u),d=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],c=h=>{let g=J("qkv_with_bias",t.dataType,u),y=M("qkv",t.dataType,u),_=M("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(y,_,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},fr=(e,t,r,i,a,s,n,u)=>{let l=s;if(n&&R.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=El(e,s,n,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ge(l,ia.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ge(l,ia.perm),{inputs:[l],outputs:[-1]})[0]},kh=(e,t)=>{let r=Il(e.inputs,t),i=e.inputs[0],a=Ne(e.inputs,1),s=Ne(e.inputs,2),n=Ne(e.inputs,3),u=Ne(e.inputs,4),l=Ne(e.inputs,5),d=Ne(e.inputs,6),c=Ne(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let h=a&&s&&a.dims.length===4&&s.dims.length===4,g=fr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(h)return _r(e,g,a,s,u,void 0,d,c,l,r);if(!a||!s)throw new Error("key and value must be provided");let y=fr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),_=fr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);_r(e,g,y,_,u,void 0,d,c,l,r)}}),zl,Cl,Al,Ol,Da,Ih,Eh,zh=q(()=>{ie(),se(),Te(),oe(),zl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Cl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ye({numOutputs:i,axis:t.axis,splitSizes:r})},Al=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ee("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ol=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Da=(e,t)=>{let r=e[0].dims,i=R.size(r),a=e[0].dataType,s=R.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],l[_]=h;let w=r.slice();w[s]=t.splitSizes[_],c.push(w),n[_]=J(`output${_}`,a,w.length),d.push({dims:c[_],dataType:e[0].dataType})}g.push({type:12,data:l},...te(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...n)}
  ${Al(l.length)}
  ${Ol(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ee("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},Ih=(e,t)=>{zl(e.inputs);let r=e.inputs.length===1?t:Cl(e.inputs,t);e.compute(Da(e.inputs,r),{inputs:[0]})},Eh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ye({axis:t,numOutputs:i,splitSizes:r})}}),Rl,ti,Ch,Ah=q(()=>{ie(),se(),Te(),oe(),Rl=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!R.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],h=R.sizeFromDimension(r.dims,1)/d,g=u===0?a.dims[1]*2:h/n;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ti=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],u=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],h=a===0?c*2:d/i,g=new Array(n,l,d/h,h-c),y=R.computeStrides(g),_=[{type:1,data:s},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let v=M("input",e[0].dataType,e[0].dims.length),$=M("position_ids",e[1].dataType,e[1].dims.length),I=M("cos_cache",e[2].dataType,e[2].dims.length),k=M("sin_cache",e[3].dataType,e[3].dims.length),E=J("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(v,$,I,k,E)}

        ${S.mainStart(Kt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",J("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ye({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(g)/Kt)},programUniforms:_})}},Ch=(e,t)=>{Rl(e.inputs,t),e.compute(ti(e.inputs,t))}}),Bl,Nl,aa,Ml,Oh,L0=q(()=>{Te(),ie(),tn(),Th(),zh(),xt(),Ah(),oe(),Bl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,g=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let w=s&&s.dims.length!==0,S=n&&n.dims.length!==0;if(w&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,I=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],I=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=E.dims.reduce((O,b)=>O*b,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let O=0;O<E.dims.length;O++)if(E.dims[O]!==1&&E.dims[O]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${O}] = ${E.dims[O]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Nl=ye({perm:[0,2,1,3]}),aa=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ge(i,Nl.perm),{inputs:[i],outputs:[-1]})[0]),i},Ml=(e,t,r,i)=>{let a=7,s=["type","type"],n=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let h=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),y=J("pos_ids",a,n),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(h,g,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Oh=(e,t)=>{var k;let r=Bl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=ye({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,y,_]=!a&&!s?e.compute(Da([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],w,S;if(t.doRotary){let E=e.compute(Ml(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],A=e.inputs[7],O=e.inputs[8],b=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[g,E,A,O],U=[-1];w=e.compute(ti(N,b),{inputs:N,outputs:U})[0],N.splice(0,1,y);let F=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(ti(N,F),{inputs:N,outputs:U})[0]}let v=fr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),$=aa(e,t.doRotary?S:y,r),I=aa(e,_,r);_r(e,v,$,I,void 0,void 0,n,u,void 0,r,l,d)}}),na,Dl,Pl,Rh,W0=q(()=>{ie(),se(),xt(),oe(),na=(e,t,r,i,a,s,n,u)=>{let l=Se(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=a*n,g=64;h===1&&(g=256);let y=[a,n,s/l],_=[a,n,2],w=["rank","type","type"],S=[];S.push(...te(y,_));let v=$=>{let I=M("x",t.dataType,3,l),k=M("scale",r.dataType,r.dims),E=M("bias",i.dataType,i.dims),A=J("output",1,3,2),O=[I,k,E,A];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${$.declareVariables(...O)}
  ${$.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${vt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Dl=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],u=i[1],l=R.sizeFromDimension(i,s),d=Se(l),c=R.size(a)/d,h=na(e,t[0],t[1],t[2],n,l,u,r.epsilon),g=[n,u,l/d],y=[n,u],_=["type","none"],w=S=>{let v=M("x",t[0].dataType,g.length,d),$=M("scale_shift",1,y.length,2),I=J("output",t[0].dataType,g.length,d),k=[v,$,I];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...te(g,y,g)]}),getShaderSource:w},{inputs:[t[0],h]})},Pl=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],u=R.sizeFromDimension(i,1)/n,l=Se(n),d=R.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(n/l)}],h=["type","type"],g=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,y.push(v+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Ge(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,$)=>i[y[$]])),w=na(e,_,t[1],t[2],s,u,n,r.epsilon),S=v=>{let $=Ee(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,k=O=>{let b=O===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${$}(${N}(scale.${b}))`;case 2:return`vec2<${$}>(${N}(scale[0].${b}, scale[1].${b}))`;case 4:return`vec4<${$}>(${N}(scale[0].${b}, scale[1].${b}, scale[2].${b}, scale[3].${b}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=M("input",t[0].dataType,t[0].dims,l),A=J("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],w]})},Rh=(e,t)=>{t.format==="NHWC"?Pl(e,e.inputs,t):Dl(e,e.inputs,t)}}),Ul,ql,Bh,V0=q(()=>{ie(),se(),oe(),Ul=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ql=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],u=a,l=R.normalizeAxis(t.axis,a.length),d=R.sizeToDimension(a,l),c=R.sizeFromDimension(a,l),h=R.size(s.dims),g=n?R.size(n.dims):0;if(h!==c||n&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let y=[];for(let E=0;E<a.length;++E)E<l?y.push(a[E]):y.push(1);let _=Se(c),w=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];n&&w.push("type");let v=r>1,$=r>2,I=E=>{let A=Ee(e[0].dataType),O=[M("x",e[0].dataType,e[0].dims,_),M("scale",s.dataType,s.dims,_)];n&&O.push(M("bias",n.dataType,n.dims,_)),O.push(J("output",e[0].dataType,u,_)),v&&O.push(J("mean_data_output",1,y)),$&&O.push(J("inv_std_output",1,y));let b=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(b).declareVariables(...O)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ea("f32",_)};
    var mean_square_vector = ${Ea("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jt(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jt(A,_,"x[j + offset]")};
      let f32scale = ${jt(A,_,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${jt(A,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return v&&k.push({dims:y,dataType:1}),$&&k.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:I}},Bh=(e,t)=>{Ul(e.inputs),e.compute(ql(e.inputs,t,e.outputCount))}}),Ll,Nh,G0=q(()=>{se(),on(),un(),Ll=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Nh=e=>{Ll(e.inputs);let t=Ft.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(sn(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=R.size(e.inputs[0].dims.slice(0,-2)),n=R.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let u=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,s,r],c=[u,l];e.compute(ei(c,{activation:""},t,d),{inputs:c})}else e.compute(ei(e.inputs,{activation:""},t))}}}),Wl,Vl,Gl,Mh,Dh,H0=q(()=>{ie(),se(),Te(),oe(),Wl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!R.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(R.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},Vl=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=R.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),y=Se(n),_=u.concat([a,n]),w=a>1&&n/y%2===0?2:1,S=R.size(_)/y/w,v=64,$=[],I=[l,a,s/h],k=R.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),$.push(...te(I)),$.push(...te(k)),$.push(...te(e[2].dims)),e.length===4&&$.push(...te(R.convertShape(e[3].dims)));let E=[l,a,n/y];$.push(...te(E));let A=O=>{let b=I.length,N=M("a",e[0].dataType,b,h),U=M("b",12,k.length,g),F=M("scales",e[2].dataType,e[2].dims.length),X=[N,U,F],Y=e.length===4?M("zero_points",12,e[3].dims.length):void 0;Y&&X.push(Y);let z=E.length,W=J("output",e[0].dataType,z,y),j=Ee(e[0].dataType),Q=(()=>{switch(h){case 1:return`array<${j}, 8>`;case 2:return`mat4x2<${j}>`;case 4:return`mat2x4<${j}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ue=Math.floor(32/t.bits),D=Math.floor(ue/8),ae=()=>{let K="";for(let L=0;L<D;L++){let de=L*t.bits*4,Be=de+t.bits;K+=`
          // reuse a data (pass ${L})
            var input_offset${L>0?L:""} = ${L===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${L>0?L:""}: ${Q};
            for (var j${L>0?L:""}: u32 = 0; j${L>0?L:""} < ${8/h}; j${L>0?L:""}++) {
              a_data${L>0?L:""}[j${L>0?L:""}] = ${N.getByOffset(`input_offset${L>0?L:""}`)};
              input_offset${L>0?L:""}++;
            }
          `;for(let ke=0;ke<y*w;ke++)K+=`
            b_value = ${g===1?`b${ke}_data`:`b${ke}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${L*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${de}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Be}u) & b_mask);`}
            b_quantized_values = ${Q}(${Array.from({length:4},(Me,De)=>`${j}(b_value_lower[${De}]), ${j}(b_value_upper[${De}])`).join(", ")});
            b_dequantized_values = ${h===1?`${Q}(${Array.from({length:8},(Me,De)=>`(b_quantized_values[${De}] - ${Y?`zero_point${ke}`:"zero_point"}) * scale${ke}`).join(", ")});`:`(b_quantized_values - ${Q}(${Array(8).fill(`${Y?`zero_point${ke}`:"zero_point"}`).join(",")})) * scale${ke};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(ke/y)}]${y>1?`[${ke%y}]`:""} += ${Array.from({length:8/h},(Me,De)=>`${h===1?`a_data${L>0?L:""}[${De}] * b_dequantized_values[${De}]`:`dot(a_data${L>0?L:""}[${De}], b_dequantized_values[${De}])`}`).join(" + ")};
          `}return K},P=()=>{let K=`
            var col_index = col * ${y};
            ${Y?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${j}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let L=0;L<y*w;L++)K+=`
            let scale${L} = ${F.getByOffset("col_index * nBlocksPerCol + block")};
            ${Y?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${j}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return K},V=()=>{let K=`col_index = col * ${y};`;for(let L=0;L<y*w;L++)K+=`
            let b${L}_data = ${U.getByIndices(`${U.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return K+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Q};
            var b_dequantized_values: ${Q};`,K};return`
        var<workgroup> workgroup_shared: array<${W.type.value}, ${w*v}>;
        ${O.declareVariables(...X,W)}
        ${O.mainStart([v,1,1])}
          let output_indices = ${W.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${P()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${V()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ae()}
                word_offset += ${ue/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${W.setByIndices(`${W.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${y};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:$}),getShaderSource:A}},Gl=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=R.size(u),d=e[1].dims[2]/4,c=e[0].dataType,h=Se(t.k),g=Se(d),y=u.concat([a,n]),_=128,w=n%8===0?8:n%4===0?4:1,S=_/w,v=Math.floor(32/t.bits),$=S*g*v,I=$/h,k=$/t.blockSize,E=R.size(y)/w,A=[],O=[l,a,s/h],b=R.convertShape(e[1].dims).slice();b.splice(-1,1,d/g),A.push(...te(O)),A.push(...te(b)),A.push(...te(e[2].dims)),e.length===4&&A.push(...te(R.convertShape(e[3].dims)));let N=[l,a,n];A.push(...te(N));let U=F=>{let X=O.length,Y=M("a",e[0].dataType,X,h),z=M("b",12,b.length,g),W=M("scales",e[2].dataType,e[2].dims.length),j=[Y,z,W],Q=e.length===4?M("zero_points",12,e[3].dims.length):void 0;Q&&j.push(Q);let ue=N.length,D=J("output",e[0].dataType,ue),ae=Ee(e[0].dataType),P=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Y.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${D.type.value}, ${S}>, ${w}>;
        ${F.declareVariables(...j,D)}
        ${F.mainStart([S,w,1])}
          let output_indices = ${D.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Y.getByIndices(`${Y.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Y.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${Q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ae}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ae}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${W.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${z.getByIndices(`${z.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let V=Math.floor(v/8),K="";for(let L=0;L<V;L++){let de=L*t.bits*4,Be=de+t.bits;K+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${L*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${de}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Be}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ae}>(${Array.from({length:4},(ke,Me)=>`${ae}(b_value_lower[${Me}]), ${ae}(b_value_upper[${Me}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ae}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(ke,Me)=>`${`dot(a_data${Me}, b_dequantized_values[${Me}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return K})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${D.type.value} = ${D.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${D.setByIndices(`${D.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:E},programUniforms:A}),getShaderSource:U}},Mh=(e,t)=>{Wl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Gl(e.inputs,t)):e.compute(Vl(e.inputs,t))},Dh=e=>ye(e)}),Hl,jl,Fl,Kl,Zl,Xl,Ql,Yl,Ph,j0=q(()=>{ie(),se(),oe(),Hl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${ee("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ee("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${ee("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Fl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ee("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ee("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ee("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ee("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Kl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ee("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ee("uniforms.x_shape",a,t)})) {
                  k = i32(${ee("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${ee("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Zl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ee("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${ee("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${ee("uniforms.x_shape",a,t)})) {
                  k -= i32(${ee("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${ee("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Xl=(e,t,r)=>{switch(r.mode){case 0:return jl(e,t,r.pads.length);case 1:return Fl(e,t,r.pads.length);case 2:return Kl(e,t,r.pads.length);case 3:return Zl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ql=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=R.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...te(e[0].dims,r));let u=["rank"],l=d=>{let c=J("output",e[0].dataType,r.length),h=M("x",e[0].dataType,i.length),g=h.type.value,y=Xl(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:s}),getShaderSource:l}},Yl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)s[Number(u[l])]=Number(r[l]),s[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>s[Number(l)]=Number(u));let n=[];return s.forEach(u=>n.push(u)),{mode:t.mode,value:i,pads:n}}else return t},Ph=(e,t)=>{Hl(e.inputs);let r=Yl(e.inputs,t);e.compute(Ql(e.inputs,r),{inputs:[0]})}}),or,sa,oa,ua,la,Jl,ed,da,pa,Uh,qh,ca,Lh,Wh,ha,Vh,Gh,Hh,jh,F0=q(()=>{je(),ie(),se(),oe(),or=e=>{if(we.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},sa=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),u=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Yr.adjustPoolAttributes(r,a,n,u,l,d);let c=Yr.computePoolOutputShape(r,a,u,l,n,d,t.autoPad),h=Object.assign({},t);s?Object.assign(h,{kernelShape:n,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:n,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[h,i?g:c]},oa=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),a=R.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);s.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(w+S),s.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:S}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=R.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,n,!!l,!1,!1]}},ua=(e,t,r,i,a,s,n,u,l,d,c,h)=>{let g=a.format==="NHWC",y=t.type.value,_=J("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",S="",v="",$=r-(g?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let I=r-(g?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
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
              ${S}
              ${w}
              ${v}
              ${n}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,S=a.pads.length,v="";return d?v=`
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

              var offsets: array<u32, ${w}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${ee("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${ee("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ee("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${ee("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${n}

              output[global_idx] = value;
            }`}},la=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jl=e=>`${la(e)};${e.countIncludePad}`,ed=e=>`${la(e)};${e.storageOrder};${e.dilations}`,da=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),pa=(e,t,r,i)=>{let[a,s]=sa(t,i,r),n=M("x",t.dataType,t.dims.length),u=n.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,h,g,y,_]=oa(s,a);c.push(...te(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:c}),getShaderSource:S=>ua(S,n,t.dims.length,s.length,a,l,d,0,h,g,y,_)}},Uh=e=>{let t=e.count_include_pad!==0,r=da(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Jl(i)}},qh=(e,t)=>{or(e.inputs),e.compute(pa("AveragePool",e.inputs[0],!1,t))},ca={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Lh=e=>{let t=e.format;return{format:t,...ca,cacheKey:t}},Wh=(e,t)=>{or(e.inputs),e.compute(pa("GlobalAveragePool",e.inputs[0],!0,t))},ha=(e,t,r,i)=>{let[a,s]=sa(t,i,r),n=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),d=["rank"],[c,h,g,y,_]=oa(s,a);return c.push(...te(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:c}),getShaderSource:w=>ua(w,l,t.dims.length,s.length,a,n,u,t.dataType===10?-65504:-1e5,h,g,y,_)}},Vh=(e,t)=>{or(e.inputs),e.compute(ha("MaxPool",e.inputs[0],!1,t))},Gh=e=>{let t=e.storage_order,r=e.dilations,i=da(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:ed(a)}},Hh=e=>{let t=e.format;return{format:t,...ca,cacheKey:t}},jh=(e,t)=>{or(e.inputs),e.compute(ha("GlobalMaxPool",e.inputs[0],!0,t))}}),td,rd,Fh,Kh,K0=q(()=>{ie(),se(),Te(),oe(),td=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},rd=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,u=R.size(s),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(R.size(h.dims)/4)]:h.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,w=Se(u),S=y&&(!l||w===4),v=S?w:1,$=S&&!l?w:1,I=M("input",l?12:i,d.length,$),k=M("scale",n,c.length),E=h?M("zero_point",l?12:i,g.length):void 0,A=J("output",n,s.length,v),O=[I,k];E&&O.push(E);let b=[d,c];h&&b.push(g);let N=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...te(...b,s)],U=F=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${F.registerUniforms(X).declareVariables(...O,A)}
      ${F.mainStart()}
          ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:U,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:N})}},Fh=(e,t)=>{td(e.inputs,t),e.compute(rd(e.inputs,t))},Kh=e=>ye({axis:e.axis,blockSize:e.blockSize})}),id,ad,Zh,Z0=q(()=>{je(),ie(),oe(),id=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},ad=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,u=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...te(s)],l=d=>{let c=J("output",i,s.length),h=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u})}},Zh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),we.webgpu.validateInputContent&&id(t,r,i),e.compute(ad(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),nd,sd,Xh,Qh,X0=q(()=>{ie(),se(),Te(),oe(),nd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
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
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},sd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(R.sizeToDimension(i,i.length-1)/s),u=i[i.length-1],l=R.sizeFromDimension(r,u),d=[{type:12,data:n},{type:12,data:u},{type:12,data:l},...te(e[1].dims,e[2].dims,a)],c=h=>{let g=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?kp("output",e[0].dataType,a.length):J("output",e[0].dataType,a.length,s);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${nd(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:c}},Xh=e=>ye({reduction:e.reduction}),Qh=(e,t)=>{e.compute(sd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),od,ud,ld,fa,dd,pd,cd,hd,fd,md,gd,yd,ma,_d,bd,wd,$d,vd,Yh,Jh,Q0=q(()=>{ie(),se(),Te(),oe(),od=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ud=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},ld=(e,t,r,i,a,s)=>{let[n,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");od(i,t),t.axes.length>0&&ud(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},fa=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,dd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${fa("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${fa("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",pd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",cd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},hd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},fd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},md=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ee("uniforms.scales","i",i)};
        var roi_low = ${ee("uniforms.roi","i",a)};
        var roi_hi = ${ee("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ee("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,gd=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ee("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ee("uniforms.roi","i",s)};
          var roi_hi = ${ee("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",i.length)};
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
    }`,yd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ee("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ma=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",_d=(e,t,r,i,a)=>{let[s,n,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${ma(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${n}];
      var col:${d} = originalIndices[${u}];
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
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},bd=(e,t,r,i,a,s,n,u,l,d)=>{let c=r.length===2,[h,g]=c?[0,1]:[2,3],y=e.type.value,_=w=>{let S=w===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[w]},
        ${i[w]}, ${r[w]}, ${s[w]}, ${s[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
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
    `},wd=(e,t,r,i,a)=>{let[s,n,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${ma(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${n}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
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
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
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
    }`},$d=(e,t,r,i,a,s)=>{let n=e.dims,u=cd(s,t.axes,n.length),l=hd(n,i,a,t.axes),d=i.slice();i.length===0&&(d=n.map(($,I)=>$===0?1:l[I]/$),t.keepAspectRatioPolicy!=="stretch"&&(l=fd(n,d,t)));let c=J("output",e.dataType,l.length),h=M("input",e.dataType,n.length),g=R.size(l),y=n.length===l.length&&n.every(($,I)=>$===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=h.type.value,v=$=>`
      ${y?"":`
      ${dd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${yd(h,n)};
              ${pd(t.nearestMode,r,S)};
              ${gd(h,c,n,l,d.length,u.length,_)};
              `;case"linear":return`
              ${md(c,n,l,d.length,u.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${_d(h,c,n,_,w)}`;if(n.length===3||n.length===5)return`${wd(h,c,n,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${bd(h,c,n,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(h,c)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...te(n,l)]})}},vd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Yh=(e,t)=>{let r=[],i=[],a=[],s=vd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ld(e.inputs,t,s,r,i,a),e.compute($d(e.inputs[0],t,s,r,i,a),{inputs:[0]})},Jh=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ye({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),xd,Sd,ef,Y0=q(()=>{ie(),se(),oe(),xd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Sd=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=R.size(s),u=s,l=n,d=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],h=!a&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,w=r>3,S=64,v=Se(d),$=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=E=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[M("x",e[0].dataType,e[0].dims,v),M("skip",e[1].dataType,e[1].dims,v),M("gamma",e[2].dataType,e[2].dims,v)];h&&O.push(M("beta",e[3].dataType,e[3].dims,v)),g&&O.push(M("bias",e[4].dataType,e[4].dims,v)),O.push(J("output",e[0].dataType,u,v)),y&&O.push(J("mean_output",1,c)),_&&O.push(J("inv_std_output",1,c)),w&&O.push(J("input_skip_bias_sum",e[0].dataType,u,v));let b=Ee(e[0].dataType),N=Ee(1,v);return`

      ${E.registerUniforms(A).declareVariables(...O)}
      var<workgroup> sum_shared : array<${N}, ${S}>;
      var<workgroup> sum_squared_shared : array<${N}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":b+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${jt(b,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
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
        let mean = ${vt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vt("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${b}(mean)`}) *
            ${b}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${w}`,inputDependencies:e.map((E,A)=>"type")},getShaderSource:I,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:$})}},ef=(e,t)=>{xd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Sd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),kd,ur,Td,ga,Id,Ed,tf,rf,J0=q(()=>{ie(),se(),Te(),oe(),kd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},ur=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Td=(e,t)=>{if(e.length>1){let r=ur(e,1),i=ur(e,2),a=ur(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ye({starts:r,ends:i,axes:a})}else return t},ga=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Id=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
            let steps_i = ${ee("uniforms.steps","i",r.length)};
            let signs_i = ${ee("uniforms.signs","i",r.length)};
            let starts_i = ${ee("uniforms.starts","i",r.length)};
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
      }`,Ed=(e,t)=>{let r=e[0].dims,i=R.size(r),a=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=ur(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((v,$)=>ga(v,$,r,a,s)),u=t.ends.map((v,$)=>ga(v,$,r,a,s));if(a.length!==n.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(n.splice(v,0,0),u.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,$,I)=>{if(v<0){let k=(u[$]-n[$])/v,E=n[$],A=E+k*s[$];n[$]=A,u[$]=E,I[$]=-v}});let d=r.slice(0);a.forEach((v,$)=>{d[v]=Math.ceil((u[v]-n[v])/s[v])});let c={dims:d,dataType:e[0].dataType},h=J("output",e[0].dataType,d.length),g=M("input",e[0].dataType,e[0].dims.length),y=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:y},{type:12,data:n},{type:6,data:l},{type:12,data:s},...te(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(_).declareVariables(g,h)}
        ${Id(g,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},tf=(e,t)=>{kd(e.inputs,t);let r=Td(e.inputs,t);e.compute(Ed(e.inputs,r),{inputs:[0]})},rf=e=>{let t=e.starts,r=e.ends,i=e.axes;return ye({starts:t,ends:r,axes:i})}}),zd,Cd,af,nf,ey=q(()=>{ie(),se(),Te(),xt(),oe(),zd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Cd=(e,t)=>{let r=e.inputs[0],i=r.dims,a=R.size(i),s=i.length,n=R.normalizeAxis(t.axis,s),u=n<i.length-1,l,d=[];u?(d=Array.from({length:s},(O,b)=>b),d[n]=s-1,d[s-1]=n,l=e.compute(Ge(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[s-1],g=a/h,y=Se(h),_=h/y,w=64;g===1&&(w=256);let S=(O,b)=>b===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:b===2?`max(${O}.x, ${O}.y)`:b===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,v=M("x",l.dataType,l.dims,y),$=J("result",l.dataType,l.dims,y),I=v.type.value,k=Ee(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,E=O=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${O.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
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
          rowMaxShared = ${I}(${S("threadShared[0]",y)});
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
          rowSumShared = ${I}(${vt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ge(A,d),{inputs:[A]})},af=(e,t)=>{zd(e.inputs),Cd(e,t)},nf=e=>ye({axis:e.axis})}),ya,Ad,Od,Rd,sf,ty=q(()=>{ie(),se(),oe(),ya=e=>Array.from(e.getBigInt64Array(),Number),Ad=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ya(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Od=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Rd=(e,t)=>{let r=e[0].dims,i=t??ya(e[1]),a=Od(r,i),s=R.size(a),n=e[0].dataType,u=M("input",n,r.length),l=J("output",n,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...te(e[0].dims,a)]}),getShaderSource:d}},sf=e=>{Ad(e.inputs),e.compute(Rd(e.inputs),{inputs:[0]})}}),Bd,Nd,of,ry=q(()=>{ie(),se(),oe(),Bd=(e,t,r,i,a)=>{let s=J("output_data",a,r.length,4),n=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,g,y)=>`select(${g}, ${h}, ${y})`;if(!i)d=s.setByOffset("global_idx",c(n.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
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
            ${g}[${y}] = ${_}(${c(w,S,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Nd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(R.areEqual(t,r)&&R.areEqual(r,i)),n=t,u=R.size(t);if(s){let d=Ft.calcShape(Ft.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");n=d,u=R.size(n)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Bd(d,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...te(i,t,r,n)]})}},of=e=>{e.compute(Nd(e.inputs))}}),uf,iy=q(()=>{y0(),tn(),_0(),b0(),w0(),$0(),v0(),I0(),z0(),C0(),A0(),O0(),R0(),B0(),N0(),M0(),D0(),P0(),U0(),q0(),L0(),W0(),V0(),G0(),H0(),Th(),j0(),F0(),K0(),Z0(),X0(),en(),Q0(),Ah(),Y0(),J0(),ey(),zh(),ty(),xt(),rn(),ry(),uf=new Map([["Abs",[ec]],["Acos",[tc]],["Acosh",[rc]],["Add",[Mc]],["ArgMax",[Xp,Ca]],["ArgMin",[Zp,Ca]],["Asin",[ic]],["Asinh",[ac]],["Atan",[nc]],["Atanh",[sc]],["Attention",[Qp]],["AveragePool",[qh,Uh]],["BatchNormalization",[Yp]],["BiasAdd",[Jp]],["BiasSplitGelu",[Nc]],["Cast",[uc,oc]],["Ceil",[dc]],["Clip",[lc]],["Concat",[jc,Fc]],["Conv",[Ma,Na]],["ConvTranspose",[ih,rh]],["Cos",[pc]],["Cosh",[cc]],["CumSum",[ah,nh]],["DepthToSpace",[sh,oh]],["DequantizeLinear",[Fh,Kh]],["Div",[Dc]],["Einsum",[uh,lh]],["Elu",[hc,hr]],["Equal",[Pc]],["Erf",[fc]],["Exp",[mc]],["Expand",[dh]],["FastGelu",[ph]],["Floor",[gc]],["FusedConv",[Ma,Na]],["Gather",[hh,ch]],["GatherElements",[bh,_h]],["GatherBlockQuantized",[gh,yh]],["GatherND",[fh,mh]],["Gelu",[yc]],["Gemm",[$h,wh]],["GlobalAveragePool",[Wh,Lh]],["GlobalMaxPool",[jh,Hh]],["Greater",[Wc]],["GreaterOrEqual",[Gc]],["GridSample",[vh,xh]],["GroupQueryAttention",[Oh]],["HardSigmoid",[kc,Sc]],["InstanceNormalization",[Rh]],["LayerNormalization",[Bh]],["LeakyRelu",[_c,hr]],["Less",[Vc]],["LessOrEqual",[Hc]],["Log",[Rc]],["MatMul",[Nh]],["MatMulNBits",[Mh,Dh]],["MaxPool",[Vh,Gh]],["Mul",[Uc]],["MultiHeadAttention",[kh,Sh]],["Neg",[wc]],["Not",[bc]],["Pad",[Ph]],["Pow",[qc]],["QuickGelu",[Bc,hr]],["Range",[Zh]],["Reciprocal",[$c]],["ReduceMin",[Gp]],["ReduceMean",[Up]],["ReduceMax",[Vp]],["ReduceSum",[jp]],["ReduceProd",[Hp]],["ReduceL1",[qp]],["ReduceL2",[Lp]],["ReduceLogSum",[Kp]],["ReduceLogSumExp",[Wp]],["ReduceSumSquare",[Fp]],["Relu",[vc]],["Resize",[Yh,Jh]],["RotaryEmbedding",[Ch]],["ScatterND",[Qh,Xh]],["Sigmoid",[xc]],["Sin",[Tc]],["Sinh",[Ic]],["Slice",[tf,rf]],["SkipLayerNormalization",[ef]],["Split",[Ih,Eh]],["Sqrt",[Ec]],["Softmax",[af,nf]],["Sub",[Lc]],["Tan",[zc]],["Tanh",[Cc]],["ThresholdedRelu",[Oc,hr]],["Tile",[sf]],["Transpose",[Ip,Ep]],["Where",[of]]])}),lf,ay=q(()=>{je(),ct(),oe(),lf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){ot(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),tt(e.programInfo.name)}dispose(){}build(e,t){ot(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Tp(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,u=r.createShaderModule({code:n,label:e.name});fe("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return tt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),df={};Zt(df,{WebGpuBackend:()=>pf});var Md,Dd,Pd,pf,ny=q(()=>{je(),ie(),ct(),$p(),m0(),iy(),ay(),Md=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Dd=(e,t,r)=>{var a,s;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Md(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Pd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},pf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new Pd(n),this.gpuDataManager=Sp(this),this.programManager=new lf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Xa(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ot(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let s=r[a],n=s.kernelId,u=this.kernels.get(n),l=u.kernelType,d=u.kernelName,c=s.programName,h=s.inputTensorViews,g=s.outputTensorViews,y=t[a*2],_=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let w=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:pt(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:pt(v.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:c,startTime:w,endTime:S});else{let v="";h.forEach((I,k)=>{v+=`input[${k}]: [${I.dims}] | ${pt(I.dataType)}, `});let $="";g.forEach((I,k)=>{$+=`output[${k}]: [${I.dims}] | ${pt(I.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${c}" ${v}${$}start time: ${w} ns, execution time: ${S-w} ns`)}Kr("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),tt()}run(e,t,r,i,a,s){ot(e.name);let n=[];for(let $=0;$<t.length;++$){let I=t[$].data;if(I===0)continue;let k=this.gpuDataManager.get(I);if(!k)throw new Error(`no GPU data for input: ${I}`);n.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map(($,I)=>I):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let h=[],g=[];for(let $=0;$<u.length;++$){if(!Number.isInteger(c[$])||c[$]<-3||c[$]>=s)throw new Error(`Invalid output index: ${c[$]}`);if(c[$]===-3)continue;let I=c[$]===-1,k=c[$]===-2,E=I||k?a(u[$].dataType,u[$].dims):i(c[$],u[$].dataType,u[$].dims);if(h.push(E),E.data===0)continue;let A=this.gpuDataManager.get(E.data);if(!A)throw new Error(`no GPU data for output: ${E.data}`);if(I&&this.temporaryData.push(A),k){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(A)}g.push(A)}if(n.length!==t.length||g.length!==h.length){if(g.length===0)return tt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let $=0,I=[];d.forEach(O=>{let b=typeof O.data=="number"?[O.data]:O.data;if(b.length===0)return;let N=O.type===10?2:4,U,F;O.type===10?(F=b.length>4?16:b.length>2?8:b.length*N,U=b.length>4?16:N*b.length):(F=b.length<=2?b.length*N:16,U=16),$=Math.ceil($/F)*F,I.push($);let X=O.type===10?8:4;$+=b.length>4?Math.ceil(b.length/X)*U:b.length*N});let k=16;$=Math.ceil($/k)*k;let E=new ArrayBuffer($);d.forEach((O,b)=>{let N=I[b],U=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(E,N,U.length).set(U);else if(O.type===12)new Uint32Array(E,N,U.length).set(U);else if(O.type===10)new Uint16Array(E,N,U.length).set(U);else if(O.type===1)new Float32Array(E,N,U.length).set(U);else throw new Error(`Unsupported uniform type: ${pt(O.type)}`)});let A=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,E,0,$),this.gpuDataManager.release(A.id),y={offset:0,size:$,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),w=_[1]===1&&_[2]===1,S=Dd(e,t,w),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),fe("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let $=0;$<d.length;$++){let I=d[$],k=I.type,E=typeof I.data=="number"?1:I.data.length,[A,O]=v.uniformVariablesInfo[$];if(k!==A||E!==O)throw new Error(`Uniform variable ${$} mismatch: expect type ${A} with size ${O}, got type ${k} with size ${E} in program "${v.programInfo.name}".`)}}if(fe("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,n,g,_,y),tt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=uf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),fe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ia(this,e,t);return Qa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){fe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){fe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){fe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),cf={};Zt(cf,{init:()=>hf});var Wr,Ud,hf,sy=q(()=>{ie(),ct(),se(),f0(),Wr=class ff{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new ff(this.module,this.dataType,this.data,t)}},Ud=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let u=[];for(let l=0;l<n;l++){let d=Number(e.getValue(i*a++,s)),c=Number(e.getValue(i*a++,"*")),h=Number(e.getValue(i*a++,s)),g=[];for(let y=0;y<h;y++)g.push(Number(e.getValue(i*a++,s)));u.push(new Wr(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,l,d)=>new Wr(this.module,l,this.output(u,d),d),s=(u,l)=>{let d=Bt(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Wr(this.module,u,c,l)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},hf=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(ny(),yr(df)).WebGpuBackend,n=new s;await n.initialize(r,i),a("webgpu",[n,u=>n.alloc(Number(u)),u=>n.free(u),(u,l,d,c=!1)=>{if(c)fe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),n.memcpy(Number(u),Number(l));else{fe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));n.upload(Number(l),h)}},async(u,l,d)=>{fe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await n.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>n.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>n.releaseKernel(u),(u,l,d,c)=>{fe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let h=new Ud(t,n,Number(l));return n.computeKernel(Number(u),h,c)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new xp(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,u,l,d,c)=>s.ensureTensor(n,u,l,d,c),(n,u)=>{s.uploadTensor(n,u)},async(n,u)=>s.downloadTensor(n,u),(n,u)=>s.registerMLContext(n,u),!!r.trace])}}}),qd,ln,dn,wt,Ld,_a,ri,pn,cn,ba,hn,fn,mn,mf=q(()=>{je(),p0(),c0(),ie(),qt(),ja(),yp(),qd=(e,t)=>{$e()._OrtInit(e,t)!==0&&_e("Can't initialize onnxruntime.")},ln=async e=>{qd(e.wasm.numThreads,Qr(e.logLevel))},dn=async(e,t)=>{var i,a;(a=(i=$e()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(sy(),yr(cf)).init;t==="webgpu"&&await s("webgpu",$e(),e,r),t==="webnn"&&await s("webnn",$e(),e)}},wt=new Map,Ld=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&_e("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},_a=(e,t)=>{let r=$e(),i=r.stackSave(),a=0;try{let s=r.PTR_SIZE,n=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&_e("Can't get session input/output metadata.");let u=Number(r.getValue(n,"*"));a=Number(r.getValue(n+s,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let h=0;h<d;h++){let g=Number(r.getValue(a+8+h*s,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(h+d)*s,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ri=e=>{let t=$e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},pn=async(e,t)=>{var h,g,y,_;let r,i,a=$e();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ri(e);let s=0,n=0,u=0,l=[],d=[],c=[];try{if([n,l]=await gp(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let b=[];for(let N of t.externalData){let U=typeof N=="string"?N:N.path;b.push(Za(typeof N=="string"?N:N.data).then(F=>{a.mountExternalData(U,F)}))}await Promise.all(b)}for(let b of(t==null?void 0:t.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof b!="string"){let N=b,U=N==null?void 0:N.context,F=N==null?void 0:N.gpuDevice,X=N==null?void 0:N.deviceType,Y=N==null?void 0:N.powerPreference;U?a.currentContext=U:F?a.currentContext=await a.webnnCreateMLContext(F):a.currentContext=await a.webnnCreateMLContext({deviceType:X,powerPreference:Y})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),(h=a.webgpuOnCreateSession)==null||h.call(a,s),s===0&&_e("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[w,S]=Ld(s),v=!!(t!=null&&t.enableGraphCapture),$=[],I=[],k=[],E=[],A=[];for(let b=0;b<w;b++){let[N,U,F]=_a(s,b);N===0&&_e("Can't get an input name."),d.push(N);let X=a.UTF8ToString(N);$.push(X),k.push(U===0?{name:X,isTensor:!1}:{name:X,isTensor:!0,type:pt(U),shape:F})}for(let b=0;b<S;b++){let[N,U,F]=_a(s,b+w);N===0&&_e("Can't get an output name."),c.push(N);let X=a.UTF8ToString(N);I.push(X),E.push(U===0?{name:X,isTensor:!1}:{name:X,isTensor:!0,type:pt(U),shape:F});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){A.push("gpu-buffer");continue}let Y=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[X])??"cpu",z=a.webnnIsGraphOutput;if(Y==="cpu"&&z&&z(s,X)){A.push("ml-tensor-cpu-output");continue}if(Y!=="cpu"&&Y!=="cpu-pinned"&&Y!=="gpu-buffer"&&Y!=="ml-tensor")throw new Error(`Not supported preferred output location: ${Y}.`);if(v&&Y!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${Y}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);A.push(Y)}}let O=null;return A.some(b=>b==="gpu-buffer"||b==="ml-tensor"||b==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(s),u===0&&_e("Can't create IO binding."),O={handle:u,outputPreferredLocations:A,outputPreferredLocationsEncoded:A.map(b=>b==="ml-tensor-cpu-output"?"ml-tensor":b).map(b=>ka(b))}),wt.set(s,[s,d,c,O,v,!1]),[s,$,I,k,E]}catch(w){throw d.forEach(S=>a._OrtFree(S)),c.forEach(S=>a._OrtFree(S)),u!==0&&a._OrtReleaseBinding(u)!==0&&_e("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&_e("Can't release session."),w}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&_e("Can't release session options."),l.forEach(w=>a._free(w)),(_=a.unmountExternalData)==null||_.call(a)}},cn=e=>{var l,d,c;let t=$e(),r=wt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,u]=r;n&&(u&&t._OrtClearBoundOutputs(n.handle)!==0&&_e("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&_e("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),a.forEach(h=>t._OrtFree(h)),s.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&_e("Can't release session."),wt.delete(e)},ba=async(e,t,r,i,a,s,n=!1)=>{if(!e){t.push(0);return}let u=$e(),l=u.PTR_SIZE,d=e[0],c=e[1],h=e[3],g=h,y,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;_=Bt(Rt(d),c);{let $=u.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=$(i,s,v,_)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;_=Bt(Rt(d),c);let $=u.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=$(i,v,Rt(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,y=u._malloc(_),r.push(y);for(let $=0;$<v.length;$++){if(typeof v[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);u.setValue(y+$*l,Je(v[$],r),"*")}}else{let $=u.webnnIsGraphInput,I=u.webnnIsGraphOutput;if(d!=="string"&&$&&I){let k=u.UTF8ToString(a);if($(i,k)||I(i,k)){let E=Rt(d);_=Bt(E,c),g="ml-tensor";let A=u.webnnCreateTemporaryTensor,O=u.webnnUploadTensor;if(!A||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let b=await A(i,E,c);O(b,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=b}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let w=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach(($,I)=>u.setValue(S+I*l,$,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Rt(d),y,_,S,c.length,ka(g));v===0&&_e(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{u.stackRestore(w)}},hn=async(e,t,r,i,a,s)=>{var X,Y,z,W;let n=$e(),u=n.PTR_SIZE,l=wt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],g=l[3],y=l[4],_=l[5],w=t.length,S=i.length,v=0,$=[],I=[],k=[],E=[],A=[],O=n.stackSave(),b=n.stackAlloc(w*u),N=n.stackAlloc(w*u),U=n.stackAlloc(S*u),F=n.stackAlloc(S*u);try{[v,$]=mp(s),Nt("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)await ba(r[D],I,E,e,c[t[D]],t[D],y);for(let D=0;D<S;D++)await ba(a[D],k,E,e,h[i[D]],w+i[D],y);Mt("wasm prepareInputOutputTensor");for(let D=0;D<w;D++)n.setValue(b+D*u,I[D],"*"),n.setValue(N+D*u,c[t[D]],"*");for(let D=0;D<S;D++)n.setValue(U+D*u,k[D],"*"),n.setValue(F+D*u,h[i[D]],"*");if(g&&!_){let{handle:D,outputPreferredLocations:ae,outputPreferredLocationsEncoded:P}=g;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);Nt("wasm bindInputsOutputs");for(let V=0;V<w;V++){let K=t[V];await n._OrtBindInput(D,c[K],I[V])!==0&&_e(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<S;V++){let K=i[V];(X=a[V])!=null&&X[3]?(A.push(k[V]),n._OrtBindOutput(D,h[K],k[V],0)!==0&&_e(`Can't bind pre-allocated output[${V}] for session=${e}.`)):n._OrtBindOutput(D,h[K],0,P[K])!==0&&_e(`Can't bind output[${V}] to ${ae[V]} for session=${e}.`)}Mt("wasm bindInputsOutputs"),wt.set(e,[d,c,h,g,y,!0])}(Y=n.jsepOnRunStart)==null||Y.call(n,d),(z=n.webnnOnRunStart)==null||z.call(n,d);let j;g?j=await n._OrtRunWithBinding(d,g.handle,S,U,v):j=await n._OrtRun(d,N,b,w,F,S,U,v),j!==0&&_e("failed to call OrtRun().");let Q=[],ue=[];Nt("wasm ProcessOutputTensor");for(let D=0;D<S;D++){let ae=Number(n.getValue(U+D*u,"*"));if(ae===k[D]||A.includes(k[D])){Q.push(a[D]),ae!==k[D]&&n._OrtReleaseTensor(ae)!==0&&_e("Can't release tensor.");continue}let P=n.stackSave(),V=n.stackAlloc(4*u),K=!1,L,de=0;try{n._OrtGetTensorData(ae,V,V+u,V+2*u,V+3*u)!==0&&_e(`Can't access output tensor data on index ${D}.`);let Be=u===4?"i32":"i64",ke=Number(n.getValue(V,Be));de=n.getValue(V+u,"*");let Me=n.getValue(V+u*2,"*"),De=Number(n.getValue(V+u*3,Be)),qe=[];for(let ve=0;ve<De;ve++)qe.push(Number(n.getValue(Me+ve*u,Be)));n._OrtFree(Me)!==0&&_e("Can't free memory for tensor dims.");let Pe=qe.reduce((ve,ne)=>ve*ne,1);L=pt(ke);let ht=g==null?void 0:g.outputPreferredLocations[i[D]];if(L==="string"){if(ht==="gpu-buffer"||ht==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let ne=0;ne<Pe;ne++){let Le=n.getValue(de+ne*u,"*"),br=n.getValue(de+(ne+1)*u,"*"),Xt=ne===Pe-1?void 0:br-Le;ve.push(n.UTF8ToString(Le,Xt))}Q.push([L,qe,ve,"cpu"])}else if(ht==="gpu-buffer"&&Pe>0){let ve=n.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ne=ve(de),Le=Bt(ke,Pe);if(Le===void 0||!Fa(L))throw new Error(`Unsupported data type: ${L}`);K=!0,Q.push([L,qe,{gpuBuffer:ne,download:n.jsepCreateDownloader(ne,Le,L),dispose:()=>{n._OrtReleaseTensor(ae)!==0&&_e("Can't release tensor.")}},"gpu-buffer"])}else if(ht==="ml-tensor"&&Pe>0){let ve=n.webnnEnsureTensor,ne=n.webnnIsGraphInputOutputTypeSupported;if(!ve||!ne)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Bt(ke,Pe)===void 0||!Ka(L))throw new Error(`Unsupported data type: ${L}`);if(!ne(e,L,!1))throw new Error(`preferredLocation "ml-tensor" for ${L} output is not supported by current WebNN Context.`);let Le=await ve(e,de,ke,qe,!1);K=!0,Q.push([L,qe,{mlTensor:Le,download:n.webnnCreateMLTensorDownloader(de,L),dispose:()=>{n.webnnReleaseTensorId(de),n._OrtReleaseTensor(ae)}},"ml-tensor"])}else if(ht==="ml-tensor-cpu-output"&&Pe>0){let ve=n.webnnCreateMLTensorDownloader(de,L)(),ne=Q.length;K=!0,ue.push((async()=>{let Le=[ne,await ve];return n.webnnReleaseTensorId(de),n._OrtReleaseTensor(ae),Le})()),Q.push([L,qe,[],"cpu"])}else{let ve=ii(L),ne=new ve(Pe);new Uint8Array(ne.buffer,ne.byteOffset,ne.byteLength).set(n.HEAPU8.subarray(de,de+ne.byteLength)),Q.push([L,qe,ne,"cpu"])}}finally{n.stackRestore(P),L==="string"&&de&&n._free(de),K||n._OrtReleaseTensor(ae)}}g&&!y&&(n._OrtClearBoundOutputs(g.handle)!==0&&_e("Can't clear bound outputs."),wt.set(e,[d,c,h,g,y,!1]));for(let[D,ae]of await Promise.all(ue))Q[D][2]=ae;return Mt("wasm ProcessOutputTensor"),Q}finally{(W=n.webnnOnRunEnd)==null||W.call(n,d),n.stackRestore(O),I.forEach(j=>n._OrtReleaseTensor(j)),k.forEach(j=>n._OrtReleaseTensor(j)),E.forEach(j=>n._free(j)),v!==0&&n._OrtReleaseRunOptions(v),$.forEach(j=>n._free(j))}},fn=e=>{let t=$e(),r=wt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&_e("Can't get an profile file name."),t._OrtFree(a)},mn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),$t,Ue,Gt,lr,dr,Vr,wa,Gr,Ct,At,Wd,gf,yf,_f,bf,wf,$f,vf,xf=q(()=>{je(),mf(),qt(),Ga(),$t=()=>!!we.wasm.proxy&&typeof document<"u",Gt=!1,lr=!1,dr=!1,Gr=new Map,Ct=(e,t)=>{let r=Gr.get(e);r?r.push(t):Gr.set(e,[t])},At=()=>{if(Gt||!lr||dr||!Ue)throw new Error("worker not ready")},Wd=e=>{switch(e.data.type){case"init-wasm":Gt=!1,e.data.err?(dr=!0,wa[1](e.data.err)):(lr=!0,wa[0]()),Vr&&(URL.revokeObjectURL(Vr),Vr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},gf=async()=>{if(!lr){if(Gt)throw new Error("multiple calls to 'initWasm()' detected.");if(dr)throw new Error("previous call to 'initWasm()' failed.");if(Gt=!0,$t())return new Promise((e,t)=>{Ue==null||Ue.terminate(),hp().then(([r,i])=>{try{Ue=i,Ue.onerror=s=>t(s),Ue.onmessage=Wd,wa=[e,t];let a={type:"init-wasm",in:we};!a.in.wasm.wasmPaths&&(r||Sa)&&(a.in.wasm.wasmPaths={wasm:new URL("/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),Ue.postMessage(a),Vr=r}catch(a){t(a)}},t)});try{await Ha(we.wasm),await ln(we),lr=!0}catch(e){throw dr=!0,e}finally{Gt=!1}}},yf=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:we}};Ue.postMessage(i)});await dn(we,e)},_f=async e=>$t()?(At(),new Promise((t,r)=>{Ct("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ue.postMessage(i,[e.buffer])})):ri(e),bf=async(e,t)=>{if($t()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return At(),new Promise((r,i)=>{Ct("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ue.postMessage(a,s)})}else return pn(e,t)},wf=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("release",[t,r]);let i={type:"release",in:e};Ue.postMessage(i)});cn(e)},$f=async(e,t,r,i,a,s)=>{if($t()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return At(),new Promise((n,u)=>{Ct("run",[n,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};Ue.postMessage(d,mn(l))})}else return hn(e,t,r,i,a,s)},vf=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ue.postMessage(i)});fn(e)}}),$a,Vd,Sf,oy=q(()=>{je(),xf(),ie(),Va(),yp(),$a=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Vd=e=>{switch(e[3]){case"cpu":return new et(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return et.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ka(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return et.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Sf=class{async fetchModelAndCopyToWasmMemory(e){return _f(await Za(e))}async loadModel(e,t){ot();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await bf(r,t),tt()}async dispose(){return wf(this.sessionId)}async run(e,t,r){ot();let i=[],a=[];Object.entries(e).forEach(h=>{let g=h[0],y=h[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),a.push(_)});let s=[],n=[];Object.entries(t).forEach(h=>{let g=h[0],y=h[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);s.push(y),n.push(_)});let u=i.map((h,g)=>$a(h,()=>`input "${this.inputNames[a[g]]}"`)),l=s.map((h,g)=>h?$a(h,()=>`output "${this.outputNames[n[g]]}"`):null),d=await $f(this.sessionId,a,u,n,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[n[h]]]=s[h]??Vd(d[h]);return tt(),c}startProfiling(){}endProfiling(){vf(this.sessionId)}}}),kf={};Zt(kf,{OnnxruntimeWebAssemblyBackend:()=>Ua,initializeFlags:()=>Pa,wasmBackend:()=>Tf});var Pa,Ua,Tf,uy=q(()=>{je(),xf(),oy(),Pa=()=>{(typeof we.wasm.initTimeout!="number"||we.wasm.initTimeout<0)&&(we.wasm.initTimeout=0);let e=we.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),we.wasm.simd=!1),typeof we.wasm.proxy!="boolean"&&(we.wasm.proxy=!1),typeof we.wasm.trace!="boolean"&&(we.wasm.trace=!1),typeof we.wasm.numThreads!="number"||!Number.isInteger(we.wasm.numThreads)||we.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)we.wasm.numThreads=1;else{let t=typeof navigator>"u"?Fg("node:os").cpus().length:navigator.hardwareConcurrency;we.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ua=class{async init(e){Pa(),await gf(),await yf(e)}async createInferenceSessionHandler(e,t){let r=new Sf;return await r.loadModel(e,t),r}},Tf=new Ua});je();je();je();var ly="1.27.0";{let e=(uy(),yr(kf)).wasmBackend;Ht("webgpu",e,5),Ht("webnn",e,5),Ht("cpu",e,10),Ht("wasm",e,10)}Object.defineProperty(we.versions,"web",{value:ly,enumerable:!0});/**
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
 */const dy=new Set([1,2,3,5,7]),va={1:{ar:"دراجة",en:"bicycle"},2:{ar:"سيارة",en:"car"},3:{ar:"دراجة نارية",en:"motorcycle"},5:{ar:"حافلة",en:"bus"},7:{ar:"شاحنة",en:"truck"}},Oe=640,py=.32,cy=.45;let gr=null,qa="wasm";function hy(){return qa}async function fy(e){if(gr)return;const t=`${e}models/yolo11n.onnx`;we.wasm.numThreads=1;try{we.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.jsep.wasm`},gr=await Zr.create(t,{executionProviders:["webgpu"]}),qa="webgpu"}catch{we.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.wasm`},gr=await Zr.create(t,{executionProviders:["wasm"]}),qa="wasm"}}const Hr=typeof document<"u"?document.createElement("canvas"):null;async function my(e){if(!gr||!Hr)return[];const t=e.videoWidth,r=e.videoHeight;if(!t||!r)return[];Hr.width=Oe,Hr.height=Oe;const i=Hr.getContext("2d",{willReadFrequently:!0}),a=Math.min(Oe/t,Oe/r),s=Math.round(t*a),n=Math.round(r*a),u=(Oe-s)/2,l=(Oe-n)/2;i.fillStyle="#727272",i.fillRect(0,0,Oe,Oe),i.drawImage(e,u,l,s,n);const{data:d}=i.getImageData(0,0,Oe,Oe),c=new Float32Array(3*Oe*Oe),h=Oe*Oe;for(let v=0;v<h;v++)c[v]=d[v*4]/255,c[v+h]=d[v*4+1]/255,c[v+2*h]=d[v*4+2]/255;const g=new et("float32",c,[1,3,Oe,Oe]),_=(await gr.run({images:g})).output0.data,w=8400,S=[];for(let v=0;v<w;v++){let $=0,I=-1;for(let b=0;b<80;b++){const N=_[(4+b)*w+v];N>$&&($=N,I=b)}if($<py||!dy.has(I))continue;const k=_[v],E=_[w+v],A=_[2*w+v],O=_[3*w+v];S.push({x:(k-A/2-u)/a,y:(E-O/2-l)/a,w:A/a,h:O/a,score:$,classId:I})}return gy(S)}function If(e,t){const r=Math.max(e.x,t.x),i=Math.max(e.y,t.y),a=Math.min(e.x+e.w,t.x+t.w),s=Math.min(e.y+e.h,t.y+t.h),n=Math.max(0,a-r)*Math.max(0,s-i);return n/(e.w*e.h+t.w*t.h-n||1)}function gy(e){const t=[...e].sort((i,a)=>a.score-i.score),r=[];for(const i of t)r.every(a=>If(a,i)<cy)&&r.push(i);return r}function yy(e){let t=1,r=[];for(const i of e){for(const a of i.boxes){let s=null,n=.25;for(const u of r){const l=If(a,u);l>n&&(n=l,s=u)}a.trackId=(s==null?void 0:s.trackId)??t++}r=i.boxes}return e}function _y(e,t,r){const i=t*r,a=new Map;let s=0,n=0;const u=new Set;for(const l of e)for(const d of l.boxes){if(d.trackId===void 0)continue;const h=d.y+d.h/2>i?1:-1,g=a.get(d.trackId);g!==void 0&&g!==h&&!u.has(d.trackId)&&(u.add(d.trackId),h===1?s+=1:n+=1),a.set(d.trackId,h)}return{down:s,up:n,total:s+n}}const by="_screen_1mtor_1",wy="_header_1mtor_11",$y="_back_1mtor_13",vy="_title_1mtor_19",xy="_subtitle_1mtor_20",Sy="_why_1mtor_21",ky="_stage_1mtor_23",Ty="_video_1mtor_31",Iy="_overlay_1mtor_33",Ey="_progressWrap_1mtor_41",zy="_progressBar_1mtor_56",Cy="_progressPct_1mtor_66",Ay="_controls_1mtor_73",Oy="_primary_1mtor_80",Ry="_status_1mtor_92",By="_error_1mtor_93",Ny="_replayBadge_1mtor_95",My="_provider_1mtor_103",Dy="_honesty_1mtor_111",Py="_workbench_1mtor_121",Uy="_stageCol_1mtor_132",qy="_cancelBtn_1mtor_134",Ly="_dropzone_1mtor_146",Wy="_dropHint_1mtor_161",Vy="_dropFormats_1mtor_163",Gy="_reject_1mtor_165",Hy="_modelCardLink_1mtor_176",jy="_rail_1mtor_187",Fy="_railHead_1mtor_199",Ky="_railTitle_1mtor_201",Zy="_copyBtn_1mtor_203",Xy="_railEmpty_1mtor_215",Qy="_recordedTag_1mtor_217",Yy="_bigCounts_1mtor_227",Jy="_bigCount_1mtor_227",e_="_railSection_1mtor_248",t_="_railLabel_1mtor_250",r_="_dirRow_1mtor_259",i_="_classRow_1mtor_263",a_="_classBar_1mtor_272",n_="_classNum_1mtor_287",s_="_flowChart_1mtor_289",o_="_flowBar_1mtor_297",u_="_flowBarPeak_1mtor_298",l_="_peakLine_1mtor_309",d_="_sumRow_1mtor_311",p_="_clipOriginTag_1mtor_316",re={screen:by,header:wy,back:$y,title:vy,subtitle:xy,why:Sy,stage:ky,video:Ty,overlay:Iy,progressWrap:Ey,progressBar:zy,progressPct:Cy,controls:Ay,primary:Oy,status:Ry,error:By,replayBadge:Ny,provider:My,honesty:Dy,workbench:Py,stageCol:Uy,cancelBtn:qy,dropzone:Ly,dropHint:Wy,dropFormats:Vy,reject:Gy,modelCardLink:Hy,rail:jy,railHead:Fy,railTitle:Ky,copyBtn:Zy,railEmpty:Xy,recordedTag:Qy,bigCounts:Yy,bigCount:Jy,railSection:e_,railLabel:t_,dirRow:r_,classRow:i_,classBar:a_,classNum:n_,flowChart:s_,flowBar:o_,flowBarPeak:u_,peakLine:l_,sumRow:d_,clipOriginTag:p_},xa=.55,c_=.18,h_={ar:{title:"تحليل تقاطع بالفيديو",subtitle:"كشف مركبات داخل المتصفح بالكامل — لا يغادر الفيديو جهازك",why:"",loadingModel:"تحميل النموذج (~10MB أول مرة)…",analyze:"حلّل المقطع",analyzing:"جارٍ التحليل مرة واحدة…",replay:"إعادة تشغيل سلسة من الذاكرة",upload:"ارفع مقطعاً آخر",counted:"مركبات عبرت الخط",down:"باتجاه الكاميرا",up:"مبتعدة",tracks:"مسارات مرصودة",provider:"المعالجة",modelCard:"بطاقة النماذج",err:"تعذر تحميل النموذج — أعد المحاولة أو استخدم متصفح Chrome/Edge حديثاً",resultsTitle:"نتائج التحليل",perClass:"حسب الصنف (مسارات فريدة)",directional:"العبور الاتجاهي",flowTitle:"التدفق عبر زمن المقطع",peak:"الذروة",summaryTitle:"ملخص التشغيل",duration:"المدة المحللة",sec:"ث",framesN:"إطارات معالجة",copyBtn:"نسخ الأرقام",copiedTxt:"✓ نُسخت",recordedTag:"أرقام من مقطع مسجّل — ليست بثاً حياً",dropHint:"اسحب مقطع تقاطع هنا أو اضغط للاختيار",dropFormats:"MP4 / WebM · حتى 60MB",rejectType:"الملف ليس فيديو مدعوماً (MP4/WebM) — لم يُحلَّل",rejectSize:"الملف أكبر من 60MB — اختر مقطعاً أقصر",rejectLoad:"تعذّر قراءة الفيديو — جرّب ملفاً آخر",cancelBtn:"إلغاء التحليل",noResults:"شغّل التحليل لعرض الأرقام هنا",demoClipTag:"مقطع توضيحي غير أردني (طوكيو) — مرخّص، لغرض عرض التقنية فقط",honesty:"نموذج YOLO11n عام (COCO) — لا نعلن دقة رقمية على مشاهد أردنية لأنها غير مقيسة؛ العدّ مصمم قرب الكاميرا حيث يكون الكشف موثوقاً."},en:{title:"Intersection video analysis",subtitle:"Fully in-browser vehicle detection — the video never leaves your device",why:"",loadingModel:"Loading the model (~10MB first time)…",analyze:"Analyze the clip",analyzing:"Analyzing once…",replay:"Smooth replay from cache",upload:"Upload another clip",counted:"Vehicles crossed the line",down:"Toward camera",up:"Away",tracks:"Tracks observed",provider:"Processing",modelCard:"Model Card",err:"Model failed to load — retry or use a recent Chrome/Edge",resultsTitle:"Analysis results",perClass:"By class (unique tracks)",directional:"Directional crossings",flowTitle:"Flow over clip time",peak:"Peak",summaryTitle:"Run summary",duration:"Analyzed duration",sec:"s",framesN:"Frames processed",copyBtn:"Copy numbers",copiedTxt:"✓ Copied",recordedTag:"Numbers from a recorded clip — not a live feed",dropHint:"Drop an intersection clip here or click to choose",dropFormats:"MP4 / WebM · up to 60MB",rejectType:"Not a supported video (MP4/WebM) — nothing was analyzed",rejectSize:"File exceeds 60MB — pick a shorter clip",rejectLoad:"Could not read the video — try another file",cancelBtn:"Cancel analysis",noResults:"Run the analysis to populate the numbers",demoClipTag:"Non-Jordanian demo clip (Tokyo) — licensed, for technology demonstration only",honesty:"Generic YOLO11n (COCO) — no numeric accuracy is claimed on Jordanian scenes as none was measured; counting is designed near-camera where detection is reliable."}};function f_(e,t,r){const i=new Map,a=new Map;for(const d of e)for(const c of d.boxes){if(!c.trackId)continue;i.set(c.trackId,c.classId);const h=a.get(c.trackId)??[];h.push({t:d.t,cy:c.y+c.h/2}),a.set(c.trackId,h)}const s=new Map;for(const d of i.values())s.set(d,(s.get(d)??0)+1);const n=[];for(const[,d]of a)for(let c=1;c<d.length;c++){const h=d[c-1].cy,g=d[c].cy;if(h<t&&g>=t||h>=t&&g<t){n.push({t:d[c].t,dir:g>h?"down":"up"});break}}const u=10,l=Array.from({length:u},()=>0);for(const d of n)l[Math.min(u-1,Math.floor(d.t/Math.max(r,.1)*u))]+=1;return{perClass:[...s.entries()].map(([d,c])=>({classId:d,count:c})).sort((d,c)=>c.count-d.count),downTotal:n.filter(d=>d.dir==="down").length,upTotal:n.filter(d=>d.dir==="up").length,buckets:l,peakBucket:l.length?l.indexOf(Math.max(...l)):0,durationS:r,frames:e.length}}function b_(){const{language:e}=Pg(),t=Ug(),r=qg("/ops/cameras"),i=h_[e],a=Wg("intersections"),s="/uqab-preview/",n=Ae.useRef(null),u=Ae.useRef(null),l=Ae.useRef([]),d=Ae.useRef({down:0,up:0,total:0}),c=Ae.useRef(0),[h,g]=Ae.useState("loading-model"),[y,_]=Ae.useState(0),[w,S]=Ae.useState(`${s}assets/detection/demo-intersection.mp4`),[v,$]=Ae.useState(0),[I,k]=Ae.useState(null),[E,A]=Ae.useState(!1),O=Ae.useRef(!1),[b,N]=Ae.useState(null);Ae.useEffect(()=>{let z=!0;return fy(s).then(()=>z&&g("ready")).catch(()=>z&&g("error")),()=>{z=!1}},[s]);const U=Ae.useCallback(z=>{var L;const W=n.current,j=u.current;if(!W||!j)return;const Q=W.videoWidth,ue=W.videoHeight;j.width!==Q&&(j.width=Q,j.height=ue);const D=j.getContext("2d");D.clearRect(0,0,Q,ue);const ae=xa*ue;D.strokeStyle="rgba(217, 193, 155, 0.9)",D.setLineDash([14,10]),D.lineWidth=3,D.beginPath(),D.moveTo(0,ae),D.lineTo(Q,ae),D.stroke(),D.setLineDash([]);for(const de of z){D.strokeStyle="#6FAE92",D.lineWidth=2.5,D.strokeRect(de.x,de.y,de.w,de.h);const Be=`${((L=va[de.classId])==null?void 0:L[e])??""} #${de.trackId??""}`;D.font="600 15px Outfit, Tajawal, sans-serif";const ke=D.measureText(Be).width+10;D.fillStyle="rgba(13, 23, 33, 0.82)",D.fillRect(de.x,Math.max(0,de.y-22),ke,20),D.fillStyle="#D9C19B",D.fillText(Be,de.x+5,Math.max(14,de.y-7))}const P=d.current,V=`${i.counted}: ${P.total} · ${i.down} ${P.down} · ${i.up} ${P.up}`;D.font="700 17px Outfit, Tajawal, sans-serif";const K=D.measureText(V).width+18;D.fillStyle="rgba(13, 23, 33, 0.85)",D.fillRect(Q-K-12,12,K,30),D.fillStyle="#E9EEF4",D.fillText(V,Q-K-3,33)},[e,i]),F=Ae.useCallback(async()=>{const z=n.current;if(!z)return;g("analyzing"),_(0),O.current=!1,N(null),l.current=[],z.currentTime=0,z.muted=!0,await z.play();let W=-1,j=!1;await new Promise(ae=>{const P=()=>{if(z.ended||O.current){ae();return}const V=z.currentTime;!j&&V-W>=c_&&(j=!0,W=V,my(z).then(K=>{l.current.push({t:V,boxes:K}),_(Math.min(99,Math.round(V/z.duration*100))),j=!1})),z.requestVideoFrameCallback(P)};z.requestVideoFrameCallback(P),z.onended=()=>ae()}),yy(l.current),d.current=_y(l.current,xa,z.videoHeight);const Q=new Set;for(const ae of l.current)for(const P of ae.boxes)P.trackId&&Q.add(P.trackId);$(Q.size),N(f_(l.current,xa*z.videoHeight,z.duration)),_(100),g("replay"),z.currentTime=0,await z.play();let ue=0;const D=()=>{var V;const ae=z.currentTime,P=l.current;for(;ue<P.length-1&&P[ue+1].t<=ae;)ue+=1;ue>0&&ae<P[ue].t&&(ue=0),U(((V=P[ue])==null?void 0:V.boxes)??[]),c.current=requestAnimationFrame(D)};z.loop=!0,c.current=requestAnimationFrame(D)},[U]);Ae.useEffect(()=>()=>cancelAnimationFrame(c.current),[]);const X=z=>{if(z){if(k(null),!/^video\/(mp4|webm|quicktime)$/.test(z.type)){k(i.rejectType);return}if(z.size>60*1024*1024){k(i.rejectSize);return}cancelAnimationFrame(c.current),w.startsWith("blob:")&&URL.revokeObjectURL(w),l.current=[],d.current={down:0,up:0,total:0},$(0),N(null),S(URL.createObjectURL(z)),g("ready")}},Y=()=>{if(!b)return;const z=["UQAB detection run",i.recordedTag,i.counted+": "+d.current.total+" ("+i.down+" "+d.current.down+" / "+i.up+" "+d.current.up+")",i.tracks+": "+v,...b.perClass.map(W=>{var j;return(((j=va[W.classId])==null?void 0:j[e])??String(W.classId))+": "+W.count}),i.duration+": "+Math.round(b.durationS)+i.sec+" - "+i.framesN+": "+b.frames];navigator.clipboard.writeText(z.join(`
`)).then(()=>{A(!0),window.setTimeout(()=>A(!1),1800)})};return H.jsx(Lg,{activePath:"/ops/cameras",noBottomNav:!0,children:H.jsxs("div",{className:re.screen,children:[H.jsxs("header",{className:re.header,children:[H.jsx("button",{type:"button",className:re.back,onClick:r,children:"‹"}),H.jsxs("div",{children:[H.jsx("h1",{className:re.title,children:i.title}),H.jsx("p",{className:re.subtitle,children:i.subtitle}),H.jsx("p",{className:re.why,children:e==="ar"?`لماذا؟ ${Vg(a.value)} ${a.labelAr} (${a.sourceAr})`:`Why? ${a.value} ${a.labelEn} (${a.sourceEn})`})]})]}),H.jsxs("div",{className:re.workbench,children:[H.jsxs("div",{className:re.stageCol,children:[H.jsxs("div",{className:re.stage,children:[H.jsx("video",{ref:n,src:w,className:re.video,playsInline:!0,preload:"auto",onError:()=>k(i.rejectLoad)}),!w.startsWith("blob:")&&H.jsx("span",{className:re.clipOriginTag,children:i.demoClipTag}),H.jsx("canvas",{ref:u,className:re.overlay}),h==="analyzing"&&H.jsxs("div",{className:re.progressWrap,children:[H.jsx("span",{children:i.analyzing}),H.jsx("div",{className:re.progressBar,children:H.jsx("i",{style:{width:`${y}%`}})}),H.jsx("b",{className:re.progressPct,children:H.jsxs(nt,{children:[y,"%"]})}),H.jsx("button",{type:"button",className:re.cancelBtn,onClick:()=>{O.current=!0},children:i.cancelBtn})]})]}),H.jsxs("div",{className:re.controls,children:[h==="loading-model"&&H.jsx("span",{className:re.status,children:i.loadingModel}),h==="error"&&H.jsx("span",{className:re.error,children:i.err}),h==="ready"&&H.jsxs("button",{type:"button",className:re.primary,onClick:()=>void F(),children:["▶ ",i.analyze]}),h==="replay"&&H.jsxs("span",{className:re.replayBadge,children:["✓ ",i.replay]}),H.jsxs("span",{className:re.provider,children:[i.provider,": ",hy()]}),H.jsx("button",{type:"button",className:re.modelCardLink,onClick:()=>t("/model-card"),children:i.modelCard})]}),(h==="ready"||h==="replay")&&H.jsxs("label",{className:re.dropzone,onDragOver:z=>z.preventDefault(),onDrop:z=>{var W;z.preventDefault(),X(((W=z.dataTransfer.files)==null?void 0:W[0])??null)},children:[H.jsxs("span",{className:re.dropHint,children:["⬆ ",i.dropHint]}),H.jsx("span",{className:re.dropFormats,children:i.dropFormats}),H.jsx("input",{type:"file",accept:"video/mp4,video/webm,video/quicktime",hidden:!0,onChange:z=>{var W;return X(((W=z.target.files)==null?void 0:W[0])??null)}})]}),I&&H.jsxs("p",{className:re.reject,role:"alert",children:["✕ ",I]})]}),H.jsxs("aside",{className:re.rail,children:[H.jsxs("div",{className:re.railHead,children:[H.jsx("span",{className:re.railTitle,children:i.resultsTitle}),b&&H.jsx("button",{type:"button",className:re.copyBtn,onClick:Y,children:E?i.copiedTxt:i.copyBtn})]}),b?H.jsxs(H.Fragment,{children:[H.jsx("span",{className:re.recordedTag,children:i.recordedTag}),H.jsxs("div",{className:re.bigCounts,children:[H.jsxs("div",{className:re.bigCount,children:[H.jsx("b",{children:H.jsx(nt,{children:d.current.total})}),H.jsx("span",{children:i.counted})]}),H.jsxs("div",{className:re.bigCount,children:[H.jsx("b",{children:H.jsx(nt,{children:v})}),H.jsx("span",{children:i.tracks})]})]}),H.jsxs("div",{className:re.railSection,children:[H.jsx("em",{className:re.railLabel,children:i.directional}),H.jsxs("div",{className:re.dirRow,children:[H.jsxs("span",{children:["↓ ",i.down," ",H.jsx("b",{children:H.jsx(nt,{children:b.downTotal})})]}),H.jsxs("span",{children:["↑ ",i.up," ",H.jsx("b",{children:H.jsx(nt,{children:b.upTotal})})]})]})]}),H.jsxs("div",{className:re.railSection,children:[H.jsx("em",{className:re.railLabel,children:i.perClass}),b.perClass.map(z=>{var W;return H.jsxs("div",{className:re.classRow,children:[H.jsx("span",{children:((W=va[z.classId])==null?void 0:W[e])??z.classId}),H.jsx("i",{className:re.classBar,children:H.jsx("b",{style:{width:`${z.count/Math.max(1,b.perClass[0].count)*100}%`}})}),H.jsx("b",{className:re.classNum,children:H.jsx(nt,{children:z.count})})]},z.classId)})]}),H.jsxs("div",{className:re.railSection,children:[H.jsx("em",{className:re.railLabel,children:i.flowTitle}),H.jsx("div",{className:re.flowChart,"aria-hidden":"true",children:b.buckets.map((z,W)=>H.jsx("i",{className:W===b.peakBucket?re.flowBarPeak:re.flowBar,style:{height:`${Math.max(8,z/Math.max(1,...b.buckets)*100)}%`},title:`${z}`},W))}),H.jsxs("span",{className:re.peakLine,children:[i.peak,": ",H.jsx(nt,{children:`${Math.round(b.peakBucket/10*b.durationS)}–${Math.round((b.peakBucket+1)/10*b.durationS)}`})," ",i.sec," · ",H.jsx(nt,{children:b.buckets[b.peakBucket]})]})]}),H.jsxs("div",{className:re.railSection,children:[H.jsx("em",{className:re.railLabel,children:i.summaryTitle}),H.jsxs("div",{className:re.sumRow,children:[H.jsx("span",{children:i.duration}),H.jsxs("b",{children:[H.jsx(nt,{children:Math.round(b.durationS)})," ",i.sec]})]}),H.jsxs("div",{className:re.sumRow,children:[H.jsx("span",{children:i.framesN}),H.jsx("b",{children:H.jsx(nt,{children:b.frames})})]})]})]}):H.jsx("p",{className:re.railEmpty,children:i.noResults}),H.jsx("p",{className:re.honesty,children:i.honesty})]})]})]})})}export{b_ as DetectionScreen};
