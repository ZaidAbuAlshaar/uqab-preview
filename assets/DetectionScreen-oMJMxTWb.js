var Dg=Object.defineProperty;var Pg=(e,t,r)=>t in e?Dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var po=(e,t,r)=>Pg(e,typeof t!="symbol"?t+"":t,r);import{a as Ug,u as qg,l as Lg,r as Ae,j as G,O as Wg}from"./index-D51TImdq.js";import{N as Gt}from"./sources-z7mowaBs.js";import{i as Vg,N as nt}from"./Num-Cbr1rz9R.js";/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Wa=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,Hg=Object.getOwnPropertyNames,jg=Object.prototype.hasOwnProperty,Fg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),Xt=(e,t)=>{for(var r in t)Wa(e,r,{get:t[r],enumerable:!0})},Kg=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Hg(t))!jg.call(e,a)&&a!==r&&Wa(e,a,{get:()=>t[a],enumerable:!(i=Gg(t,a))||i.enumerable});return e},_r=e=>Kg(Wa({},"__esModule",{value:!0}),e),rr,bt,jt,co,Hd,jd=L(()=>{rr=new Map,bt=[],jt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=rr.get(e);if(i===void 0)rr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=bt.indexOf(e);a!==-1&&bt.splice(a,1);for(let n=0;n<bt.length;n++)if(rr.get(bt[n]).priority<=r){bt.splice(n,0,e);return}bt.push(e)}return}throw new TypeError("not a valid backend")},co=async e=>{let t=rr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Hd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?bt:r,a,n=[],s=new Set;for(let l of i){let d=await co(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Zg=L(()=>{jd()}),Fd,Xg=L(()=>{Fd="1.27.0"}),Ii,ze,Kd=L(()=>{Xg(),Ii="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:Fd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ii=e}},get logLevel(){return Ii}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),we,Qg=L(()=>{Kd(),we=ze}),Zd,Xd,Yg=L(()=>{Zd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,f=0,g=c,y=c*2,_=-1;s==="RGBA"?(f=0,g=c,y=c*2,_=c*3):s==="RGB"?(f=0,g=c,y=c*2):s==="RBG"&&(f=0,y=c,g=c*2);for(let b=0;b<n;b++)for(let S=0;S<a;S++){let v=(e.data[f++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],T=(e.data[y++]-d[2])*l[2],k=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+w+","+T+","+k+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Xd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,b=2,S=3,v=0,w=f,T=f*2,k=-1;u==="RGBA"?(v=0,w=f,T=f*2,k=f*3):u==="RGB"?(v=0,w=f,T=f*2):u==="RBG"&&(v=0,T=f,w=f*2),i=r.createImageData(a,n);for(let E=0;E<n*a;y+=g,_+=g,b+=g,S+=g,E++)i.data[y]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[w++]-c[1])*d[1],i.data[b]=(e.data[T++]-c[2])*d[2],i.data[S]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Rr,Qd,Yd,Jd,ep,tp,Jg=L(()=>{Va(),Rr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,g=0,y=1,_=2,b=3,S=0,v=d,w=d*2,T=-1;u==="RGB"&&(f=3,g=0,y=1,_=2,b=-1),l==="RGBA"?T=d*3:l==="RBG"?(S=0,w=d,v=d*2):l==="BGR"&&(w=0,v=d,S=d*2);for(let k=0;k<d;k++,g+=f,_+=f,y+=f,b+=f)c[S++]=(e[g]+s[0])/n[0],c[v++]=(e[y]+s[1])/n[1],c[w++]=(e[_]+s[2])/n[2],T!==-1&&b!==-1&&(c[T++]=(e[b]+s[3])/n[3]);return l==="RGBA"?new Ve("float32",c,[1,4,r,i]):new Ve("float32",c,[1,3,r,i])},Qd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;f.drawImage(e,0,0),s=f.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let g=l();g.width=f,g.height=c;let y=d(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let g=e.height,y=e.width;return f.drawImage(e,0,0,y,g),s=f.getImageData(0,0,y,g).data,u.height=g,u.width=y,Rr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let g=l(),y=d(g);if(!e||!y)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,c(Rr(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Rr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Yd=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Ve({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Jd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ve({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},ep=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ve({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},tp=(e,t,r)=>new Ve({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ot,cr,Ei,rp,e0=L(()=>{Ot=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),cr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ei=!1,rp=()=>{if(!Ei){Ei=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Ot.set("int64",BigInt64Array),cr.set(BigInt64Array,"int64")),t&&(Ot.set("uint64",BigUint64Array),cr.set(BigUint64Array,"uint64")),i?(Ot.set("float16",r),cr.set(r,"float16")):Ot.set("float16",Uint16Array)}}}),ip,ap,t0=L(()=>{Va(),ip=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},ap=(e,t)=>{switch(e.location){case"cpu":return new Ve(e.type,e.data,t);case"cpu-pinned":return new Ve({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ve({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ve({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ve({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ve,Va=L(()=>{Yg(),Jg(),e0(),t0(),Ve=class{constructor(e,t,r){rp();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=Ot.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=Ot.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=cr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=ip(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Qd(e,t)}static fromTexture(e,t){return Yd(e,t)}static fromGpuBuffer(e,t){return Jd(e,t)}static fromMLTensor(e,t){return ep(e,t)}static fromPinnedBuffer(e,t,r){return tp(e,t,r)}toDataURL(e){return Zd(this,e)}toImageData(e){return Xd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ap(this,e)}}}),et,np=L(()=>{Va(),et=Ve}),Zr,zi,ot,tt,Nt,Mt,sp=L(()=>{Kd(),Zr=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},zi=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Zr("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},ot=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||zi("BEGIN",e)},tt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||zi("END",e)},Nt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},Mt=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),op,r0=L(()=>{jd(),np(),sp(),op=class up{constructor(t){this.handler=t}async run(t,r,i){ot(),Nt("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof et||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof et)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof et)&&(d=!0,s=!1,a[f]=g)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof et?l[d]=c:l[d]=new et(c.type,c.data,c.dims)}return Mt("InferenceSession.run"),tt(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){ot(),Nt("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(g=t.byteLength-f,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Hd(s),d=await u.createInferenceSessionHandler(n,l);return Mt("InferenceSession.create"),tt(),new up(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Xr,i0=L(()=>{r0(),Xr=op}),a0=L(()=>{}),n0=L(()=>{}),s0=L(()=>{}),o0=L(()=>{}),u0={};Xt(u0,{InferenceSession:()=>Xr,TRACE:()=>Zr,TRACE_EVENT_BEGIN:()=>Nt,TRACE_EVENT_END:()=>Mt,TRACE_FUNC_BEGIN:()=>ot,TRACE_FUNC_END:()=>tt,Tensor:()=>et,env:()=>we,registerBackend:()=>jt});var je=L(()=>{Zg(),Qg(),i0(),np(),a0(),n0(),sp(),s0(),o0()}),Ga=L(()=>{}),lp={};Xt(lp,{default:()=>dp});var Ci,Ai,dp,l0=L(()=>{var e;gf(),qt(),Ha(),Ci="ort-wasm-proxy-worker",Ai=((e=globalThis.self)==null?void 0:e.name)===Ci,Ai&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":ja(i.wasm).then(()=>{dn(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:n}=i;pn(n,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=i,n=ii(a);postMessage({type:r,out:n});break}case"create":{let{model:a,options:n}=i;cn(a,n).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":hn(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:n,inputs:s,outputIndices:u,options:l}=i;fn(a,n,s,u,new Array(u.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},gn([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":mn(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),dp=Ai?null:t=>new Worker(t??We,{type:"module",name:Ci})}),pp={};Xt(pp,{default:()=>cp});async function ho(e={}){var uo,lo;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&((uo=self.name)==null?void 0:uo.startsWith("em-pthread"));t.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,p)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let n=o=>async(...p)=>{var m;try{if(t.Yc)throw Error("Session already started");let h=t.Yc={Kd:p[0],errors:[]},x=await o(...p);if(t.Yc!==h)throw Error("Session mismatch");(m=t.dd)==null||m.flush();let I=h.errors;if(0<I.length){let C=await Promise.all(I);if(C=C.filter(B=>B),0<C.length)throw Error(C.join(`
`))}return x}finally{t.Yc=null}};t.jsepInit=(o,p)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=p;let m=t.dd;t.jsepRegisterBuffer=(h,x,I,C)=>m.registerBuffer(h,x,I,C),t.jsepGetBuffer=h=>m.getBuffer(h),t.jsepCreateDownloader=(h,x,I)=>m.createDownloader(h,x,I),t.jsepOnCreateSession=h=>{m.onCreateSession(h)},t.jsepOnReleaseSession=h=>{m.onReleaseSession(h)},t.jsepOnRunStart=h=>m.onRunStart(h),t.Id=(h,x)=>{m.upload(h,x)}}else if(o==="webnn"){let m=p[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=h=>m.onRunStart(h),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=h=>{m.onReleaseSession(h)},t.webnnCreateMLTensorDownloader=(h,x)=>m.createMLTensorDownloader(h,x),t.webnnRegisterMLTensor=(h,x,I,C)=>m.registerMLTensor(h,x,I,C),t.webnnCreateMLContext=h=>m.createMLContext(h),t.webnnRegisterMLConstant=(h,x,I,C,B,V)=>m.registerMLConstant(h,x,I,C,B,t.Xc,V),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=p=>(...m)=>{let h=it;return m=p(...m),it!=h?new Promise((x,I)=>{fi={resolve:x,reject:I}}):m};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=o(t[p])})(),n!==void 0&&(t._OrtRun=n(t._OrtRun),t._OrtRunWithBinding=n(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var u,l,d=(o,p)=>{throw p},c=import.meta.url,f="";if(r||i){try{f=new URL(".",c).href}catch{}i&&(l=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),u=async o=>{if(z(o))return new Promise((m,h)=>{var x=new XMLHttpRequest;x.open("GET",o,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):h(x.status)},x.onerror=h,x.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var g,y,_,b,S,v,w=console.log.bind(console),T=console.error.bind(console),k=w,E=T,A=!1,z=o=>o.startsWith("file://");function $(){mt.buffer!=P.buffer&&H()}if(a){let o=function(p){try{var m=p.data,h=m.Sc;if(h==="load"){let x=[];self.onmessage=I=>x.push(I),v=()=>{postMessage({Sc:"loaded"});for(let I of x)o(I);self.onmessage=o};for(let I of m.xd)t[I]&&!t[I].proxy||(t[I]=(...C)=>{postMessage({Sc:"callHandler",wd:I,args:C})},I=="print"&&(k=t[I]),I=="printErr"&&(E=t[I]));mt=m.Od,H(),y=m.Pd,Ne(),Or()}else if(h==="run"){(function(x){var I=($(),j)[x+52>>>2>>>0];x=($(),j)[x+56>>>2>>>0],_s(I,I-x),de(I)})(m.Rc),bi(m.Rc,0,0,1,0,0),bn(),pi(m.Rc),N||(cs(),N=!0);try{zf(m.Md,m.bd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(h==="checkMailbox"?N&&kr():h&&(E(`worker: received unknown command ${h}`),E(m)))}catch(x){throw hs(),x}};var N=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}var P,K,Q,D,O,j,F,Z,re,W,ae,U=!1;function H(){var o=mt.buffer;t.HEAP8=P=new Int8Array(o),Q=new Int16Array(o),t.HEAPU8=K=new Uint8Array(o),D=new Uint16Array(o),t.HEAP32=O=new Int32Array(o),t.HEAPU32=j=new Uint32Array(o),F=new Float32Array(o),Z=new Float64Array(o),re=new BigInt64Array(o),W=new BigUint64Array(o)}function Y(){U=!0,a?v():lt.sb()}function q(o){throw E(o="Aborted("+o+")"),A=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S==null||S(o),o}function fe(){return{a:{ma:Ym,gb:Qm,g:Cf,J:Af,f:Of,o:Rf,h:Bf,ha:Nf,b:Mf,T:Df,Ha:kn,n:Pf,$:zn,Xa:Cn,Da:An,Fa:On,Ya:Rn,Va:Bn,Oa:Nn,Ua:Mn,ka:Dn,Ea:Pn,Ba:Un,Wa:qn,Ca:Ln,bb:Uf,ea:qf,wa:Lf,ua:Vf,da:Hf,O:jf,H:Ff,va:Kf,_:tm,xa:rm,Ra:im,za:nm,Ia:sm,sa:om,fa:um,Qa:pi,_a:lm,R:hm,r:_m,c:li,hb:bm,y:wm,M:$m,D:vm,l:xm,s:Zn,ib:Sm,I:km,S:Tm,j:Im,u:Em,q:zm,k:Cm,La:Am,Ma:Om,Na:Rm,Ja:Jn,Ka:es,ta:ts,db:Nm,ab:Dm,v:Pm,aa:Um,ga:qm,$a:Mm,W:Lm,Za:Wm,Aa:Vm,F:Bm,U:Gm,la:Cr,ya:jm,fb:Hm,eb:Fm,Sa:ns,Ta:ss,Ga:Qt,V:os,ja:us,Pa:ls,ia:ds,kb:Bg,na:zg,lb:Rg,oa:Eg,G:bg,e:rg,t:eg,w:Jm,B:cg,mb:kg,K:gg,x:ng,pa:Tg,Y:Cg,ba:Sg,nb:xg,ob:vg,P:hg,qa:$g,pb:wg,N:yg,Z:Ig,d:tg,A:ag,m:ig,jb:Ng,p:og,z:ug,C:sg,E:lg,L:fg,qb:_g,Q:Ag,ca:mg,X:Og,rb:pg,ra:dg,i:Zm,a:mt,cb:Le}}}async function Ne(){function o(h,x){var I=lt=h.exports;h={};for(let[C,B]of Object.entries(I))typeof B=="function"?(I=dm(B),h[C]=I):h[C]=B;return lt=h,lt=function(){var C=lt,B=X=>le=>X(le)>>>0,V=X=>()=>X()>>>0;return(C=Object.assign({},C)).tb=B(C.tb),C.Xb=V(C.Xb),C.Zb=B(C.Zb),C.lc=B(C.lc),C.mc=V(C.mc),C.qc=B(C.qc),C}(),yn.push(lt._b),ps=(h=lt).tb,cs=h.ub,t._OrtInit=h.vb,t._OrtGetLastError=h.wb,t._OrtCreateSessionOptions=h.xb,t._OrtAppendExecutionProvider=h.yb,t._OrtAddFreeDimensionOverride=h.zb,t._OrtAddSessionConfigEntry=h.Ab,t._OrtReleaseSessionOptions=h.Bb,t._OrtCreateSession=h.Cb,t._OrtReleaseSession=h.Db,t._OrtGetInputOutputCount=h.Eb,t._OrtGetInputOutputMetadata=h.Fb,t._OrtFree=h.Gb,t._OrtCreateTensor=h.Hb,t._OrtGetTensorData=h.Ib,t._OrtReleaseTensor=h.Jb,t._OrtCreateRunOptions=h.Kb,t._OrtAddRunConfigEntry=h.Lb,t._OrtReleaseRunOptions=h.Mb,t._OrtCreateBinding=h.Nb,t._OrtBindInput=h.Ob,t._OrtBindOutput=h.Pb,t._OrtClearBoundOutputs=h.Qb,t._OrtReleaseBinding=h.Rb,t._OrtRunWithBinding=h.Sb,t._OrtRun=h.Tb,t._OrtEndProfiling=h.Ub,t._JsepOutput=h.Vb,t._JsepGetNodeName=h.Wb,Ar=h.Xb,at=t._free=h.Yb,er=t._malloc=h.Zb,bi=h.ac,hs=h.bc,fs=h.cc,ms=h.dc,wi=h.ec,gs=h.fc,ys=h.gc,ce=h.hc,tr=h.ic,_s=h.jc,de=h.kc,$i=h.lc,pe=h.mc,bs=h.nc,vi=h.oc,ws=h.pc,$s=h.qc,vs=h.rc,xi=h.sc,xs=h.tc,Ss=h.uc,ks=h.vc,Ts=h.wc,Is=h.xc,Es=h.yc,zs=h.zc,Cs=h.Ac,As=h.Bc,Os=h.Cc,Rs=h.Dc,Bs=h.Ec,Ns=h.Fc,Ms=h.Gc,Ds=h.Hc,Ps=h.Ic,Us=h.Jc,qs=h.Kc,Ls=h.Lc,Ws=h.Mc,Vs=h.Nc,Gs=h.Pc,Hs=h.Qc,js=h.$c,Fs=h.ad,Ks=h.fd,Zs=h.jd,Xs=h.kd,Qs=h.ld,Ys=h.md,Js=h.nd,eo=h.od,to=h.pd,ro=h.qd,io=h.vd,ao=h.Td,no=h.Ud,so=h.Vd,oo=h.Wd,y=x,lt}var p,m=fe();return t.instantiateWasm?new Promise(h=>{t.instantiateWasm(m,(x,I)=>{h(o(x,I))})}):a?o(new WebAssembly.Instance(y,fe()),y):(ae??(ae=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href),p=await async function(h){var x=ae;if(!g&&!z(x))try{var I=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,h)}catch(C){E(`wasm streaming compile failed: ${C}`),E("falling back to ArrayBuffer instantiation")}return async function(C,B){try{var V=await async function(X){if(!g)try{var le=await u(X);return new Uint8Array(le)}catch{}if(X==ae&&g)X=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";X=l(X)}return X}(C);return await WebAssembly.instantiate(V,B)}catch(X){E(`failed to asynchronously prepare wasm: ${X}`),q(X)}}(x,h)}(m),o(p.instance,p.module))}class Te{constructor(p){po(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Me=o=>{o.terminate(),o.onmessage=()=>{}},De=[],qe=0,Pe=null,ht=o=>{ft.length==0&&($n(),wn(ft[0]));var p=ft.pop();if(!p)return 6;Yt.push(p),St[o.Rc]=p,p.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return p.postMessage(m,o.rd),0},ve=0,se=(o,p,...m)=>{var h,x=16*m.length,I=pe(),C=$i(x),B=C>>>3;for(h of m)typeof h=="bigint"?(($(),re)[B++>>>0]=1n,($(),re)[B++>>>0]=h):(($(),re)[B++>>>0]=0n,($(),Z)[B++>>>0]=h);return o=fs(o,0,x,C,p),de(I),o};function Le(o){if(a)return se(0,1,o);if(_=o,!(0<ve)){for(var p of Yt)Me(p);for(p of ft)Me(p);ft=[],Yt=[],St={},A=!0}d(0,new Te(o))}function wr(o){if(a)return se(1,0,o);Qt(o)}var Qt=o=>{if(_=o,a)throw wr(o),"unwind";Le(o)},ft=[],Yt=[],yn=[],St={},_n=o=>{var p=o.Rc;delete St[p],ft.push(o),Yt.splice(Yt.indexOf(o),1),o.Rc=0,ms(p)};function bn(){yn.forEach(o=>o())}var wn=o=>new Promise(p=>{o.onmessage=x=>{var I=x.data;if(x=I.Sc,I.Zc&&I.Zc!=Ar()){var C=St[I.Zc];C?C.postMessage(I,I.rd):E(`Internal error! Worker sent a message "${x}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else x==="checkMailbox"?kr():x==="spawnThread"?ht(I):x==="cleanupThread"?Sr(()=>{_n(St[I.Nd])}):x==="loaded"?(o.loaded=!0,p(o)):I.target==="setimmediate"?o.postMessage(I):x==="uncaughtException"?o.onerror(I.error):x==="callHandler"?t[I.wd](...I.args):x&&E(`worker sent an unknown command ${x}`)},o.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,h=[];for(m of[])t.propertyIsEnumerable(m)&&h.push(m);o.postMessage({Sc:"load",xd:h,Od:mt,Pd:y})});function $n(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ft.push(o)}var mt,zf=(o,p)=>{ve=0,o=xi(o,p),0<ve?_=o:wi(o)},$r=[],vr=0;function Cf(o){var p=new ni(o>>>=0);return($(),P)[p.Tc+12>>>0]==0&&(vn(p,!0),vr--),xn(p,!1),$r.push(p),$s(o)}var Wt=0,Af=()=>{ce(0,0);var o=$r.pop();bs(o.cd),Wt=0};function vn(o,p){p=p?1:0,($(),P)[o.Tc+12>>>0]=p}function xn(o,p){p=p?1:0,($(),P)[o.Tc+13>>>0]=p}class ni{constructor(p){this.cd=p,this.Tc=p-24}}var si=o=>{var p=Wt;if(!p)return tr(0),0;var m=new ni(p);($(),j)[m.Tc+16>>>2>>>0]=p;var h=($(),j)[m.Tc+4>>>2>>>0];if(!h)return tr(0),p;for(var x of o){if(x===0||x===h)break;if(ws(x,h,m.Tc+16))return tr(x),p}return tr(h),p};function Of(){return si([])}function Rf(o){return si([o>>>0])}function Bf(o,p,m,h){return si([o>>>0,p>>>0,m>>>0,h>>>0])}var Nf=()=>{var o=$r.pop();o||q("no exception to throw");var p=o.cd;throw($(),P)[o.Tc+13>>>0]==0&&($r.push(o),xn(o,!0),vn(o,!1),vr++),vi(p),Wt=p};function Mf(o,p,m){var h=new ni(o>>>=0);throw p>>>=0,m>>>=0,($(),j)[h.Tc+16>>>2>>>0]=0,($(),j)[h.Tc+4>>>2>>>0]=p,($(),j)[h.Tc+8>>>2>>>0]=m,vi(o),vr++,Wt=o}var Df=()=>vr;function Sn(o,p,m,h){return a?se(2,1,o,p,m,h):kn(o,p,m,h)}function kn(o,p,m,h){if(o>>>=0,p>>>=0,m>>>=0,h>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return a&&x.length===0?Sn(o,p,m,h):(o={Ld:m,Rc:o,bd:h,rd:x},a?(o.Sc="spawnThread",postMessage(o,x),0):ht(o))}function Pf(o){throw Wt||(Wt=o>>>0),Wt}var Tn=globalThis.TextDecoder&&new TextDecoder,In=(o,p,m,h)=>{if(m=p+m,h)return m;for(;o[p]&&!(p>=m);)++p;return p},En=(o,p=0,m,h)=>{if(16<(m=In(o,p>>>=0,m,h))-p&&o.buffer&&Tn)return Tn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(h="";p<m;){var x=o[p++];if(128&x){var I=63&o[p++];if((224&x)==192)h+=String.fromCharCode((31&x)<<6|I);else{var C=63&o[p++];65536>(x=(240&x)==224?(15&x)<<12|I<<6|C:(7&x)<<18|I<<12|C<<6|63&o[p++])?h+=String.fromCharCode(x):(x-=65536,h+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else h+=String.fromCharCode(x)}return h},Ie=(o,p,m)=>(o>>>=0)?En(($(),K),o,p,m):"";function zn(o,p,m){return a?se(3,1,o,p,m):0}function Cn(o,p){if(a)return se(4,1,o,p)}function An(o,p){if(a)return se(5,1,o,p)}function On(o,p,m){if(a)return se(6,1,o,p,m)}function Rn(o,p,m){return a?se(7,1,o,p,m):0}function Bn(o,p){if(a)return se(8,1,o,p)}function Nn(o,p,m){if(a)return se(9,1,o,p,m)}function Mn(o,p,m,h){if(a)return se(10,1,o,p,m,h)}function Dn(o,p,m,h){if(a)return se(11,1,o,p,m,h)}function Pn(o,p,m,h){if(a)return se(12,1,o,p,m,h)}function Un(o){if(a)return se(13,1,o)}function qn(o,p){if(a)return se(14,1,o,p)}function Ln(o,p,m){if(a)return se(15,1,o,p,m)}var Uf=()=>q(""),rt=o=>{o>>>=0;for(var p="";;){var m=($(),K)[o++>>>0];if(!m)return p;p+=String.fromCharCode(m)}},oi={},ui={},Vt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ut(o,p,m={}){return function(h,x,I={}){var C=x.name;if(!h)throw new Vt(`type "${C}" must have a positive integer typeid pointer`);if(ui.hasOwnProperty(h)){if(I.yd)return;throw new Vt(`Cannot register type '${C}' twice`)}ui[h]=x,oi.hasOwnProperty(h)&&(x=oi[h],delete oi[h],x.forEach(B=>B()))}(o,p,m)}var Wn=(o,p,m)=>{switch(p){case 1:return m?h=>($(),P)[h>>>0]:h=>($(),K)[h>>>0];case 2:return m?h=>($(),Q)[h>>>1>>>0]:h=>($(),D)[h>>>1>>>0];case 4:return m?h=>($(),O)[h>>>2>>>0]:h=>($(),j)[h>>>2>>>0];case 8:return m?h=>($(),re)[h>>>3>>>0]:h=>($(),W)[h>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function qf(o,p,m,h,x){o>>>=0,m>>>=0,p=rt(p>>>0);let I=C=>C;if(h=h===0n){let C=8*m;I=B=>BigInt.asUintN(C,B),x=I(x)}ut(o,{name:p,Oc:I,Vc:(C,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:Wn(p,m,!h),Wc:null})}function Lf(o,p,m,h){ut(o>>>=0,{name:p=rt(p>>>0),Oc:function(x){return!!x},Vc:function(x,I){return I?m:h},Uc:function(x){return this.Oc(($(),K)[x>>>0])},Wc:null})}var Vn=[],kt=[0,1,,1,null,1,!0,1,!1,1];function li(o){9<(o>>>=0)&&--kt[o+1]===0&&(kt[o]=void 0,Vn.push(o))}var He=o=>{if(!o)throw new Vt(`Cannot use deleted val. handle = ${o}`);return kt[o]},Fe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Vn.pop()||kt.length;return kt[p]=o,kt[p+1]=1,p}};function di(o){return this.Oc(($(),j)[o>>>2>>>0])}var Wf={name:"emscripten::val",Oc:o=>{var p=He(o);return li(o),p},Vc:(o,p)=>Fe(p),Uc:di,Wc:null};function Vf(o){return ut(o>>>0,Wf)}var Gf=(o,p)=>{switch(p){case 4:return function(m){return this.Oc(($(),F)[m>>>2>>>0])};case 8:return function(m){return this.Oc(($(),Z)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function Hf(o,p,m){m>>>=0,ut(o>>>=0,{name:p=rt(p>>>0),Oc:h=>h,Vc:(h,x)=>x,Uc:Gf(p,m),Wc:null})}function jf(o,p,m,h,x){o>>>=0,m>>>=0,p=rt(p>>>0);let I=B=>B;if(h===0){var C=32-8*m;I=B=>B<<C>>>C,x=I(x)}ut(o,{name:p,Oc:I,Vc:(B,V)=>V,Uc:Wn(p,m,h!==0),Wc:null})}function Ff(o,p,m){function h(I){var C=($(),j)[I>>>2>>>0];return I=($(),j)[I+4>>>2>>>0],new x(($(),P).buffer,I,C)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];ut(o>>>=0,{name:m=rt(m>>>0),Oc:h,Uc:h},{yd:!0})}var gt=(o,p,m)=>{var h=($(),K);if(p>>>=0,0<m){var x=p;m=p+m-1;for(var I=0;I<o.length;++I){var C=o.codePointAt(I);if(127>=C){if(p>=m)break;h[p++>>>0]=C}else if(2047>=C){if(p+1>=m)break;h[p++>>>0]=192|C>>6,h[p++>>>0]=128|63&C}else if(65535>=C){if(p+2>=m)break;h[p++>>>0]=224|C>>12,h[p++>>>0]=128|C>>6&63,h[p++>>>0]=128|63&C}else{if(p+3>=m)break;h[p++>>>0]=240|C>>18,h[p++>>>0]=128|C>>12&63,h[p++>>>0]=128|C>>6&63,h[p++>>>0]=128|63&C,I++}}h[p>>>0]=0,o=p-x}else o=0;return o},xr=o=>{for(var p=0,m=0;m<o.length;++m){var h=o.charCodeAt(m);127>=h?p++:2047>=h?p+=2:55296<=h&&57343>=h?(p+=4,++m):p+=3}return p};function Kf(o,p){ut(o>>>=0,{name:p=rt(p>>>0),Oc(m){var h=($(),j)[m>>>2>>>0];return h=Ie(m+4,h,!0),at(m),h},Vc(m,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var x=typeof h=="string";if(!(x||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1))throw new Vt("Cannot pass non-string to std::string");var I=x?xr(h):h.length,C=er(4+I+1),B=C+4;return($(),j)[C>>>2>>>0]=I,x?gt(h,B,I+1):($(),K).set(h,B>>>0),m!==null&&m.push(at,C),C},Uc:di,Wc(m){at(m)}})}var Gn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Zf=(o,p,m)=>{if(o>>>=1,16<(p=In(($(),D),o,p/2,m))-o&&Gn)return Gn.decode(($(),D).slice(o,p));for(m="";o<p;++o){var h=($(),D)[o>>>0];m+=String.fromCharCode(h)}return m},Xf=(o,p,m)=>{if(m??(m=2147483647),2>m)return 0;var h=p;m=(m-=2)<2*o.length?m/2:o.length;for(var x=0;x<m;++x){var I=o.charCodeAt(x);($(),Q)[p>>>1>>>0]=I,p+=2}return($(),Q)[p>>>1>>>0]=0,p-h},Qf=o=>2*o.length,Yf=(o,p,m)=>{var h="";o>>>=2;for(var x=0;!(x>=p/4);x++){var I=($(),j)[o+x>>>0];if(!I&&!m)break;h+=String.fromCodePoint(I)}return h},Jf=(o,p,m)=>{if(p>>>=0,m??(m=2147483647),4>m)return 0;var h=p;m=h+m-4;for(var x=0;x<o.length;++x){var I=o.codePointAt(x);if(65535<I&&x++,($(),O)[p>>>2>>>0]=I,(p+=4)+4>m)break}return($(),O)[p>>>2>>>0]=0,p-h},em=o=>{for(var p=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,p+=4;return p};function tm(o,p,m){if(o>>>=0,p>>>=0,m=rt(m>>>=0),p===2)var h=Zf,x=Xf,I=Qf;else h=Yf,x=Jf,I=em;ut(o,{name:m,Oc:C=>{var B=($(),j)[C>>>2>>>0];return B=h(C+4,B*p,!0),at(C),B},Vc:(C,B)=>{if(typeof B!="string")throw new Vt(`Cannot pass non-string to C++ string type ${m}`);var V=I(B),X=er(4+V+p);return($(),j)[X>>>2>>>0]=V/p,x(B,X+4,V+p),C!==null&&C.push(at,X),X},Uc:di,Wc(C){at(C)}})}function rm(o,p){ut(o>>>=0,{zd:!0,name:p=rt(p>>>0),Oc:()=>{},Vc:()=>{}})}function im(o){bi(o>>>0,!i,1,!r,131072,!1),bn()}var Sr=o=>{if(!A)try{if(o(),!(0<ve))try{a?Ar()&&wi(_):Qt(_)}catch(p){p instanceof Te||p=="unwind"||d(0,p)}}catch(p){p instanceof Te||p=="unwind"||d(0,p)}},am=!Atomics.waitAsync||((lo=globalThis.navigator)==null?void 0:lo.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function pi(o){o>>>=0,am||(Atomics.waitAsync(($(),O),o>>>2,o).value.then(kr),o+=128,Atomics.store(($(),O),o>>>2,1))}var kr=()=>Sr(()=>{var o=Ar();o&&(pi(o),ys())});function nm(o,p){(o>>>=0)==p>>>0?setTimeout(kr):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=St[o])&&o.postMessage({Sc:"checkMailbox"})}var ci=[];function sm(o,p,m,h,x){for(p>>>=0,x>>>=0,ci.length=0,m=x>>>3,h=x+h>>>3;m<h;){var I;I=($(),re)[m++>>>0]?($(),re)[m++>>>0]:($(),Z)[m++>>>0],ci.push(I)}return(p?Si[p]:Xm[o])(...ci)}var om=()=>{ve=0};function um(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):_n(St[o])}function lm(o){}var Tr=o=>{try{o()}catch(p){q(p)}};function dm(o){var p=(...m)=>{Ir.push(o);try{return o(...m)}finally{A||(Ir.pop(),it&&yt===1&&Ir.length===0&&(yt=0,ve+=1,Tr(no),typeof Fibers<"u"&&Fibers.Zd()))}};return Fn.set(o,p),p}var yt=0,it=null,Hn=0,Ir=[],hi=new Map,jn=new Map,Fn=new Map,pm=0,fi=null,cm=[],Kn=o=>function(p){if(!A){if(yt===0){var m=!1,h=!1;p((x=0)=>{if(!A&&(Hn=x,m=!0,h)){yt=2,Tr(()=>so(it)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),x=!1;try{var I=function(){var V=($(),O)[it+8>>>2>>>0];return V=jn.get(V),V=Fn.get(V),--ve,V()}()}catch(V){I=V,x=!0}var C=!1;if(!it){var B=fi;B&&(fi=null,(x?B.reject:B.resolve)(I),C=!0)}if(x&&!C)throw I}}),h=!0,m||(yt=1,it=function(){var x=er(65548),I=x+12;if(($(),j)[x>>>2>>>0]=I,($(),j)[x+4>>>2>>>0]=I+65536,I=Ir[0],!hi.has(I)){var C=pm++;hi.set(I,C),jn.set(C,I)}return I=hi.get(I),($(),O)[x+8>>>2>>>0]=I,x}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Tr(()=>ao(it)))}else yt===2?(yt=0,Tr(oo),at(it),it=null,cm.forEach(Sr)):q(`invalid state: ${yt}`);return Hn}}(p=>{o().then(p)});function hm(o){return o>>>=0,Kn(async()=>{var p=await He(o);return Fe(p)})}var mi=[],fm=o=>{var p=mi.length;return mi.push(o),p},mm=(o,p)=>{for(var m=Array(o),h=0;h<o;++h){var x=h,I=($(),j)[p+4*h>>>2>>>0],C=ui[I];if(C===void 0)throw o=`parameter ${h}`,I=ps(I),p=rt(I),at(I),new Vt(`${o} has unknown type ${p}`);m[x]=C}return m},gm=(o,p,m)=>{var h=[];return o=o(h,m),h.length&&(($(),j)[p>>>2>>>0]=Fe(h)),o},ym={},Er=o=>{var p=ym[o];return p===void 0?rt(o):p};function _m(o,p,m){var[h,...x]=mm(o,p>>>0);p=h.Vc.bind(h);var I=x.map(V=>V.Uc.bind(V));o--;var C={toValue:He};switch(o=I.map((V,X)=>{var le=`argFromPtr${X}`;return C[le]=V,`${le}(args${X?"+"+8*X:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:C.getStringOrSymbol=Er,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,h.zd||(C.toReturnWire=p,C.emval_returnValue=gm,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(C),B)(...Object.values(C)),B=`methodCaller<(${x.map(V=>V.name)}) => ${h.name}>`,fm(Object.defineProperty(m,"name",{value:B}))}function bm(o,p){return p>>>=0,(o=He(o>>>0))==He(p)}function wm(o){return(o>>>=0)?(o=Er(o),Fe(globalThis[o])):Fe(globalThis)}function $m(o){return o=Er(o>>>0),Fe(t[o])}function vm(o,p){return p>>>=0,o=He(o>>>0),p=He(p),Fe(o[p])}function xm(o){9<(o>>>=0)&&(kt[o+1]+=1)}function Zn(o,p,m,h,x){return mi[o>>>0](p>>>0,m>>>0,h>>>0,x>>>0)}function Sm(o,p,m,h,x){return Zn(o>>>0,p>>>0,m>>>0,h>>>0,x>>>0)}function km(){return Fe([])}function Tm(o){o=He(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Fe(p)}function Im(o){return Fe(Er(o>>>0))}function Em(){return Fe({})}function zm(o){for(var p=He(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}li(o)}function Cm(o,p,m){p>>>=0,m>>>=0,o=He(o>>>0),p=He(p),m=He(m),o[p]=m}function Am(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),O)[p>>>2>>>0]=o.getUTCSeconds(),($(),O)[p+4>>>2>>>0]=o.getUTCMinutes(),($(),O)[p+8>>>2>>>0]=o.getUTCHours(),($(),O)[p+12>>>2>>>0]=o.getUTCDate(),($(),O)[p+16>>>2>>>0]=o.getUTCMonth(),($(),O)[p+20>>>2>>>0]=o.getUTCFullYear()-1900,($(),O)[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),O)[p+28>>>2>>>0]=o}var Xn=o=>o%4==0&&(o%100!=0||o%400==0),Qn=[0,31,60,91,121,152,182,213,244,274,305,335],Yn=[0,31,59,90,120,151,181,212,243,273,304,334];function Om(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),($(),O)[p>>>2>>>0]=o.getSeconds(),($(),O)[p+4>>>2>>>0]=o.getMinutes(),($(),O)[p+8>>>2>>>0]=o.getHours(),($(),O)[p+12>>>2>>>0]=o.getDate(),($(),O)[p+16>>>2>>>0]=o.getMonth(),($(),O)[p+20>>>2>>>0]=o.getFullYear()-1900,($(),O)[p+24>>>2>>>0]=o.getDay();var m=(Xn(o.getFullYear())?Qn:Yn)[o.getMonth()]+o.getDate()-1|0;($(),O)[p+28>>>2>>>0]=m,($(),O)[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var h=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=h&&o.getTimezoneOffset()==Math.min(h,m)),($(),O)[p+32>>>2>>>0]=o}function Rm(o){o>>>=0;var p=new Date(($(),O)[o+20>>>2>>>0]+1900,($(),O)[o+16>>>2>>>0],($(),O)[o+12>>>2>>>0],($(),O)[o+8>>>2>>>0],($(),O)[o+4>>>2>>>0],($(),O)[o>>>2>>>0],0),m=($(),O)[o+32>>>2>>>0],h=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),I=new Date(p.getFullYear(),0,1).getTimezoneOffset(),C=Math.min(I,x);return 0>m?($(),O)[o+32>>>2>>>0]=+(x!=I&&C==h):0<m!=(C==h)&&(x=Math.max(I,x),p.setTime(p.getTime()+6e4*((0<m?C:x)-h))),($(),O)[o+24>>>2>>>0]=p.getDay(),m=(Xn(p.getFullYear())?Qn:Yn)[p.getMonth()]+p.getDate()-1|0,($(),O)[o+28>>>2>>>0]=m,($(),O)[o>>>2>>>0]=p.getSeconds(),($(),O)[o+4>>>2>>>0]=p.getMinutes(),($(),O)[o+8>>>2>>>0]=p.getHours(),($(),O)[o+12>>>2>>>0]=p.getDate(),($(),O)[o+16>>>2>>>0]=p.getMonth(),($(),O)[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Jn(o,p,m,h,x,I,C){return a?se(16,1,o,p,m,h,x,I,C):-52}function es(o,p,m,h,x,I){if(a)return se(17,1,o,p,m,h,x,I)}var Jt={},Bm=()=>performance.timeOrigin+performance.now();function ts(o,p){if(a)return se(18,1,o,p);if(Jt[o]&&(clearTimeout(Jt[o].id),delete Jt[o]),!p)return 0;var m=setTimeout(()=>{delete Jt[o],Sr(()=>gs(o,performance.timeOrigin+performance.now()))},p);return Jt[o]={id:m,Yd:p},0}function Nm(o,p,m,h){o>>>=0,p>>>=0,m>>>=0,h>>>=0;var x=new Date().getFullYear(),I=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var C=Math.max(I,x);($(),j)[o>>>2>>>0]=60*C,($(),O)[p>>>2>>>0]=+(I!=x),o=(p=B=>{var V=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(V/60)).padStart(2,"0")}${String(V%60).padStart(2,"0")}`})(I),p=p(x),x<I?(gt(o,m,17),gt(p,h,17)):(gt(o,h,17),gt(p,m,17))}var Mm=()=>Date.now();function Dm(o,p,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),($(),re)[m>>>3>>>0]=BigInt(o),0):28}var gi=[],rs=(o,p)=>{gi.length=0;for(var m;m=($(),K)[o++>>>0];){var h=m!=105;p+=(h&=m!=112)&&p%8?4:0,gi.push(m==112?($(),j)[p>>>2>>>0]:m==106?($(),re)[p>>>3>>>0]:m==105?($(),O)[p>>>2>>>0]:($(),Z)[p>>>3>>>0]),p+=h?8:4}return gi};function Pm(o,p,m){return o>>>=0,p=rs(p>>>0,m>>>0),Si[o](...p)}function Um(o,p,m){return o>>>=0,p=rs(p>>>0,m>>>0),Si[o](...p)}var qm=()=>{};function Lm(o,p){return E(Ie(o>>>0,p>>>0))}var Wm=()=>{throw ve+=1,"unwind"};function Vm(){return 4294901760}var Gm=()=>navigator.hardwareConcurrency,Tt={},zr=o=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+p[1]:0},is=o=>{for(var p of o)(o=zr(p))&&(Tt[o]=p)};function Hm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),is(o),Tt.gd=zr(o[3]),Tt.Jd=o,Tt.gd}function Cr(o){if(!(o=Tt[o>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(o))o=p[1];else{if(!(p=/^(.+?)@/.exec(o)))return 0;o=p[1]}at(Cr.hd??0),p=xr(o)+1;var m=er(p);return m&&gt(o,m,p),Cr.hd=m,Cr.hd}function jm(o){o>>>=0;var p=($(),K).length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var h=p*(1+.2/m);h=Math.min(h,o+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(o,h)/65536))-mt.buffer.byteLength+65535)/65536|0;try{mt.grow(h),H();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function Fm(o,p,m){if(o>>>=0,p>>>=0,Tt.gd==o)var h=Tt.Jd;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),is(h);for(var x=3;h[x]&&zr(h[x])!=o;)++x;for(o=0;o<m&&h[o+x];++o)($(),O)[p+4*o>>>2>>>0]=zr(h[o+x]);return o}var yi,_i={},as=()=>{var h;if(!yi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((h=globalThis.navigator)==null?void 0:h.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in _i)_i[o]===void 0?delete p[o]:p[o]=_i[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);yi=m}return yi};function ns(o,p){if(a)return se(19,1,o,p);o>>>=0,p>>>=0;var m,h=0,x=0;for(m of as()){var I=p+h;($(),j)[o+x>>>2>>>0]=I,h+=gt(m,I,1/0)+1,x+=4}return 0}function ss(o,p){if(a)return se(20,1,o,p);o>>>=0,p>>>=0;var m=as();for(var h of(($(),j)[o>>>2>>>0]=m.length,o=0,m))o+=xr(h)+1;return($(),j)[p>>>2>>>0]=o,0}function os(o){return a?se(21,1,o):52}function us(o,p,m,h){return a?se(22,1,o,p,m,h):52}function ls(o,p,m,h){return a?se(23,1,o,p,m,h):70}var Km=[null,[],[]];function ds(o,p,m,h){if(a)return se(24,1,o,p,m,h);p>>>=0,m>>>=0,h>>>=0;for(var x=0,I=0;I<m;I++){var C=($(),j)[p>>>2>>>0],B=($(),j)[p+4>>>2>>>0];p+=8;for(var V=0;V<B;V++){var X=o,le=($(),K)[C+V>>>0],me=Km[X];le===0||le===10?((X===1?k:E)(En(me)),me.length=0):me.push(le)}x+=B}return($(),j)[h>>>2>>>0]=x,0}function Zm(o){return o>>>0}a||function(){for(var o=t.numThreads-1;o--;)$n();De.push(async()=>{var p=async function(){if(!a)return Promise.all(ft.map(wn))}();qe++,await p,--qe==0&&Pe&&(p=Pe,Pe=null,p())})}(),a||(mt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),H()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>pe(),t.stackRestore=o=>de(o),t.stackAlloc=o=>$i(o),t.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),P)[o>>>0]=p;break;case"i16":($(),Q)[o>>>1>>>0]=p;break;case"i32":($(),O)[o>>>2>>>0]=p;break;case"i64":($(),re)[o>>>3>>>0]=BigInt(p);break;case"float":($(),F)[o>>>2>>>0]=p;break;case"double":($(),Z)[o>>>3>>>0]=p;break;case"*":($(),j)[o>>>2>>>0]=p;break;default:q(`invalid type for setValue: ${m}`)}},t.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),P)[o>>>0];case"i16":return($(),Q)[o>>>1>>>0];case"i32":return($(),O)[o>>>2>>>0];case"i64":return($(),re)[o>>>3>>>0];case"float":return($(),F)[o>>>2>>>0];case"double":return($(),Z)[o>>>3>>>0];case"*":return($(),j)[o>>>2>>>0];default:q(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Ie,t.stringToUTF8=gt,t.lengthBytesUTF8=xr;var ps,cs,Ar,at,er,bi,hs,fs,ms,wi,gs,ys,ce,tr,_s,de,$i,pe,bs,vi,ws,$s,vs,xi,xs,Ss,ks,Ts,Is,Es,zs,Cs,As,Os,Rs,Bs,Ns,Ms,Ds,Ps,Us,qs,Ls,Ws,Vs,Gs,Hs,js,Fs,Ks,Zs,Xs,Qs,Ys,Js,eo,to,ro,io,ao,no,so,oo,lt,Xm=[Le,wr,Sn,zn,Cn,An,On,Rn,Bn,Nn,Mn,Dn,Pn,Un,qn,Ln,Jn,es,ts,ns,ss,os,us,ls,ds],Si={1003524:(o,p,m,h,x)=>{if(t===void 0||!t.Xc)return 1;if((o=Ie(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),h=Number(h>>>0),p+m>o.byteLength)return 3;try{let I=o.subarray(p,p+m);switch(x){case 0:($(),K).set(I,h>>>0);break;case 1:t.Qd?t.Qd(h,I):t.Id(h,I);break;default:return 4}return 0}catch{return 4}},1004348:(o,p,m)=>{t.td(o,($(),K).subarray(p>>>0,p+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m),!0)},1004704:(o,p,m)=>{t.ed(Number(o),Number(p),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,p,m)=>{t.$b("HardSigmoid",o,{alpha:p,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,p,m)=>{t.$b("Clip",o,{min:p,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,p)=>{t.$b("Elu",o,{alpha:p})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,p)=>{t.$b("LeakyRelu",o,{alpha:p})},1006444:(o,p)=>{t.$b("ThresholdedRelu",o,{alpha:p})},1006514:(o,p)=>{t.$b("Cast",o,{to:p})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,p,m,h,x)=>{t.$b("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1007283:(o,p,m,h,x)=>{t.$b("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1007457:(o,p,m,h,x)=>{t.$b("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1007631:(o,p,m,h,x)=>{t.$b("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1007806:(o,p,m,h,x)=>{t.$b("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1007980:(o,p,m,h,x)=>{t.$b("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1008153:(o,p,m,h,x)=>{t.$b("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1008326:(o,p,m,h,x)=>{t.$b("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1008503:(o,p,m,h,x)=>{t.$b("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1008683:(o,p,m,h,x)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,p,m)=>{t.$b("Transpose",o,{perm:p?Array.from(($(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1009040:(o,p,m,h)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ie(m),format:h?"NHWC":"NCHW"})},1009173:(o,p,m,h)=>{t.$b("DepthToSpace",o,{blocksize:p,mode:Ie(m),format:h?"NHWC":"NCHW"})},1009306:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe,_t)=>{t.$b("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[m],group:h,kernelShape:[x],pads:[I,C],strides:[B],wIsConst:()=>!!($(),P)[X>>>0],outputPadding:le?Array.from(($(),O).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from(($(),O).subarray(Number(be)>>>0,Number(xe)>>>0)):[],activation:Ie(_t)})},1009739:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:h,kernelShape:Array.from(($(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from(($(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!($(),P)[V>>>0],outputPadding:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:Ie(xe)})},1010400:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe,_t)=>{t.$b("ConvTranspose",o,{format:V?"NHWC":"NCHW",autoPad:p,dilations:[m],group:h,kernelShape:[x],pads:[I,C],strides:[B],wIsConst:()=>!!($(),P)[X>>>0],outputPadding:le?Array.from(($(),O).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from(($(),O).subarray(Number(be)>>>0,Number(xe)>>>0)):[],activation:Ie(_t)})},1010833:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),O).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:h,kernelShape:Array.from(($(),O).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),pads:Array.from(($(),O).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from(($(),O).subarray(Number(C)>>>0,(Number(C)>>>0)+2>>>0)),wIsConst:()=>!!($(),P)[V>>>0],outputPadding:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:Ie(xe)})},1011494:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1011585:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("AveragePool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),O).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1012064:(o,p)=>{t.$b("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},1012155:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("AveragePool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),O).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1012634:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1012721:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("MaxPool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),O).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1013196:(o,p)=>{t.$b("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},1013283:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe)=>{t.$b("MaxPool",o,{format:xe?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[],kernel_shape:B?Array.from(($(),O).subarray(Number(B)>>>0,Number(V)>>>0)):[],pads:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),O).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},1013758:(o,p,m,h,x)=>{t.$b("Gemm",o,{alpha:p,beta:m,transA:h,transB:x})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,p,m,h)=>{t.$b("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:h})},1014024:(o,p,m,h)=>{t.$b("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:h})},1014132:(o,p)=>{t.$b("Softmax",o,{axis:p})},1014195:(o,p)=>{t.$b("Concat",o,{axis:p})},1014255:(o,p,m,h,x)=>{t.$b("Split",o,{axis:p,numOutputs:m,splitSizes:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,p)=>{t.$b("Gather",o,{axis:Number(p)})},1014536:(o,p)=>{t.$b("GatherElements",o,{axis:Number(p)})},1014615:(o,p)=>{t.$b("GatherND",o,{batch_dims:Number(p)})},1014694:(o,p,m,h,x,I,C,B,V,X,le)=>{t.$b("Resize",o,{antialias:p,axes:m?Array.from(($(),O).subarray(Number(m)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Ie(x),cubicCoeffA:I,excludeOutside:C,extrapolationValue:B,keepAspectRatioPolicy:Ie(V),mode:Ie(X),nearestMode:Ie(le)})},1015056:(o,p,m,h,x,I,C)=>{t.$b("Slice",o,{starts:p?Array.from(($(),O).subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[],axes:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015486:(o,p,m)=>{t.$b("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,p)=>{t.$b("Einsum",o,{equation:Ie(p)})},1015734:(o,p,m,h,x)=>{t.$b("Pad",o,{mode:p,value:m,pads:h?Array.from(($(),O).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},1015877:(o,p,m,h,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!h,format:I?"NHWC":"NCHW"})},1016046:(o,p,m,h,x,I)=>{t.$b("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!x,trainingMode:!!h,format:I?"NHWC":"NCHW"})},1016215:(o,p,m)=>{t.$b("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},1016312:(o,p,m)=>{t.$b("DequantizeLinear",o,{axis:p,blockSize:m})},1016402:(o,p,m,h,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Ie(m),padding_mode:Ie(h),format:x?"NHWC":"NCHW"})},1016572:(o,p,m,h,x)=>{t.$b("GridSample",o,{align_corners:p,mode:Ie(m),padding_mode:Ie(h),format:x?"NHWC":"NCHW"})},1016742:(o,p)=>{t.$b("ScatterND",o,{reduction:Ie(p)})},1016827:(o,p,m,h,x,I,C,B,V)=>{t.$b("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:h,scale:x,doRotary:I,qkvHiddenSizes:C?Array.from(($(),O).subarray(Number(B)>>>0,Number(B)+C>>>0)):[],pastPresentShareBuffer:!!V})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,p,m,h,x,I,C,B,V,X,le,me,be,xe,_t,ki)=>{t.$b("Conv",o,{format:me?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(($(),O).subarray(Number(m)>>>0,Number(h)>>>0)):[],group:x,kernel_shape:I?Array.from(($(),O).subarray(Number(I)>>>0,Number(C)>>>0)):[],pads:B?Array.from(($(),O).subarray(Number(B)>>>0,Number(V)>>>0)):[],strides:X?Array.from(($(),O).subarray(Number(X)>>>0,Number(le)>>>0)):[],w_is_const:()=>!!($(),P)[Number(be)>>>0],activation:Ie(xe),activation_params:_t?Array.from(($(),F).subarray(Number(_t)>>>0,Number(ki)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,p,m,h,x,I,C,B,V)=>{t.$b("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:h,softcap:x,doRotary:I,rotaryInterleaved:C,smoothSoftmax:B,localWindowSize:V})},1018124:(o,p,m,h)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!h})},1018235:(o,p,m,h)=>{t.$b("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!h})},1018346:(o,p,m,h,x,I)=>{t.$b("MatMulNBits",o,{k:p,n:m,accuracyLevel:h,bits:x,blockSize:I})},1018473:(o,p,m,h,x,I)=>{t.$b("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:h,scale:x,doRotary:I})},1018632:(o,p)=>{t.$b("QuickGelu",o,{alpha:p})},1018696:(o,p,m,h,x)=>{t.$b("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:h,scale:x})},1018835:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1018937:(o,p,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},1019039:(o,p,m,h)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:h})},1019160:o=>{t.Fd(o)},1019194:(o,p)=>t.Hd(Number(o),Number(p),t.Yc.Kd,t.Yc.errors)};function Qm(o,p,m){return Kn(async()=>{await t.Dd(Number(o),Number(p),Number(m))})}function Ym(){return typeof wasmOffsetConverter<"u"}function Jm(o,p,m,h){var x=pe();try{return Cs(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function eg(o,p,m){var h=pe();try{return Ts(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;ce(1,0)}}function tg(o){var p=pe();try{xs(o)}catch(m){if(de(p),m!==m+0)throw m;ce(1,0)}}function rg(o,p){var m=pe();try{return xi(o,p)}catch(h){if(de(m),h!==h+0)throw h;ce(1,0)}}function ig(o,p,m){var h=pe();try{vs(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;ce(1,0)}}function ag(o,p){var m=pe();try{As(o,p)}catch(h){if(de(m),h!==h+0)throw h;ce(1,0)}}function ng(o,p,m,h,x,I,C){var B=pe();try{return Es(o,p,m,h,x,I,C)}catch(V){if(de(B),V!==V+0)throw V;ce(1,0)}}function sg(o,p,m,h,x,I){var C=pe();try{Ss(o,p,m,h,x,I)}catch(B){if(de(C),B!==B+0)throw B;ce(1,0)}}function og(o,p,m,h){var x=pe();try{zs(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function ug(o,p,m,h,x){var I=pe();try{ks(o,p,m,h,x)}catch(C){if(de(I),C!==C+0)throw C;ce(1,0)}}function lg(o,p,m,h,x,I,C){var B=pe();try{Rs(o,p,m,h,x,I,C)}catch(V){if(de(B),V!==V+0)throw V;ce(1,0)}}function dg(o,p,m,h,x,I,C){var B=pe();try{Bs(o,p,m,h,x,I,C)}catch(V){if(de(B),V!==V+0)throw V;ce(1,0)}}function pg(o,p,m,h,x,I,C,B){var V=pe();try{Ps(o,p,m,h,x,I,C,B)}catch(X){if(de(V),X!==X+0)throw X;ce(1,0)}}function cg(o,p,m,h,x){var I=pe();try{return Os(o,p,m,h,x)}catch(C){if(de(I),C!==C+0)throw C;ce(1,0)}}function hg(o,p,m){var h=pe();try{return Us(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;ce(1,0)}}function fg(o,p,m,h,x,I,C,B){var V=pe();try{qs(o,p,m,h,x,I,C,B)}catch(X){if(de(V),X!==X+0)throw X;ce(1,0)}}function mg(o,p,m,h,x,I,C,B,V,X,le,me){var be=pe();try{Ns(o,p,m,h,x,I,C,B,V,X,le,me)}catch(xe){if(de(be),xe!==xe+0)throw xe;ce(1,0)}}function gg(o,p,m,h,x,I){var C=pe();try{return Ms(o,p,m,h,x,I)}catch(B){if(de(C),B!==B+0)throw B;ce(1,0)}}function yg(o,p,m){var h=pe();try{return Ls(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;return ce(1,0),0n}}function _g(o,p,m,h,x,I,C,B,V){var X=pe();try{Is(o,p,m,h,x,I,C,B,V)}catch(le){if(de(X),le!==le+0)throw le;ce(1,0)}}function bg(o){var p=pe();try{return Ws(o)}catch(m){if(de(p),m!==m+0)throw m;ce(1,0)}}function wg(o,p){var m=pe();try{return io(o,p)}catch(h){if(de(m),h!==h+0)throw h;return ce(1,0),0n}}function $g(o){var p=pe();try{return Vs(o)}catch(m){if(de(p),m!==m+0)throw m;return ce(1,0),0n}}function vg(o,p,m,h){var x=pe();try{return Zs(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function xg(o,p,m,h,x){var I=pe();try{return Xs(o,p,m,h,x)}catch(C){if(de(I),C!==C+0)throw C;ce(1,0)}}function Sg(o,p,m,h,x,I){var C=pe();try{return Qs(o,p,m,h,x,I)}catch(B){if(de(C),B!==B+0)throw B;ce(1,0)}}function kg(o,p,m,h,x,I){var C=pe();try{return Ys(o,p,m,h,x,I)}catch(B){if(de(C),B!==B+0)throw B;ce(1,0)}}function Tg(o,p,m,h,x,I,C,B){var V=pe();try{return Ds(o,p,m,h,x,I,C,B)}catch(X){if(de(V),X!==X+0)throw X;ce(1,0)}}function Ig(o,p,m,h,x){var I=pe();try{return Js(o,p,m,h,x)}catch(C){if(de(I),C!==C+0)throw C;return ce(1,0),0n}}function Eg(o,p,m,h){var x=pe();try{return eo(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function zg(o,p,m,h){var x=pe();try{return to(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function Cg(o,p,m,h,x,I,C,B,V,X,le,me){var be=pe();try{return ro(o,p,m,h,x,I,C,B,V,X,le,me)}catch(xe){if(de(be),xe!==xe+0)throw xe;ce(1,0)}}function Ag(o,p,m,h,x,I,C,B,V,X,le){var me=pe();try{Fs(o,p,m,h,x,I,C,B,V,X,le)}catch(be){if(de(me),be!==be+0)throw be;ce(1,0)}}function Og(o,p,m,h,x,I,C,B,V,X,le,me,be,xe,_t,ki){var Mg=pe();try{Ks(o,p,m,h,x,I,C,B,V,X,le,me,be,xe,_t,ki)}catch(Ti){if(de(Mg),Ti!==Ti+0)throw Ti;ce(1,0)}}function Rg(o,p,m){var h=pe();try{return Gs(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;ce(1,0)}}function Bg(o,p,m){var h=pe();try{return Hs(o,p,m)}catch(x){if(de(h),x!==x+0)throw x;ce(1,0)}}function Ng(o,p,m,h){var x=pe();try{js(o,p,m,h)}catch(I){if(de(x),I!==I+0)throw I;ce(1,0)}}function Or(){if(0<qe)Pe=Or;else if(a)b==null||b(t),Y();else{for(var o=De;0<o.length;)o.shift()(t);0<qe?Pe=Or:(t.calledRun=!0,A||(Y(),b==null||b(t)))}}return a||(lt=await Ne(),Or()),t.PTR_SIZE=4,U?t:new Promise((o,p)=>{b=o,S=p})}var cp,fo,d0=L(()=>{var e,t;cp=ho,fo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),fo&&ho()}),Oi,ka,mo,We,hp,Br,go,yo,Ri,_o,Bi,fp,Ni,mp,Ha=L(()=>{Ga(),Oi=typeof location>"u"?void 0:location.origin,ka=import.meta.url>"file:"&&import.meta.url<"file;",mo=()=>{{if(ka){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Oi).href}return import.meta.url}},We=mo(),hp=()=>{if(We&&!We.startsWith("blob:"))return We.substring(0,We.lastIndexOf("/")+1)},Br=(e,t)=>{try{let r=t??We;return(r?new URL(e,r):new URL(e)).origin===Oi}catch{return!1}},go=(e,t)=>{let r=t??We;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},yo=(e,t)=>`${t??"./"}${e}`,Ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_o=async e=>(await import(e)).default,Bi=(l0(),_r(lp)).default,fp=async()=>{if(!We)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Br(We))return[void 0,Bi()];let e=await Ri(We);return[e,Bi(e)]},Ni=(d0(),_r(pp)).default,mp=async(e,t,r,i)=>{let a=Ni&&!(e||t);if(a)if(We)a=Br(We)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Ni];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??go(n,t),u=r&&s&&!Br(s,t),l=u?await Ri(s):s??yo(n,t);return[u?l:void 0,await _o(l)]}}}),Mi,Nr,ir,Di,bo,wo,$o,ja,$e,qt=L(()=>{Ha(),Nr=!1,ir=!1,Di=!1,bo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},wo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},$o=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ja=async e=>{if(Nr)return Promise.resolve();if(ir)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Di)throw new Error("previous call to 'initializeWebAssembly()' failed.");ir=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!$o())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!wo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=bo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,u=(s==null?void 0:s.href)??s,l=a==null?void 0:a.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[f,g]=await mp(u,n,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c,v.locateFile=w=>w;else if(d||n)v.locateFile=w=>d??n+w;else if(u&&u.indexOf("blob:")!==0)v.locateFile=w=>new URL(w,u).href;else if(f){let w=hp();w&&(v.locateFile=T=>w+T)}g(v).then(w=>{ir=!1,Nr=!0,Mi=w,b(),f&&URL.revokeObjectURL(f)},w=>{ir=!1,Di=!0,S(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},$e=()=>{if(Nr&&Mi)return Mi;throw new Error("WebAssembly is not initialized yet.")}}),Je,Qr,_e,Fa=L(()=>{qt(),Je=(e,t)=>{let r=$e(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Qr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Qr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},_e=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),gp,p0=L(()=>{qt(),Fa(),gp=e=>{let t=$e(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let n=0;return(e==null?void 0:e.tag)!==void 0&&(n=Je(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&_e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Qr(e.extra,"",new WeakSet,(s,u)=>{let l=Je(s,i),d=Je(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&_e(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),vo,xo,So,It,ko,yp,c0=L(()=>{qt(),Fa(),vo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},xo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},So=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},It=(e,t,r,i)=>{let a=Je(t,i),n=Je(r,i);$e()._OrtAddSessionConfigEntry(e,a,n)!==0&&_e(`Can't set a session config entry: ${t} - ${r}.`)},ko=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",It(e,"session.disable_quant_qdq","1",r),It(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let f=a==null?void 0:a.deviceType;f&&It(e,"deviceType",f,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let f=a;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);It(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let u=Je(n,r),l=s.length,d=0,c=0;if(l>0){d=$e()._malloc(l*$e().PTR_SIZE),r.push(d),c=$e()._malloc(l*$e().PTR_SIZE),r.push(c);for(let f=0;f<l;f++)$e().setValue(d+f*$e().PTR_SIZE,s[f][0],"*"),$e().setValue(c+f*$e().PTR_SIZE,s[f][1],"*")}await $e()._OrtAppendExecutionProvider(e,u,d,c,l)!==0&&_e(`Can't append execution provider: ${n}.`)}},yp=async e=>{let t=$e(),r=0,i=[],a=e||{};So(a);try{let n=vo(a.graphOptimizationLevel??"all"),s=xo(a.executionMode??"sequential"),u=typeof a.logId=="string"?Je(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Je(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&_e("Can't create session options."),a.executionProviders&&await ko(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);It(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,g]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Je(f,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&_e(`Can't set a free dimension override: ${f} - ${g}.`)}return a.extra!==void 0&&Qr(a.extra,"",new WeakSet,(f,g)=>{It(r,f,g,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&_e("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Rt,pt,Bt,ai,Yr,Ka,Za,Ta,ne=L(()=>{Rt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},pt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Bt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},ai=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Yr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ka=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Za=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ta=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Xa,_p=L(()=>{Ga(),Xa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),To,Io,Eo,zo,Qa,Co,he,ct=L(()=>{ne(),To=["V","I","W","E","F"],Io=(e,t)=>{console.log(`[${To[e]},${new Date().toISOString()}]${t}`)},Qa=(e,t)=>{Eo=e,zo=t},Co=(e,t)=>{let r=Yr(e),i=Yr(Eo);r>=i&&Io(r,typeof t=="function"?t():t)},he=(...e)=>{zo&&Co(...e)}}),Ao,Kt,R,Jr,bp,wp,$p,oe=L(()=>{Ao=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Kt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=Ao.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},R=class Fr{static size(t){return Fr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Fr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Fr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Jr=class hr{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)hr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return hr.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return hr.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(hr.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},bp=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Kt.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},wp=-34028234663852886e22,$p=34028234663852886e22}),Ya,vp=L(()=>{ne(),Ya=(e,t)=>new(ai(t))(e)}),Pi,Ia,Ui,Oo,qi,Ro,Li,Wi,Vi,Bo,xp,h0=L(()=>{ne(),ct(),Pi=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ia=(e,t)=>{if(t==="int32")return e;let r=Pi.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(ai(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ui=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Oo=1,qi=()=>Oo++,Ro=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Li=(e,t)=>{let r=Pi.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Wi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Li(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ui(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Vi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!(n!=null&&n.input.dataTypes.includes(t))){if(s=Ro.get(t),!s||(n==null?void 0:n.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);he("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Li(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Ia(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Ui(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Bo=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=qi();return this.tensorTrackersById.set(e,new Vi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=qi(),s=new Wi({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Vi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Wi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},xp=(...e)=>new Bo(...e)}),ar,No,Sp,f0=L(()=>{ne(),qt(),vp(),h0(),ct(),ar=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),No=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Sp=class{constructor(e){this.tensorManager=xp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Qa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>No(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=ar.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ar.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!$e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ya(r,t)}}registerMLTensor(e,t,r,i){let a=ar.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=Ia(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ar.get(Rt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(a!=null&&a.input.dataTypes.includes(i)):!!(a!=null&&a.output.dataTypes.includes(i))}flush(){}}}),Ja=L(()=>{}),Gi,Mr,Dr,Mo,Do,Hi,Ea,Po,kp,m0=L(()=>{ct(),Ja(),Gi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Mr=[],Dr=e=>Math.ceil(Number(e)/16)*16,Mo=e=>{for(let t=0;t<Mr.length;t++){let r=Mr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Do=1,Hi=()=>Do++,Ea=async(e,t,r,i)=>{let a=Dr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},Po=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Gi)Mr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Dr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Dr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Hi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Mo(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Hi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ea(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Gi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},kp=(...e)=>new Po(...e)}),Uo,ye,ke=L(()=>{Uo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ye=e=>new Uo(e)}),Zt,Pr,Ee,Re,te,Se,za,Ft,vt,ee,nr,M,J,Tp,en,qo,Ip,ue=L(()=>{ne(),oe(),Zt=64,Pr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[1]},te=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},Se=e=>e%4===0?4:e%2===0?2:1,za=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ft=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ee=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,nr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Pr(t,a),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],g={indices:l,value:c,storage:f,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=n?"uniforms.":"",S=`${b}${e}_shape`,v=`${b}${e}_strides`,w="";for(let U=0;U<s-1;U++)w+=`
    let dim${U} = current / ${ee(v,U,s)};
    let rest${U} = current % ${ee(v,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),E=[];if(s>=2)for(let U=s-1;U>=0;U--)E.push(`${ee(v,U,s)} * (indices[${U}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,z=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),$=(...U)=>s===0?"0u":`${g.indices}(${U.map(y).join(",")})`,N=(U,H)=>s<2?`${U}`:`${ee(U,H,s)}`,P=(U,H,Y)=>s<2?`${U}=${Y};`:`${ee(U,H,s)}=${Y};`,K={},Q=(U,H)=>{_.broadcastedIndicesToOffset=!0;let Y=`${H.name}broadcastedIndicesTo${e}Offset`;if(Y in K)return`${Y}(${U})`;let q=[];for(let fe=s-1;fe>=0;fe--){let Ne=H.indicesGet("outputIndices",fe+H.rank-s);q.push(`${N(v,fe)} * (${Ne} % ${N(S,fe)})`)}return K[Y]=`fn ${Y}(outputIndices: ${H.type.indices}) -> u32 {
             return ${q.length>0?q.join("+"):"0u"};
           }`,`${Y}(${U})`},D=(U,H)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${H};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${H}), select(0u, 0xFFFFFFFFu, ${H} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${H}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${H}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),O=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),j=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${c} {
    return ${O(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let U=u.map(Y=>`d${Y}: u32`).join(", "),H=u.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${$(H)});
  }`})(),Z=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let H=U.map(y).join(",");return s===0?O("0u"):s===1?O(H[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${H})`)},re=U=>s<2?O(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),W=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${c}) {
    ${D(`i2o_${e}(indices)`,"value")}
  }`,ae=s<2?"":(()=>{let U=u.map(Y=>`d${Y}: u32`).join(", "),H=u.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${$(H)}, value);
  }`})();return{impl:()=>{let U=[],H=!1;return _.offsetToIndices&&(U.push(T),H=!0),_.indicesToOffset&&(U.push(A),H=!0),_.broadcastedIndicesToOffset&&(Object.values(K).forEach(Y=>U.push(Y)),H=!0),_.set&&(U.push(ae),H=!0),_.setByIndices&&(U.push(W),H=!0),_.get&&(U.push(F),H=!0),_.getByIndices&&(U.push(j),H=!0),!n&&H&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${v} = ${g.indices}(${R.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:Q,indices:$,indicesGet:N,indicesSet:P,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let H=U[s];if(typeof H!="string")throw new Error("value must be string");let Y=U.slice(0,s).map(y).join(",");return s===0?D("0u",H):s===1?D(Y[0],H):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Y}, ${H})`)},setByOffset:D,setByIndices:(U,H)=>s<2?D(U,H):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${H});`),get:Z,getByOffset:O,getByIndices:re,usage:i,name:e,strides:v,shape:S,rank:s}},M=(e,t,r,i=1)=>nr(e,t,r,"input",i),J=(e,t,r,i=1)=>nr(e,t,r,"output",i),Tp=(e,t,r)=>nr(e,t,r,"atomicOutput",1),en=(e,t,r,i=1)=>nr(e,t,r,"internal",i),qo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Zt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ip=(e,t)=>new qo(e,t)}),Lo,ji,Wo,Vo,Go,Ho,Ge,Ep,zp,xt=L(()=>{ne(),oe(),ke(),ue(),Lo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ji=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Wo=(e,t)=>R.sortBasedOnPerm(e,ji(e.length,t)),Vo=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Go=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Ho=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ge=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ji(i,t),n=Wo(e.dims,a),s=e.dims,u=n,l=i<2||Ho(a,e.dims),d;if(l)return d=_=>{let b=M("input",r,s,4),S=J("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Go(e.dims,a),g=R.areEqual(f,[2,3,1]),y=R.areEqual(f,[3,1,2]);if(c.length===2||g||y){s=g?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let _=16;return d=b=>{let S=M("a",r,s.length),v=J("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...te(s,u)]}},getShaderSource:d}}return d=_=>{let b=M("a",r,s.length),S=J("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,S)}

  ${Vo(a,i,b,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(s,u)]}},getShaderSource:d}},Ep=(e,t)=>{Lo(e.inputs,t.perm),e.compute(Ge(e.inputs[0],t.perm))},zp=e=>ye({perm:e.perm})}),jo,Fo,Ko,Zo,Xo,Qo,Yo,Jo,eu,tu,Ke,Cp,Ap,Op,Rp,Bp,Np,Mp,Dp,Pp,Up,g0=L(()=>{ne(),oe(),ue(),tn(),xt(),jo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Fo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ko={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Zo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Xo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Qo=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Yo=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Jo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},eu=(e,t)=>{let r=[];if(!Jo(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},tu=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=R.size(n),d=R.size(s),c=M("_A",r[0].dataType,u),f=J("output",a,n),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ko[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${jo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Fo[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Zo[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ke=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ca(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((y,_)=>_));let s=R.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=eu(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ge(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=Xo(u.length,l.dims.length));let[c,f]=Qo(l.dims,u),g=c;a.keepDims&&(g=Yo(c,s)),e.compute(tu(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,f),{inputs:[l]})},Cp=(e,t)=>{Ke(e,"ReduceMeanShared",t,"mean")},Ap=(e,t)=>{Ke(e,"ReduceL1Shared",t,"l1")},Op=(e,t)=>{Ke(e,"ReduceL2Shared",t,"l2")},Rp=(e,t)=>{Ke(e,"ReduceLogSumExpShared",t,"logSumExp")},Bp=(e,t)=>{Ke(e,"ReduceMaxShared",t,"max")},Np=(e,t)=>{Ke(e,"ReduceMinShared",t,"min")},Mp=(e,t)=>{Ke(e,"ReduceProdShared",t,"prod")},Dp=(e,t)=>{Ke(e,"ReduceSumShared",t,"sum")},Pp=(e,t)=>{Ke(e,"ReduceSumSquareShared",t,"sumSquare")},Up=(e,t)=>{Ke(e,"ReduceLogSumShared",t,"logSum")}}),Ze,ru,ei,Ca,Xe,iu,au,nu,su,ou,uu,lu,du,pu,cu,Qe,qp,Lp,Wp,Vp,Gp,Hp,jp,Fp,Kp,Zp,tn=L(()=>{ne(),oe(),ke(),ue(),g0(),Ze=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ru=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ei=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=R.normalizeAxes(a,c),g=!u&&f.length===0;d.forEach((b,S)=>{g||f.indexOf(S)>=0?s&&l.push(1):l.push(b)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],v=M("_A",r[0].dataType,c),w=J("output",n,y),T=i(v,w,f),k=T[2];for(let E=0,A=0;E<c;E++)g||f.indexOf(E)>=0?(s&&A++,k=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(S.push(`${v.indicesSet("input_indices",E,w.indicesGet("output_indices",A))};`),A++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${k}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...te(d,l)]})}},Ca=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ye({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Xe=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Ca(a,r);e.compute(ei(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?ru:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},iu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},au=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},nu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},su=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ou=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},uu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},lu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},du=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},pu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},cu=(e,t)=>{Ze(e.inputs),Xe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Qe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},qp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Cp(e,t)},Lp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Ap(e,t)},Wp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Op(e,t)},Vp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Rp(e,t)},Gp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Bp(e,t)},Hp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Np(e,t)},jp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Mp(e,t)},Fp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):Dp(e,t)},Kp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):Pp(e,t)},Zp=(e,t)=>{Qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Up(e,t)}}),Fi,Xp,Qp,Aa,y0=L(()=>{ne(),ke(),tn(),Fi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Xp=(e,t)=>{Fi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ei("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qp=(e,t)=>{Fi(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ei("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Aa=e=>ye(e)}),hu,Ur,fu,mu,gu,br,yu,Yp,rn=L(()=>{ne(),oe(),Ja(),ue(),hu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,g=f,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=_+b,v=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,r)=>t&&e?`
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
    `,fu=(e,t,r,i,a,n,s,u)=>{let l=Se(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:f}],y=Ee(e.dataType,l),_=Re(1,l),b=["type"];s&&b.push("type"),u&&b.push("type");let S=v=>{let w=J("x",e.dataType,e.dims,l),T=[w],k=s?M("seq_lens",s.dataType,s.dims):void 0;k&&T.push(k);let E=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;E&&T.push(E);let A=Re(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...T)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(k,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
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
        x[offset + i] = ${w.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},mu=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=f?[n.batchSize,g,d,n.headSize]:void 0,_=n.nReps?n.nReps:1,b=n.scale===0?1/Math.sqrt(n.headSize):n.scale,S=Se(n.headSize),v=n.headSize/S,w=12,T={x:Math.ceil(d/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},k=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:_}],E=f&&i&&R.size(i.dims)>0,A=["type","type"];E&&A.push("type"),a&&A.push("type"),u&&A.push("type"),l&&A.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=N=>{let P=M("q",t.dataType,t.dims,S),K=M("key",r.dataType,r.dims,S),Q=[P,K];if(E){let W=M("past_key",i.dataType,i.dims,S);Q.push(W)}a&&Q.push(M("attention_bias",a.dataType,a.dims));let D=u?M("seq_lens",u.dataType,u.dims):void 0;D&&Q.push(D);let O=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;O&&Q.push(O);let j=J("output",t.dataType,c),F=[j];f&&F.push(J("present_key",t.dataType,y,S));let Z=Re(1,S),re=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${P.type.storage}, ${w*w}>;
  ${N.registerUniforms(re).declareVariables(...Q,...F)}
  ${N.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(D,O,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
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
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${j.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${a!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:k}),getShaderSource:$}},gu=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,f=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,g,l,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,c],b=12,S={x:Math.ceil(a.vHeadSize/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],w=f&&i&&R.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),u&&T.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=A=>{let z=M("probs",t.dataType,t.dims),$=M("v",r.dataType,r.dims),N=[z,$];w&&N.push(M("past_value",i.dataType,i.dims));let P=s?M("seq_lens",s.dataType,s.dims):void 0;s&&N.push(P);let K=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(K);let Q=[J("output",t.dataType,_)];f&&Q.push(J("present_value",t.dataType,y));let D=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${z.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${z.type.value}, ${b*b}>;
  ${A.registerUniforms(D).declareVariables(...N,...Q)}
  ${A.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(P,K,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:k,dispatchGroup:S,programUniforms:v}),getShaderSource:E}},br=(e,t,r,i,a,n,s,u,l,d,c=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),y=g>1?s:void 0,_=g>1?u:void 0,b=g>1?d.pastSequenceLength:0,S=b+d.kvSequenceLength,v=l&&R.size(l.dims)>0?l:void 0,w=[t,r];y&&R.size(y.dims)>0&&w.push(y),v&&w.push(v),c&&w.push(c),f&&w.push(f);let T=e.compute(mu(g,t,r,y,v,d,b,c,f),{inputs:w,outputs:g>1?[-1,1]:[-1]})[0];e.compute(fu(T,d.batchSize,d.numHeads,b,d.sequenceLength,S,c,f),{inputs:c&&f?[T,c,f]:[T],outputs:[]});let k=[T,i];_&&R.size(_.dims)>0&&k.push(_),c&&k.push(c),f&&k.push(f),e.compute(gu(g,T,i,_,d,b,c,f),{inputs:k,outputs:g>1?[0,2]:[0]})},yu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let g=J("output_q",l[0].dataType,r),y=J("output_k",l[0].dataType,r),_=J("output_v",l[0].dataType,r),b=M("input",l[0].dataType,l[0].dims),S=M("weight",l[1].dataType,l[1].dims),v=M("bias",l[2].dataType,l[2].dims),w=b.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(T).declareVariables(b,S,v,g,y,_)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Yp=(e,t)=>{let r=hu(e.inputs,t),[i,a,n]=yu(e,r);return br(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),_u,bu,wu,Jp,_0=L(()=>{je(),ne(),oe(),ke(),ue(),_u=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},bu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Se(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=R.size(n)/s,d=i,c=d?n.length:n,f=M("x",e[0].dataType,e[0].dims,s),g=M("scale",e[1].dataType,e[1].dims,u),y=M("bias",e[2].dataType,e[2].dims,u),_=M("inputMean",e[3].dataType,e[3].dims,u),b=M("inputVar",e[4].dataType,e[4].dims,u),S=J("y",e[0].dataType,c,s),v=()=>{let T="";if(i)T=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<g.rank;k++)T+=`cIndices[${k}] = outputIndices[${k}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(f,g,y,_,b,S)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...te(n)]:[{type:12,data:l}]})}},wu=e=>ye(e),Jp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=wu({...t,outputCount:i});if(we.webgpu.validateInputContent&&_u(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(bu(r,a))}}),$u,vu,ec,b0=L(()=>{oe(),ue(),$u=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},vu=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,a=e[0].dataType,n=M("input",a,t,4),s=M("bias",a,[r],4),u=M("residual",a,t,4),l=J("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},ec=e=>{$u(e.inputs),e.compute(vu(e.inputs))}}),xu,ge,tc,rc,ic,ac,nc,sc,oc,uc,lc,Su,dc,pc,cc,hc,fr,fc,Kr,mc,gc,yc,_c,bc,wc,$c,vc,xc,Sc,kc,Tc,Ic,Ec,zc,Cc,Ki,Ac,Oa,Ra,Oc,Rc,Bc,ku,Tu,Nc,an=L(()=>{ne(),oe(),ke(),ue(),xu=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=M("inputData",r,[u],4),c=J("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ge=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>xu(d,R.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},tc=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},rc=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},ic=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},ac=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},nc=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},sc=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},oc=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},uc=e=>ye(e),lc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Su=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ye({min:t,max:r})},dc=(e,t)=>{let r=t||Su(e.inputs),i=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},pc=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},cc=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},hc=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},fr=e=>ye(e),fc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Kr=(e="f32")=>`
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
}`,mc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Kr(t)))},gc=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},yc=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},_c=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Kr(t)))},bc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},wc=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},$c=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},vc=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},xc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Sc=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},kc=e=>ye(e),Tc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ic=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},Ec=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},zc=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},Cc=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},Ki=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ac=e=>{e.compute(ge(e.inputs[0],"Tanh",Ki))},Oa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ki("v")};
}
`,Ra=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Oc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",Ra,Oa(t),void 0,e.inputs[0].dataType))},Rc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Bc=e=>{e.compute(ge(e.inputs[0],"Log","log"))},ku=(e,t)=>`
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
`,Tu=e=>`quick_gelu_impl(${e})`,Nc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",Tu,ku(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Iu,Eu,Mc,w0=L(()=>{oe(),ue(),an(),Iu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Eu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),a=J("output",e[0].dataType,t,4),n=R.size(t)/4,s=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Kr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Mc=e=>{Iu(e.inputs),e.compute(Eu(e.inputs))}}),zu,Cu,Ye,Dc,Pc,Uc,qc,Lc,Wc,Vc,Gc,Hc,jc,$0=L(()=>{ne(),oe(),ue(),zu=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let g,y;typeof u=="string"?g=y=(w,T)=>`${u}((${w}),(${T}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=J("outputData",c,i.length,4),b=M("aData",l,t.length,4),S=M("bData",d,r.length,4),v;if(a)if(n){let w=R.size(t)===1,T=R.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||T?v=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,k,E="")=>{let A=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${S.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${T}[${k}] = ${E}(${g(A,z)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Cu=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(u,l),c=u,f=R.size(u),g=!1,y=!1,_=[d];if(d){let b=Kt.calcShape(u,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),f=R.size(c);let S=R.size(u)===1,v=R.size(l)===1,w=u.length>0&&u[u.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(v),_.push(w),_.push(T);let k=1;for(let E=1;E<c.length;E++){let A=u[u.length-E],z=l[l.length-E];if(A===z)k*=A;else break}k%4===0?(y=!0,g=!0):(S||v||w||T)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>zu(b,u,l,c,g,d,y,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(c)/4)},...te(u,l,c)]})}},Ye=(e,t,r,i,a,n)=>{e.compute(Cu(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Dc=e=>{Ye(e,"Add",(t,r)=>`${t}+${r}`)},Pc=e=>{Ye(e,"Div",(t,r)=>`${t}/${r}`)},Uc=e=>{Ye(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},qc=e=>{Ye(e,"Mul",(t,r)=>`${t}*${r}`)},Lc=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ye(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},Wc=e=>{Ye(e,"Sub",(t,r)=>`${t}-${r}`)},Vc=e=>{Ye(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Gc=e=>{Ye(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Hc=e=>{Ye(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},jc=e=>{Ye(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Au,Ou,Ru,Bu,Fc,Kc,v0=L(()=>{ne(),oe(),ke(),ue(),Au=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Ou=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ru=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},Bu=(e,t,r,i)=>{let a=R.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],n[b]=u,d.push(e[b].dims.length),s[b]=M(`input${b}`,i,d[b]),l.push("rank"),c.push({type:12,data:n[b]});for(let b=0;b<e.length;++b)c.push(...te(e[b].dims));c.push(...te(r));let f=J("output",i,r.length),g=f.indicesGet("indices",t),y=Array.from(Array(n.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,f)})()}

  ${Ou(n.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ru(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:_}},Fc=(e,t)=>{let r=e.inputs,i=r[0].dims,a=R.normalizeAxis(t.axis,i.length);Au(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>R.size(u.dims)>0);e.compute(Bu(s,a,n,r[0].dataType),{inputs:s})},Kc=e=>ye({axis:e.axis})}),Dt,Pt,Ut,nn,Lt=L(()=>{ne(),oe(),Dt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ut=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},nn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[wp,$p];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Zc,sn=L(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Xc,x0=L(()=>{Xc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),gr,on,un=L(()=>{ne(),oe(),ue(),Lt(),gr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${ee(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,ee(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},on=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=Se(d),g=Se(c),y=Se(l),_=R.size(r)/f/y,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[R.size(S),l,d],w=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Pt(t,w),w.push(...te(S,s,u)),b&&w.push(...te(e[2].dims)),w.push(...te(v));let T=k=>{let E=en("batch_dims",e[0].dataType,S.length),A=M("a",e[0].dataType,s.length,g),z=M("b",e[1].dataType,u.length,f),$=J("output",e[0].dataType,v.length,f),N=Ee($.type.tensor),P=Dt(t,$.type.value,N),K=[A,z],Q="";if(b){let j=a?f:1;K.push(M("bias",e[2].dataType,e[2].dims.length,j)),Q=`${a?`value += bias[col / ${j}];`:`value += ${$.type.value}(bias[row + i]);`}`}let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ut(t,D);let O=()=>{let j=`var a_data: ${A.type.value};`;for(let F=0;F<g;F++)j+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${f}];`;for(let F=0;F<y;F++){j+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${g}];`;for(let Z=0;Z<g;Z++)j+=`
            values[${F}] = fma(${z.type.value}(a_data${g===1?"":`[${Z}]`}), b_data${Z}, values[${F}]);
`}return j};return`
  ${k.registerUniforms(D).registerInternalVariables(E).declareVariables(...K,$)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${gr("a_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${gr("b_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${O()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${Q}
      ${P}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${y};${a}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:T}}}),Nu,Mu,Ba,Zi,Du,Na,Pu,ti,ln=L(()=>{ne(),oe(),ue(),Lt(),un(),sn(),Nu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Mu=(e,t)=>e?`
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
        }`,Ba=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,f=a?n:l,g=c/t[0],y=n/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${c/g}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Nu(a,i)}
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

          ${Mu(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Zi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Du=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Na=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=a?d:n,g=a?n:d;if(!(g%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=f/t[0],b=n/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Zi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
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
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Zi(a,i)}
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
      ${Du(a)}
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
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Pu=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=Ee(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${gr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${gr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
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
    `},ti=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=R.size(c),g=s[s.length-2],y=s[s.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,S=g<=8?[4,1,1]:[4,4,1],v=[8,8,1],w=[Math.ceil(_/v[0]/S[0]),Math.ceil(g/v[1]/S[1]),Math.ceil(f/v[2]/S[2])],T=b?4:1,k=[...l,g,y/T],E=k.length,A=[...d,y,_/T],z=A.length,$=[f,g,_/T],N=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Pt(t,N),N.push(...te(c,k,A));let P=["rank","rank"],K=e.length>2;K&&(N.push(...te(e[2].dims)),P.push("rank")),N.push(...te($));let Q=D=>{let O=c.length,j=en("batchDims",e[0].dataType,O,1),F=Ee(e[0].dataType),Z=M("a",e[0].dataType,E,T),re=M("b",e[1].dataType,z,T),W=J("result",e[0].dataType,$.length,T),ae=[Z,re];if(K){let fe=a?T:1;ae.push(M("bias",e[2].dataType,e[2].dims.length,fe))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ut(t,U);let H=Ee(W.type.tensor),Y=Dt(t,W.type.value,H),q=Pu(T,K,Y,[j,Z,re,W],a);return`
  ${D.registerUniforms(U).registerInternalVariables(j).declareVariables(...ae,W)}
  ${q}
  ${b?Ba(S,v,F,j):Na(S,v,F,j)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${a}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:Q}}}),Uu,Qc,S0=L(()=>{ne(),ct(),ue(),Lt(),sn(),x0(),ln(),Uu=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},g=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`,k=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Ce(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Ce(u,d)}(0.0);`,E=Ce(l,d),A=Ce(e?s:u,d),z=Ce(e?u:s,d),$=Dt(n,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?T:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Zc(a)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Qc=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],b=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:g*y,v=d?g*y:_,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(S/w[0]/T[0]),Math.ceil(v/w[1]/T[1]),Math.ceil(f/w[2]/T[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=b?d&&c%4!==0?3:4:1,A=w[1]*T[1],z=w[0]*T[0],$=Math.max(w[0]*E,w[1]),N=i%A===0,P=a%z===0,K=n%$===0,Q=b?[E,4,4]:[1,1,1],D=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,D),D.push(...te(e[0].dims,e[1].dims));let O=["rank","rank"];s&&(D.push(...te(e[2].dims)),O.push("rank")),D.push(...te(r));let j=F=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ut(t,Z);let re=b?4:1,W=Ee(e[0].dataType),ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${W}>`:W}) {
        result[flatIndex] = ${b?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,E===3?1:E),H=M("w",e[1].dataType,e[1].dims.length,re),Y=[U,H],q=J("result",e[0].dataType,r.length,re);if(s){let fe=M("bias",e[2].dataType,e[2].dims.length,re);Y.push(fe),ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${W}>`:W} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Xc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(Z).declareVariables(...Y,q)}
        ${ae}
        ${Uu(d,N,P,K,s,t,Q[0],Q[1],Q[2],W)}
        ${b?Ba(T,w,W,void 0,!d,$):Na(T,w,W,void 0,!d,$,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${N};${P};${K};${A};${z};${$}`,inputDependencies:O},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:D}),getShaderSource:j}}}),qu,Xi,sr,Lu,Qi,Wu,Yc,Jc,k0=L(()=>{ne(),ct(),oe(),ue(),Lt(),sn(),qu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Xi=e=>typeof e=="number"?[e,e,e]:e,sr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Lu=(e,t,r,i=1)=>{let a=sr(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Qi=(e,t,r,i,a)=>{a==null&&(a=Lu(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Wu=(e,t,r,i,a,n,s,u,l,d)=>{let c,f,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Qi([t,r,i,1],[u,l,d],1,[a,n,s],e);f=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,S,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Qi([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);f=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),g=Math.ceil(r/n),y=Math.ceil(i/s);let _=(f-1)*a+u-t,b=(g-1)*n+l-r,S=(y-1)*s+d-i,v=Math.floor(_/2),w=_-v,T=Math.floor(b/2),k=b-T,E=Math.floor(S/2),A=S-E;c={top:T,bottom:k,left:E,right:A,front:v,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:g,outWidth:y}},Yc=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,_,b]=t,[S,v,w]=Xi(r),[T,k,E]=Xi(i),A=sr(y,T),z=sr(_,k),$=sr(b,E),{padInfo:N,outDepth:P,outHeight:K,outWidth:Q}=Wu(a,l,d,c,S,v,w,A,z,$),D=n?g*f:g,O=[0,0,0,0,0];return s==="channelsFirst"?O=[u,D,P,K,Q]:s==="channelsLast"&&(O=[u,P,K,Q,D]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:P,outHeight:K,outWidth:Q,outChannels:D,padInfo:N,strideDepth:S,strideHeight:v,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:A,effectiveFilterHeight:z,effectiveFilterWidth:$,dilationDepth:T,dilationHeight:k,dilationWidth:E,inShape:e,outShape:O,filterShape:t}},Jc=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(qu(l.x.map(S=>r[S]))/u[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=R.size(r),g=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,g),g.push(...te(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...te(e[2].dims)),y.push("rank")),g.push(...te(r));let b=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ut(t,v);let w=1,T=Ee(e[0].dataType),k=M("x",e[0].dataType,e[0].dims.length,c),E=M("W",e[1].dataType,e[1].dims.length,w),A=[k,E],z=J("result",e[0].dataType,r.length,w),$="";if(_){let K=M("bias",e[2].dataType,e[2].dims.length,w);A.push(K),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?ee("coords",4,5):ee("coords",1,5)}];
        }`}let N=Ce(c,T),P=Dt(t,N,T);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...A,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${ee("coords",0,k.rank)};
              let d2 = ${s?ee("coords",k.rank-1,k.rank):ee("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?ee("coords",1,k.rank):ee("coords",2,k.rank)},
              ${s?ee("coords",2,k.rank):ee("coords",3,k.rank)},
              ${s?ee("coords",3,k.rank):ee("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?ee("uniforms.x_shape",1,k.rank):ee("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?ee("uniforms.x_shape",2,k.rank):ee("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?ee("uniforms.x_shape",3,k.rank):ee("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?ee("uniforms.x_shape",4,k.rank):ee("uniforms.x_shape",1,k.rank)};
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
                      ${s?`let xValues = vec4<f32>(
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
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
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
                      ${s?`let xValues = vec3<f32>(
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
              ${P}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:b}}}),eh,th,T0=L(()=>{ne(),oe(),ue(),Lt(),eh=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?Se(d):1,g=R.size(r)/f,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Pt(t,y),y.push(...te(s,[u[0],u[1],u[2],u[3]/f]));let _=a?["rank","rank","rank"]:["rank","rank"];y.push(...te([r[0],r[1],r[2],r[3]/f]));let b=S=>{let v=J("output",e[0].dataType,r.length,f),w=Ee(v.type.tensor),T=Dt(t,v.type.value,w),k=M("x",e[0].dataType,s.length),E=M("w",e[1].dataType,u.length,f),A=[k,E];a&&A.push(M("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ut(t,z);let $=l?`
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
  ${S.registerUniforms(z).declareVariables(...A,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${n}
    ${T}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},th=(e,t,r,i)=>{let a=e.length>2,n=Se(r[3]),s=Se(r[2]),u=R.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,f),f.push(...te(l,d,c));let g=(s-1)*t.strides[1]+d[1],y=_=>{let b=J("output",e[0].dataType,c.length,n),S=Ee(b.type.tensor),v=Dt(t,b.type.value,S),w=M("x",e[0].dataType,l.length,n),T=M("w",e[1].dataType,d.length,n),k=[w,T];a&&k.push(M("b",e[2].dataType,e[2].dims,n));let E=a?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ut(t,A),`
  ${_.registerUniforms(A).declareVariables(...k,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${g};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:y}}}),Vu,qr,Gu,Lr,Ma,Yi,Hu,ju,Da,I0=L(()=>{oe(),S0(),k0(),ln(),T0(),Lt(),un(),xt(),Vu=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),f=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-c[y]+a[y])/a[y]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},qr=[2,3,1,0],Gu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Lr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Jr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Ma=e=>{let t=nn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Yi=(e,t,r,i)=>{let a=r.format==="NHWC",n=Vu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let A=[t[0]];if(a){let z=e.kernelCustomData.wT??e.compute(Ge(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),A.push(z)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(th(A,r,n,i),{inputs:A}):e.compute(eh(A,r,n,i),{inputs:A});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],f=t[1].dims[3],g=n[a?1:2],y=n[a?2:3],_=n[a?3:1],b=a&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=n[0],z,$,N,P=[];if(a){let D=e.kernelCustomData.wT??e.compute(Ge(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=D),b){let O=u*l*d;z=t[0].reshape([1,A,O]),$=D.reshape([1,O,_]),N=[1,A,_]}else z=t[0].reshape([A,u*l,d]),$=D.reshape([1,d,_]),N=[A,g*y,_];P.push(z),P.push($)}else z=t[0].reshape([A,d,u*l]),$=t[1].reshape([1,_,d]),N=[A,_,g*y],P.push($),P.push(z);s&&P.push(t[2]);let K=N[2],Q=P[0].dims[P[0].dims.length-1];K<8&&Q<8?e.compute(on(P,r,n,N,a,i),{inputs:P}):e.compute(ti(P,r,n,N,a,i),{inputs:P});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Ge(t[1],qr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let w=[t[0],v];s&&w.push(t[2]);let T=a?g*y:_,k=a?_:g*y,E=c*f*d;e.compute(Qc(w,r,n,T,k,E,s,S,i),{inputs:w})},Hu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Lr({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);Yi(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ju=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Lr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Yc(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Jc(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Da=(e,t)=>{if(Gu(e.inputs,t),e.inputs[0].dims.length===3)Hu(e,t);else if(e.inputs[0].dims.length===5)ju(e,e.inputs,t);else{let r=Lr(t,e.inputs);Yi(e,e.inputs,r)}}}),rh,E0=L(()=>{ne(),ct(),oe(),ue(),rh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?Se(l):1,f=n&&d===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-g,_=n?Se(d):1,b=n?d===1?c:_:1,S=R.size(a)/_,v=[Math.ceil(S/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],k=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],E=[t.dilations[0],t.dilations[1]],A=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],z=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:T},{type:12,data:k},{type:12,data:E},{type:12,data:A},{type:6,data:z},{type:12,data:g},{type:12,data:l},{type:12,data:d},...te(e[0].dims,e[1].dims)];i&&($.push(...te(e[2].dims)),w.push("rank")),$.push(...te(a));let N=P=>{let K=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=Ee(e[0].dataType),D=n?1:2,O=n?2:3,j=n?3:1,F=M("W",e[1].dataType,e[1].dims.length,b),Z=M("Dy",e[0].dataType,e[0].dims.length,c),re=[Z,F];i&&re.push(M("bias",e[2].dataType,[a[j]].length,_));let W=J("result",e[0].dataType,a.length,_),ae=()=>{let Y="";if(f)c===4?Y+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${Q}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${Q}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${Q}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${n?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)Y+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let q=0;q<c;q++)Y+=`
            let wValue${q} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${q}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${q}] * wValue${q};`;return Y},U=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Y="";if(c===1){Y+="dotProd = dotProd";for(let q=0;q<y;q++)Y+=`
            + ${Z.getByOffset(`x_offset + ${q}`)} * ${F.getByOffset(`w_offset + ${q}`)}`;Y+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Y+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},H=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",j)};
            let r = ${W.indicesGet("outputIndices",D)};
            let c = ${W.indicesGet("outputIndices",O)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${D}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${O}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ae()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(K).declareVariables(...re,W)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${H}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${b}${_}${f}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:N}}}),Fu,Ku,Zu,Ji,ih,Xu,ea,Qu,ah,z0=L(()=>{E0(),Lt(),xt(),Fu=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Ku=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Zu=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let g=e[0],y=t[u?3:1]*a;for(let _=0,b=e.length-c-(u?1:0);_<c;++_,++b){let S=e[b],v=f?S*s[_]:d[_],w=Fu(S,s[_],n[_],t[b],r[_],v);Ku(w,i,n,_,_+c),f&&d.push(s[_]*(S-1)+l[_]+(t[b]-1)*r[_]+1-n[_]-n[_+c])}d.splice(0,0,g),d.splice(u?3:1,0,y)},Ji=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Zu(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},ih=e=>{let t=nn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Xu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ea=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ge(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(rh(n,r,i),{inputs:n})},Qu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=Ji({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);ea(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},ah=(e,t)=>{if(Xu(e.inputs,t),e.inputs[0].dims.length===3)Qu(e,t);else{let r=Ji(t,e.inputs);ea(e,e.inputs,r)}}}),Yu,nh,sh,C0=L(()=>{ne(),oe(),ke(),ue(),Yu=(e,t,r,i)=>{let a=R.size(t),n=t.length,s=M("input",e,n),u=J("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,n),c=f=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=ee("uniforms.input_shape","uniforms.axis",n),_=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...te(t,t)]}),getShaderSource:c}},nh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Yu(i,r,a,t),{inputs:[0]})},sh=e=>{let t=e.exclusive===1,r=e.reverse===1;return ye({exclusive:t,reverse:r})}}),Ju,el,tl,oh,uh,A0=L(()=>{ne(),oe(),ke(),ue(),Ju=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},el=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},tl=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),g=f.dims.length,y=e.dataType,_=M("a",y,g),b=J("output",y,g),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${el(u,g,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let w=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],T=R.size(w),k=f.dims,E=R.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...te(k,E)]}},getShaderSource:S}},oh=(e,t)=>{Ju(e.inputs),e.compute(tl(e.inputs[0],t))},uh=e=>ye({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,or,ta,rl,il,al,nl,ra,sl,lh,dh,O0=L(()=>{ne(),oe(),ke(),ue(),Wr="[a-zA-Z]|\\.\\.\\.",or="("+Wr+")+",ta="^"+or+"$",rl="("+or+",)*"+or,il="^"+rl+"$",al=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},nl=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(il)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let u=e[s].dims.slice();if(!n.match(RegExp(ta)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,u,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(or)))throw new Error("Invalid RHS");(a=i.match(RegExp(Wr,"g")))==null||a.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(ta))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wr,"g")),d=new al(i);return l==null||l.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,f+y),this.addSymbol(_,r[u++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},ra=e=>e+"_max",sl=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>M(`input${c}`,t,d)),n=R.size(i),s=J("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],b=[],S=[],v=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{var A;if(r.rhs.symbolToIndices.has(E)){let z=(A=r.rhs.symbolToIndices.get(E))==null?void 0:A[0];z!==void 0&&r.lhs.forEach(($,N)=>{if(k.inputIndices.includes(N)){let P=$.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(K=>{c.push(`${a[N].indicesSet(`input${N}Indices`,K,s.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,$)=>{if(k.inputIndices.includes($)){let N=z.symbolToIndices.get(E);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(P=>{_.push(`${a[$].indicesSet(`input${$}Indices`,P,`${E}`)}`)}),v.push(`prod *= ${a[$].getByIndices(`input${$}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${ra(E)}; ${E}++) {`),S.push("}")});let T=w?[...c,`let sum = ${a.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,g,...b,..._,f,...v,y,...S];return`
            ${d.registerUniforms(u.map(k=>({name:`${ra(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>{var g;return{type:12,data:((g=r.symbolToInfo.get(f))==null?void 0:g.dimValue)||0}});d.push({type:12,data:n});let c=e.map((f,g)=>[...te(f)]).reduce((f,g)=>f.concat(g),d);return c.push(...te(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},lh=(e,t)=>{let r=new nl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(sl(a,e.inputs[0].dataType,r,i))},dh=e=>{let t=e.equation.replace(/\s+/g,"");return ye({equation:t})}}),ol,ia,ul,ll,ph,R0=L(()=>{ne(),oe(),ue(),ol=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ia=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},ul=(e,t)=>e.length>t.length?ia(e,t):ia(t,e),ll=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=ul(t,r),a=e[0].dataType,n=a===9||R.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/u),d=f=>{let g=M("input",a,t.length,s),y=J("output",a,i.length,u),_;if(a===9){let b=(S,v,w="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${g.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${w}(${g.getByOffset(`index${v}`)}[component${v}]);
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
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...te(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},ph=e=>{ol(e.inputs),e.compute(ll(e.inputs),{inputs:[0]})}}),dl,ch,B0=L(()=>{ne(),oe(),ue(),an(),dl=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),a=i%4===0,n=s=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),d=J("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${Oa(Re(t))}

    ${s.mainStart(Zt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Ra("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Zt/4)}})}},ch=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Oc(e):e.compute(dl(e.inputs))}}),pl,cl,hh,fh,N0=L(()=>{ne(),oe(),ke(),ue(),pl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},cl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=R.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...te(e[0].dims,e[1].dims,s)],f=g=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),b=J("output",e[0].dataType,s.length,l),S=w=>{let T=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let E=0;E<T;E++)k+=`${T>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let E=0,A=0;E<a;E++)E===n?(k+=`${a>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,A+=T):(k+=`${a>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${A}]`:`outputIndices${w}`};`,A++);return k},v;if(e[0].dataType===9){let w=(T,k,E="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${S(k)};
          let offset${k} = ${y.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${T}[${k}] = ${E}(${y.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},hh=e=>ye({axis:e.axis}),fh=(e,t)=>{let r=e.inputs;pl(r),e.compute(cl(e.inputs,t))}}),hl,mh,gh,M0=L(()=>{ne(),oe(),ue(),hl=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...te(t.dims,c));let f=g=>{let y=M("indices_data",t.dataType,t.dims.length),_=J("input_slice_offsets_data",12,1,1),b=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},mh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=R.sizeToDimension(n,n.length-1),l=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),c=R.sizeFromDimension(i,t.batchDims),f=u/d,g=new Array(s),y=l;for(let k=0;k<s;++k)g[s-1-k]=y,y*=i[t.batchDims+s-1-k];let _=hl(e,r[1],g,t.batchDims,i,u,f,c,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=n.slice(0,-1).concat(i.slice(b)),v=R.size(S),w=[{type:12,data:v},{type:12,data:l},...te(r[0].dims,_.dims,S)],T=k=>{let E=M("data",r[0].dataType,r[0].dims.length),A=M("slice_offsets",12,_.dims.length),z=J("output",r[0].dataType,S.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,A,z)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],_]})},gh=e=>({batchDims:e.batch_dims,cacheKey:""})}),fl,ml,yh,_h,D0=L(()=>{ne(),oe(),ke(),ue(),fl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ml=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=R.normalizeAxis(t.gatherAxis,a),s=R.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=R.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...te(...e.map((y,_)=>y.dims),u)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length),b=M("inputIndices",e[1].dataType,e[1].dims.length),S=M("scales",e[2].dataType,e[2].dims.length),v=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=J("output",d,u.length),T=[_,b,S];v&&T.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(k).declareVariables(...T,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
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
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},yh=(e,t)=>{let r=e.inputs;fl(r,t),e.compute(ml(e.inputs,t))},_h=e=>ye({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),gl,yl,bh,wh,P0=L(()=>{ne(),oe(),ke(),ue(),gl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},yl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=R.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=R.size(d),f=M("input",i,a),g=M("indicesInput",s,n.length),y=J("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return _.push(...te(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
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
  }`}},bh=e=>ye({axis:e.axis}),wh=(e,t)=>{let r=e.inputs;gl(r),e.compute(yl(e.inputs,t))}}),_l,bl,$h,vh,U0=L(()=>{ne(),oe(),ue(),_l=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=bp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),f=!0,g=R.size(u),y=[{type:12,data:f?d:g},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...te(e[2].dims)),_.push("rank")),y.push(...te(u));let b=v=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",k=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),A=k.type.value,z=null,$=[k,E];e.length===3&&(z=M("c",e[2].dataType,e[2].dims.length),$.push(z));let N=J("output",e[0].dataType,u.length);$.push(N);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(P).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${T}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${A}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let w=M("a",e[0].dataType,e[0].dims),T=M("b",e[1].dataType,e[1].dims),k=null,E=[w,T];e.length===3&&(k=M("c",e[2].dataType,e[2].dims.length),E.push(k));let A=J("output",e[0].dataType,u.length);E.push(A);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
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
        ${$}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},$h=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},vh=(e,t)=>{_l(e.inputs),e.compute(bl(e.inputs,t))}}),st,dt,Et,zt,wl,$l,vl,xl,Sl,kl,Tl,Il,xh,Sh,q0=L(()=>{ne(),oe(),ke(),ue(),[st,dt,Et,zt]=[0,1,2,3],wl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},$l=`
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
`,vl=e=>`
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
`,xl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Sl=e=>`
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
`,kl=(e,t,r)=>`
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
`,Tl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Il=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=M("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[st,dt,Et,zt]=[0,3,1,2]);let s=J("output",e[0].dataType,n.length),u=r.type.value,l=R.size(n),d=[{type:12,data:l},...te(e[0].dims,i,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${$l}
  ${vl(u)}
  ${xl(t)}
  ${Sl(t)}
  ${kl(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${st}], indices[${Et}], indices[${zt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Tl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=R.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:c}},xh=(e,t)=>{wl(e.inputs),e.compute(Il(e.inputs,t))},Sh=e=>ye({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Be,El,kh,aa,zl,mr,Th,Ih=L(()=>{ne(),oe(),ke(),Ja(),rn(),ue(),xt(),Be=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,El=(e,t)=>{let r=e[0],i=Be(e,1),a=Be(e,2),n=Be(e,3),s=Be(e,4),u=Be(e,5),l=Be(e,6),d=Be(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,_=0,b=0,S=Math.floor(g/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&R.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,T=0;if(s&&R.size(s.dims)>0){T=8;let z=s.dims;throw z.length===1?z[0]===c?T=1:z[0]===3*c+2&&(T=3):z.length===2&&z[0]===c&&z[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=g;if(a&&R.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],k=!0}}let A=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&R.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:A,passPastInKv:k,qkvFormat:v}},kh=e=>ye({...e}),aa=ye({perm:[0,2,1,3]}),zl=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=R.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let g=J("qkv_with_bias",t.dataType,u),y=M("qkv",t.dataType,u),_=M("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(y,_,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},mr=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=zl(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ge(l,aa.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ge(l,aa.perm),{inputs:[l],outputs:[-1]})[0]},Th=(e,t)=>{let r=El(e.inputs,t),i=e.inputs[0],a=Be(e.inputs,1),n=Be(e.inputs,2),s=Be(e.inputs,3),u=Be(e.inputs,4),l=Be(e.inputs,5),d=Be(e.inputs,6),c=Be(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,g=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return br(e,g,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let y=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),_=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);br(e,g,y,_,u,void 0,d,c,l,r)}}),Cl,Al,Ol,Rl,Pa,Eh,zh,Ch=L(()=>{ne(),oe(),ke(),ue(),Cl=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Al=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ye({numOutputs:i,axis:t.axis,splitSizes:r})},Ol=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ee("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Rl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Pa=(e,t)=>{let r=e[0].dims,i=R.size(r),a=e[0].dataType,n=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=M("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let b=r.slice();b[n]=t.splitSizes[_],c.push(b),s[_]=J(`output${_}`,a,b.length),d.push({dims:c[_],dataType:e[0].dataType})}g.push({type:12,data:l},...te(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Ol(l.length)}
  ${Rl(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ee("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},Eh=(e,t)=>{Cl(e.inputs);let r=e.inputs.length===1?t:Al(e.inputs,t);e.compute(Pa(e.inputs,r),{inputs:[0]})},zh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ye({axis:t,numOutputs:i,splitSizes:r})}}),Bl,ri,Ah,Oh=L(()=>{ne(),oe(),ke(),ue(),Bl=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!R.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],f=R.sizeFromDimension(r.dims,1)/d,g=u===0?a.dims[1]*2:f/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},ri=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=a===0?c*2:d/i,g=new Array(s,l,d/f,f-c),y=R.computeStrides(g),_=[{type:1,data:n},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...te(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let v=M("input",e[0].dataType,e[0].dims.length),w=M("position_ids",e[1].dataType,e[1].dims.length),T=M("cos_cache",e[2].dataType,e[2].dims.length),k=M("sin_cache",e[3].dataType,e[3].dims.length),E=J("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(v,w,T,k,E)}

        ${S.mainStart(Zt)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",J("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ye({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(g)/Zt)},programUniforms:_})}},Ah=(e,t)=>{Bl(e.inputs,t),e.compute(ri(e.inputs,t))}}),Nl,Ml,na,Dl,Rh,L0=L(()=>{ke(),ne(),rn(),Ih(),Ch(),xt(),Oh(),ue(),Nl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,g=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let b=n&&n.dims.length!==0,S=s&&s.dims.length!==0;if(b&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=n.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let w=0,T=!1,k=t.kvNumHeads?_*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=E.dims.reduce((z,$)=>z*$,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let z=0;z<E.dims.length;z++)if(E.dims[z]!==1&&E.dims[z]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${z}] = ${E.dims[z]}.`)}return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:v}},Ml=ye({perm:[0,2,1,3]}),na=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ge(i,Ml.perm),{inputs:[i],outputs:[-1]})[0]),i},Dl=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),y=J("pos_ids",a,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(f,g,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Rh=(e,t)=>{var k;let r=Nl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((k=e.inputs[1])==null?void 0:k.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ye({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[g,y,_]=!a&&!n?e.compute(Pa([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],b,S;if(t.doRotary){let E=e.compute(Dl(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],A=e.inputs[7],z=e.inputs[8],$=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),N=[g,E,A,z],P=[-1];b=e.compute(ri(N,$),{inputs:N,outputs:P})[0],N.splice(0,1,y);let K=ye({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(ri(N,K),{inputs:N,outputs:P})[0]}let v=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=na(e,t.doRotary?S:y,r),T=na(e,_,r);br(e,v,w,T,void 0,void 0,s,u,void 0,r,l,d)}}),sa,Pl,Ul,Bh,W0=L(()=>{ne(),oe(),xt(),ue(),sa=(e,t,r,i,a,n,s,u)=>{let l=Se(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=a*s,g=64;f===1&&(g=256);let y=[a,s,n/l],_=[a,s,2],b=["rank","type","type"],S=[];S.push(...te(y,_));let v=w=>{let T=M("x",t.dataType,3,l),k=M("scale",r.dataType,r.dims),E=M("bias",i.dataType,i.dims),A=J("output",1,3,2),z=[T,k,E,A];return`
  var<workgroup> workgroup_shared : array<${c}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...z)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${T.get("batch","channel","h")});
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Pl=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=R.sizeFromDimension(i,n),d=Se(l),c=R.size(a)/d,f=sa(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/d],y=[s,u],_=["type","none"],b=S=>{let v=M("x",t[0].dataType,g.length,d),w=M("scale_shift",1,y.length,2),T=J("output",t[0].dataType,g.length,d),k=[v,w,T];return`
  ${S.registerUniform("output_size","u32").declareVariables(...k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...te(g,y,g)]}),getShaderSource:b},{inputs:[t[0],f]})},Ul=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=R.sizeFromDimension(i,1)/s,l=Se(s),d=R.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],g=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)g=g||i[v+1]!==1,y.push(v+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Ge(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,w)=>i[y[w]])),b=sa(e,_,t[1],t[2],n,u,s,r.epsilon),S=v=>{let w=Ee(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,k=z=>{let $=z===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${N}(scale.${$}))`;case 2:return`vec2<${w}>(${N}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${N}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=M("input",t[0].dataType,t[0].dims,l),A=J("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],b]})},Bh=(e,t)=>{t.format==="NHWC"?Ul(e,e.inputs,t):Pl(e,e.inputs,t)}}),ql,Ll,Nh,V0=L(()=>{ne(),oe(),ue(),ql=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ll=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=R.normalizeAxis(t.axis,a.length),d=R.sizeToDimension(a,l),c=R.sizeFromDimension(a,l),f=R.size(n.dims),g=s?R.size(s.dims):0;if(f!==c||s&&g!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let y=[];for(let E=0;E<a.length;++E)E<l?y.push(a[E]):y.push(1);let _=Se(c),b=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];s&&b.push("type");let v=r>1,w=r>2,T=E=>{let A=Ee(e[0].dataType),z=[M("x",e[0].dataType,e[0].dims,_),M("scale",n.dataType,n.dims,_)];s&&z.push(M("bias",s.dataType,s.dims,_)),z.push(J("output",e[0].dataType,u,_)),v&&z.push(J("mean_data_output",1,y)),w&&z.push(J("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...z)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${za("f32",_)};
    var mean_square_vector = ${za("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ft(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ft(A,_,"x[j + offset]")};
      let f32scale = ${Ft(A,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Ft(A,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return v&&k.push({dims:y,dataType:1}),w&&k.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:T}},Nh=(e,t)=>{ql(e.inputs),e.compute(Ll(e.inputs,t,e.outputCount))}}),Wl,Mh,G0=L(()=>{oe(),un(),ln(),Wl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Mh=e=>{Wl(e.inputs);let t=Kt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(on(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(ti(c,{activation:""},t,d),{inputs:c})}else e.compute(ti(e.inputs,{activation:""},t))}}}),Vl,Gl,Hl,Dh,Ph,H0=L(()=>{ne(),oe(),ke(),ue(),Vl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(R.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},Gl=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=R.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Se(t.k),g=Se(d),y=Se(s),_=u.concat([a,s]),b=a>1&&s/y%2===0?2:1,S=R.size(_)/y/b,v=64,w=[],T=[l,a,n/f],k=R.convertShape(e[1].dims).slice();k.splice(-1,1,d/g),w.push(...te(T)),w.push(...te(k)),w.push(...te(e[2].dims)),e.length===4&&w.push(...te(R.convertShape(e[3].dims)));let E=[l,a,s/y];w.push(...te(E));let A=z=>{let $=T.length,N=M("a",e[0].dataType,$,f),P=M("b",12,k.length,g),K=M("scales",e[2].dataType,e[2].dims.length),Q=[N,P,K],D=e.length===4?M("zero_points",12,e[3].dims.length):void 0;D&&Q.push(D);let O=E.length,j=J("output",e[0].dataType,O,y),F=Ee(e[0].dataType),Z=(()=>{switch(f){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${f}-component is not supported.`)}})(),re=Math.floor(32/t.bits),W=Math.floor(re/8),ae=()=>{let Y="";for(let q=0;q<W;q++){let fe=q*t.bits*4,Ne=fe+t.bits;Y+=`
          // reuse a data (pass ${q})
            var input_offset${q>0?q:""} = ${q===0?N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${q>0?q:""}: ${Z};
            for (var j${q>0?q:""}: u32 = 0; j${q>0?q:""} < ${8/f}; j${q>0?q:""}++) {
              a_data${q>0?q:""}[j${q>0?q:""}] = ${N.getByOffset(`input_offset${q>0?q:""}`)};
              input_offset${q>0?q:""}++;
            }
          `;for(let Te=0;Te<y*b;Te++)Y+=`
            b_value = ${g===1?`b${Te}_data`:`b${Te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${fe}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ne}u) & b_mask);`}
            b_quantized_values = ${Z}(${Array.from({length:4},(Me,De)=>`${F}(b_value_lower[${De}]), ${F}(b_value_upper[${De}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Z}(${Array.from({length:8},(Me,De)=>`(b_quantized_values[${De}] - ${D?`zero_point${Te}`:"zero_point"}) * scale${Te}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${D?`zero_point${Te}`:"zero_point"}`).join(",")})) * scale${Te};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Te/y)}]${y>1?`[${Te%y}]`:""} += ${Array.from({length:8/f},(Me,De)=>`${f===1?`a_data${q>0?q:""}[${De}] * b_dequantized_values[${De}]`:`dot(a_data${q>0?q:""}[${De}], b_dequantized_values[${De}])`}`).join(" + ")};
          `}return Y},U=()=>{let Y=`
            var col_index = col * ${y};
            ${D?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${F}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let q=0;q<y*b;q++)Y+=`
            let scale${q} = ${K.getByOffset("col_index * nBlocksPerCol + block")};
            ${D?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${D.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${F}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Y},H=()=>{let Y=`col_index = col * ${y};`;for(let q=0;q<y*b;q++)Y+=`
            let b${q}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Y+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,Y};return`
        var<workgroup> workgroup_shared: array<${j.type.value}, ${b*v}>;
        ${z.declareVariables(...Q,j)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${j.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${U()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${H()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ae()}
                word_offset += ${re/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${j.type.value} = ${j.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${j.setByIndices(`${j.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${y};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:A}},Hl=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=R.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=Se(t.k),g=Se(d),y=u.concat([a,s]),_=128,b=s%8===0?8:s%4===0?4:1,S=_/b,v=Math.floor(32/t.bits),w=S*g*v,T=w/f,k=w/t.blockSize,E=R.size(y)/b,A=[],z=[l,a,n/f],$=R.convertShape(e[1].dims).slice();$.splice(-1,1,d/g),A.push(...te(z)),A.push(...te($)),A.push(...te(e[2].dims)),e.length===4&&A.push(...te(R.convertShape(e[3].dims)));let N=[l,a,s];A.push(...te(N));let P=K=>{let Q=z.length,D=M("a",e[0].dataType,Q,f),O=M("b",12,$.length,g),j=M("scales",e[2].dataType,e[2].dims.length),F=[D,O,j],Z=e.length===4?M("zero_points",12,e[3].dims.length):void 0;Z&&F.push(Z);let re=N.length,W=J("output",e[0].dataType,re),ae=Ee(e[0].dataType),U=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${D.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${W.type.value}, ${S}>, ${b}>;
        ${K.declareVariables(...F,W)}
        ${K.mainStart([S,b,1])}
          let output_indices = ${W.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${D.getByIndices(`${D.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${D.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${Z?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ae}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ae}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${j.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${O.getByIndices(`${O.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let H=Math.floor(v/8),Y="";for(let q=0;q<H;q++){let fe=q*t.bits*4,Ne=fe+t.bits;Y+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${fe}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ae}>(${Array.from({length:4},(Te,Me)=>`${ae}(b_value_lower[${Me}]), ${ae}(b_value_upper[${Me}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ae}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Te,Me)=>`${`dot(a_data${Me}, b_dequantized_values[${Me}])`}`).join(" + ")};
              }
              word_offset += ${8/f};`}return Y})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${W.setByIndices(`${W.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:E},programUniforms:A}),getShaderSource:P}},Dh=(e,t)=>{Vl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Hl(e.inputs,t)):e.compute(Gl(e.inputs,t))},Ph=e=>ye(e)}),jl,Fl,Kl,Zl,Xl,Ql,Yl,Jl,Uh,j0=L(()=>{ne(),oe(),ue(),jl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Fl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
      `},Kl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},Zl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},Xl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
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
          `},Ql=(e,t,r)=>{switch(r.mode){case 0:return Fl(e,t,r.pads.length);case 1:return Kl(e,t,r.pads.length);case 2:return Zl(e,t,r.pads.length);case 3:return Xl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Yl=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=R.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...te(e[0].dims,r));let u=["rank"],l=d=>{let c=J("output",e[0].dataType,r.length),f=M("x",e[0].dataType,i.length),g=f.type.value,y=Ql(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:n}),getShaderSource:l}},Jl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},Uh=(e,t)=>{jl(e.inputs);let r=Jl(e.inputs,t);e.compute(Yl(e.inputs,r),{inputs:[0]})}}),ur,oa,ua,la,da,ed,td,pa,ca,qh,Lh,ha,Wh,Vh,fa,Gh,Hh,jh,Fh,F0=L(()=>{je(),ne(),oe(),ue(),ur=e=>{if(we.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},oa=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();Jr.adjustPoolAttributes(r,a,s,u,l,d);let c=Jr.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let g=c.slice();return g.push(g.splice(1,1)[0]),[f,i?g:c]},ua=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),a=R.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),n.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=R.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},la=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let g=a.format==="NHWC",y=t.type.value,_=J("output",t.type.tensor,i);if(a.kernelShape.length<=2){let b="",S="",v="",w=r-(g?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let T=r-(g?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
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
              ${b}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=a.kernelShape.length,S=a.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
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
                  offsets[j] = offset / ${ee("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${ee("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ee("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${ee("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},da=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ed=e=>`${da(e)};${e.countIncludePad}`,td=e=>`${da(e)};${e.storageOrder};${e.dilations}`,pa=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ca=(e,t,r,i)=>{let[a,n]=oa(t,i,r),s=M("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,g,y,_]=ua(n,a);c.push(...te(t.dims,n));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(n)/64)},programUniforms:c}),getShaderSource:S=>la(S,s,t.dims.length,n.length,a,l,d,0,f,g,y,_)}},qh=e=>{let t=e.count_include_pad!==0,r=pa(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:ed(i)}},Lh=(e,t)=>{ur(e.inputs),e.compute(ca("AveragePool",e.inputs[0],!1,t))},ha={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Wh=e=>{let t=e.format;return{format:t,...ha,cacheKey:t}},Vh=(e,t)=>{ur(e.inputs),e.compute(ca("GlobalAveragePool",e.inputs[0],!0,t))},fa=(e,t,r,i)=>{let[a,n]=oa(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),d=["rank"],[c,f,g,y,_]=ua(n,a);return c.push(...te(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(n)/64)},programUniforms:c}),getShaderSource:b=>la(b,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,g,y,_)}},Gh=(e,t)=>{ur(e.inputs),e.compute(fa("MaxPool",e.inputs[0],!1,t))},Hh=e=>{let t=e.storage_order,r=e.dilations,i=pa(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:td(a)}},jh=e=>{let t=e.format;return{format:t,...ha,cacheKey:t}},Fh=(e,t)=>{ur(e.inputs),e.compute(fa("GlobalMaxPool",e.inputs[0],!0,t))}}),rd,id,Kh,Zh,K0=L(()=>{ne(),oe(),ke(),ue(),rd=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},id=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=R.size(n),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(R.size(f.dims)/4)]:f.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,b=Se(u),S=y&&(!l||b===4),v=S?b:1,w=S&&!l?b:1,T=M("input",l?12:i,d.length,w),k=M("scale",s,c.length),E=f?M("zero_point",l?12:i,g.length):void 0,A=J("output",s,n.length,v),z=[T,k];E&&z.push(E);let $=[d,c];f&&$.push(g);let N=[{type:12,data:u/v},{type:12,data:r},{type:12,data:t.blockSize},...te(...$,n)],P=K=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${K.registerUniforms(Q).declareVariables(...z,A)}
      ${K.mainStart()}
          ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

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
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/v/64),y:1,z:1},programUniforms:N})}},Kh=(e,t)=>{rd(e.inputs,t),e.compute(id(e.inputs,t))},Zh=e=>ye({axis:e.axis,blockSize:e.blockSize})}),ad,nd,Xh,Z0=L(()=>{je(),ne(),ue(),ad=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},nd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...te(n)],l=d=>{let c=J("output",i,n.length),f=c.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(g).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Xh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),we.webgpu.validateInputContent&&ad(t,r,i),e.compute(nd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),sd,od,Qh,Yh,X0=L(()=>{ne(),oe(),ke(),ue(),sd=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},od=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/n),u=i[i.length-1],l=R.sizeFromDimension(r,u),d=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...te(e[1].dims,e[2].dims,a)],c=f=>{let g=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,n),_=t.reduction!=="none"&&t.reduction!==""?Tp("output",e[0].dataType,a.length):J("output",e[0].dataType,a.length,n);return`
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
    ${sd(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:c}},Qh=e=>ye({reduction:e.reduction}),Yh=(e,t)=>{e.compute(od(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ud,ld,dd,ma,pd,cd,hd,fd,md,gd,yd,_d,ga,bd,wd,$d,vd,xd,Jh,ef,Q0=L(()=>{ne(),oe(),ke(),ue(),ud=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ld=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},dd=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ud(i,t),t.axes.length>0&&ld(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ma=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,pd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ma("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ma("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",cd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",hd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},fd=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},md=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},gd=(e,t,r,i,a)=>`
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
    }`,yd=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ee("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ee("uniforms.roi","i",n)};
          var roi_hi = ${ee("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${ee("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ee("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,_d=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ee("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ga=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",bd=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${ga(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
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
    }`},wd=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,[f,g]=c?[0,1]:[2,3],y=e.type.value,_=b=>{let S=b===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[b]},
        ${i[b]}, ${r[b]}, ${n[b]}, ${n[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
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
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
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
    `},$d=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${ga(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

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
    }`},vd=(e,t,r,i,a,n)=>{let s=e.dims,u=hd(n,t.axes,s.length),l=fd(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((w,T)=>w===0?1:l[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=md(s,d,t)));let c=J("output",e.dataType,l.length),f=M("input",e.dataType,s.length),g=R.size(l),y=s.length===l.length&&s.every((w,T)=>w===l[T]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=f.type.value,v=w=>`
      ${y?"":`
      ${pd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${_d(f,s)};
              ${cd(t.nearestMode,r,S)};
              ${yd(f,c,s,l,d.length,u.length,_)};
              `;case"linear":return`
              ${gd(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${bd(f,c,s,_,b)}`;if(s.length===3||s.length===5)return`${$d(f,c,s,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${wd(f,c,s,l,d,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:u},...te(s,l)]})}},xd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Jh=(e,t)=>{let r=[],i=[],a=[],n=xd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");dd(e.inputs,t,n,r,i,a),e.compute(vd(e.inputs[0],t,n,r,i,a),{inputs:[0]})},ef=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ye({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Sd,kd,tf,Y0=L(()=>{ne(),oe(),ue(),Sd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},kd=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=R.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,S=64,v=Se(d),w=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],T=E=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[M("x",e[0].dataType,e[0].dims,v),M("skip",e[1].dataType,e[1].dims,v),M("gamma",e[2].dataType,e[2].dims,v)];f&&z.push(M("beta",e[3].dataType,e[3].dims,v)),g&&z.push(M("bias",e[4].dataType,e[4].dims,v)),z.push(J("output",e[0].dataType,u,v)),y&&z.push(J("mean_output",1,c)),_&&z.push(J("inv_std_output",1,c)),b&&z.push(J("input_skip_bias_sum",e[0].dataType,u,v));let $=Ee(e[0].dataType),N=Ee(1,v);return`

      ${E.registerUniforms(A).declareVariables(...z)}
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
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ft($,v,"value")};
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
          output[offset + i] = (output[offset + i] ${a?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${b}`,inputDependencies:e.map((E,A)=>"type")},getShaderSource:T,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},tf=(e,t)=>{Sd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(kd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Td,lr,Id,ya,Ed,zd,rf,af,J0=L(()=>{ne(),oe(),ke(),ue(),Td=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},lr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Id=(e,t)=>{if(e.length>1){let r=lr(e,1),i=lr(e,2),a=lr(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ye({starts:r,ends:i,axes:a})}else return t},ya=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Ed=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,zd=(e,t)=>{let r=e[0].dims,i=R.size(r),a=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=lr(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,w)=>ya(v,w,r,a,n)),u=t.ends.map((v,w)=>ya(v,w,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),u.splice(v,0,r[v]),n.splice(v,0,1));let l=n.map(v=>Math.sign(v));n.forEach((v,w,T)=>{if(v<0){let k=(u[w]-s[w])/v,E=s[w],A=E+k*n[w];s[w]=A,u[w]=E,T[w]=-v}});let d=r.slice(0);a.forEach((v,w)=>{d[v]=Math.ceil((u[v]-s[v])/n[v])});let c={dims:d,dataType:e[0].dataType},f=J("output",e[0].dataType,d.length),g=M("input",e[0].dataType,e[0].dims.length),y=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],b=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:n},...te(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(_).declareVariables(g,f)}
        ${Ed(g,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},rf=(e,t)=>{Td(e.inputs,t);let r=Id(e.inputs,t);e.compute(zd(e.inputs,r),{inputs:[0]})},af=e=>{let t=e.starts,r=e.ends,i=e.axes;return ye({starts:t,ends:r,axes:i})}}),Cd,Ad,nf,sf,ey=L(()=>{ne(),oe(),ke(),xt(),ue(),Cd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ad=(e,t)=>{let r=e.inputs[0],i=r.dims,a=R.size(i),n=i.length,s=R.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(z,$)=>$),d[s]=n-1,d[n-1]=s,l=e.compute(Ge(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],g=a/f,y=Se(f),_=f/y,b=64;g===1&&(b=256);let S=(z,$)=>$===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:$===2?`max(${z}.x, ${z}.y)`:$===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=M("x",l.dataType,l.dims,y),w=J("result",l.dataType,l.dims,y),T=v.type.value,k=Ee(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=z=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,w)}
      ${z.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
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
          rowMaxShared = ${T}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
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
          rowSumShared = ${T}(${vt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ge(A,d),{inputs:[A]})},nf=(e,t)=>{Cd(e.inputs),Ad(e,t)},sf=e=>ye({axis:e.axis})}),_a,Od,Rd,Bd,of,ty=L(()=>{ne(),oe(),ue(),_a=e=>Array.from(e.getBigInt64Array(),Number),Od=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(_a(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Rd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Bd=(e,t)=>{let r=e[0].dims,i=t??_a(e[1]),a=Rd(r,i),n=R.size(a),s=e[0].dataType,u=M("input",s,r.length),l=J("output",s,a.length),d=c=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...te(e[0].dims,a)]}),getShaderSource:d}},of=e=>{Od(e.inputs),e.compute(Bd(e.inputs),{inputs:[0]})}}),Nd,Md,uf,ry=L(()=>{ne(),oe(),ue(),Nd=(e,t,r,i,a)=>{let n=J("output_data",a,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,g,y)=>`select(${g}, ${f}, ${y})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${n.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${c(b,S,v)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Md=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,u=R.size(t);if(n){let d=Kt.calcShape(Kt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=R.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Nd(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...te(i,t,r,s)]})}},uf=e=>{e.compute(Md(e.inputs))}}),lf,iy=L(()=>{y0(),rn(),_0(),b0(),w0(),$0(),v0(),I0(),z0(),C0(),A0(),O0(),R0(),B0(),N0(),M0(),D0(),P0(),U0(),q0(),L0(),W0(),V0(),G0(),H0(),Ih(),j0(),F0(),K0(),Z0(),X0(),tn(),Q0(),Oh(),Y0(),J0(),ey(),Ch(),ty(),xt(),an(),ry(),lf=new Map([["Abs",[tc]],["Acos",[rc]],["Acosh",[ic]],["Add",[Dc]],["ArgMax",[Qp,Aa]],["ArgMin",[Xp,Aa]],["Asin",[ac]],["Asinh",[nc]],["Atan",[sc]],["Atanh",[oc]],["Attention",[Yp]],["AveragePool",[Lh,qh]],["BatchNormalization",[Jp]],["BiasAdd",[ec]],["BiasSplitGelu",[Mc]],["Cast",[lc,uc]],["Ceil",[pc]],["Clip",[dc]],["Concat",[Fc,Kc]],["Conv",[Da,Ma]],["ConvTranspose",[ah,ih]],["Cos",[cc]],["Cosh",[hc]],["CumSum",[nh,sh]],["DepthToSpace",[oh,uh]],["DequantizeLinear",[Kh,Zh]],["Div",[Pc]],["Einsum",[lh,dh]],["Elu",[fc,fr]],["Equal",[Uc]],["Erf",[mc]],["Exp",[gc]],["Expand",[ph]],["FastGelu",[ch]],["Floor",[yc]],["FusedConv",[Da,Ma]],["Gather",[fh,hh]],["GatherElements",[wh,bh]],["GatherBlockQuantized",[yh,_h]],["GatherND",[mh,gh]],["Gelu",[_c]],["Gemm",[vh,$h]],["GlobalAveragePool",[Vh,Wh]],["GlobalMaxPool",[Fh,jh]],["Greater",[Vc]],["GreaterOrEqual",[Hc]],["GridSample",[xh,Sh]],["GroupQueryAttention",[Rh]],["HardSigmoid",[Tc,kc]],["InstanceNormalization",[Bh]],["LayerNormalization",[Nh]],["LeakyRelu",[bc,fr]],["Less",[Gc]],["LessOrEqual",[jc]],["Log",[Bc]],["MatMul",[Mh]],["MatMulNBits",[Dh,Ph]],["MaxPool",[Gh,Hh]],["Mul",[qc]],["MultiHeadAttention",[Th,kh]],["Neg",[$c]],["Not",[wc]],["Pad",[Uh]],["Pow",[Lc]],["QuickGelu",[Nc,fr]],["Range",[Xh]],["Reciprocal",[vc]],["ReduceMin",[Hp]],["ReduceMean",[qp]],["ReduceMax",[Gp]],["ReduceSum",[Fp]],["ReduceProd",[jp]],["ReduceL1",[Lp]],["ReduceL2",[Wp]],["ReduceLogSum",[Zp]],["ReduceLogSumExp",[Vp]],["ReduceSumSquare",[Kp]],["Relu",[xc]],["Resize",[Jh,ef]],["RotaryEmbedding",[Ah]],["ScatterND",[Yh,Qh]],["Sigmoid",[Sc]],["Sin",[Ic]],["Sinh",[Ec]],["Slice",[rf,af]],["SkipLayerNormalization",[tf]],["Split",[Eh,zh]],["Sqrt",[zc]],["Softmax",[nf,sf]],["Sub",[Wc]],["Tan",[Cc]],["Tanh",[Ac]],["ThresholdedRelu",[Rc,fr]],["Tile",[of]],["Transpose",[Ep,zp]],["Where",[uf]]])}),df,ay=L(()=>{je(),ct(),ue(),df=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){ot(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),tt(e.programInfo.name)}dispose(){}build(e,t){ot(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Ip(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return tt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),pf={};Xt(pf,{WebGpuBackend:()=>cf});var Dd,Pd,Ud,cf,ny=L(()=>{je(),ne(),ct(),vp(),m0(),iy(),ay(),Dd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Pd=(e,t,r)=>{var a,n;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Dd(t,((n=e.shaderCache)==null?void 0:n.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Ud=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},cf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new Ud(s),this.gpuDataManager=kp(this),this.programManager=new df(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qa(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ot(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let n=r[a],s=n.kernelId,u=this.kernels.get(s),l=u.kernelType,d=u.kernelName,c=n.programName,f=n.inputTensorViews,g=n.outputTensorViews,y=t[a*2],_=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:pt(v.dataType)})),outputsMetadata:g.map(v=>({dims:v.dims,dataType:pt(v.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:c,startTime:b,endTime:S});else{let v="";f.forEach((T,k)=>{v+=`input[${k}]: [${T.dims}] | ${pt(T.dataType)}, `});let w="";g.forEach((T,k)=>{w+=`output[${k}]: [${T.dims}] | ${pt(T.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${c}" ${v}${w}start time: ${b} ns, execution time: ${S-b} ns`)}Zr("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),tt()}run(e,t,r,i,a,n){ot(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let k=this.gpuDataManager.get(T);if(!k)throw new Error(`no GPU data for input: ${T}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((w,T)=>T):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],g=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(c[w])||c[w]<-3||c[w]>=n)throw new Error(`Invalid output index: ${c[w]}`);if(c[w]===-3)continue;let T=c[w]===-1,k=c[w]===-2,E=T||k?a(u[w].dataType,u[w].dims):i(c[w],u[w].dataType,u[w].dims);if(f.push(E),E.data===0)continue;let A=this.gpuDataManager.get(E.data);if(!A)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(A),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(A)}g.push(A)}if(s.length!==t.length||g.length!==f.length){if(g.length===0)return tt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,T=[];d.forEach(z=>{let $=typeof z.data=="number"?[z.data]:z.data;if($.length===0)return;let N=z.type===10?2:4,P,K;z.type===10?(K=$.length>4?16:$.length>2?8:$.length*N,P=$.length>4?16:N*$.length):(K=$.length<=2?$.length*N:16,P=16),w=Math.ceil(w/K)*K,T.push(w);let Q=z.type===10?8:4;w+=$.length>4?Math.ceil($.length/Q)*P:$.length*N});let k=16;w=Math.ceil(w/k)*k;let E=new ArrayBuffer(w);d.forEach((z,$)=>{let N=T[$],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(E,N,P.length).set(P);else if(z.type===12)new Uint32Array(E,N,P.length).set(P);else if(z.type===10)new Uint16Array(E,N,P.length).set(P);else if(z.type===1)new Float32Array(E,N,P.length).set(P);else throw new Error(`Unsupported uniform type: ${pt(z.type)}`)});let A=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,E,0,w),this.gpuDataManager.release(A.id),y={offset:0,size:w,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,S=Pd(e,t,b),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),he("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let w=0;w<d.length;w++){let T=d[w],k=T.type,E=typeof T.data=="number"?1:T.data.length,[A,z]=v.uniformVariablesInfo[w];if(k!==A||E!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${A} with size ${z}, got type ${k} with size ${E} in program "${v.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(v,s,g,_,y),tt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=lf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ea(this,e,t);return Ya(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),hf={};Xt(hf,{init:()=>ff});var Vr,qd,ff,sy=L(()=>{ne(),ct(),oe(),f0(),Vr=class mf{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new mf(this.module,this.dataType,this.data,t)}},qd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),g=[];for(let y=0;y<f;y++)g.push(Number(e.getValue(i*a++,n)));u.push(new Vr(e,d,c,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,l,d)=>new Vr(this.module,l,this.output(u,d),d),n=(u,l)=>{let d=Bt(u,l);if(!d)throw new Error(`Unsupported data type: ${u}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Vr(this.module,u,c,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},ff=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(ny(),_r(pf)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new qd(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Sp(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u),(s,u)=>n.registerMLContext(s,u),!!r.trace])}}}),Ld,dn,pn,wt,Wd,ba,ii,cn,hn,wa,fn,mn,gn,gf=L(()=>{je(),p0(),c0(),ne(),qt(),Fa(),_p(),Ld=(e,t)=>{$e()._OrtInit(e,t)!==0&&_e("Can't initialize onnxruntime.")},dn=async e=>{Ld(e.wasm.numThreads,Yr(e.logLevel))},pn=async(e,t)=>{var i,a;(a=(i=$e()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(sy(),_r(hf)).init;t==="webgpu"&&await n("webgpu",$e(),e,r),t==="webnn"&&await n("webnn",$e(),e)}},wt=new Map,Wd=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&_e("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},ba=(e,t)=>{let r=$e(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&_e("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let f=0;f<d;f++){let g=Number(r.getValue(a+8+f*n,"*"));c.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ii=e=>{let t=$e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},cn=async(e,t)=>{var f,g,y,_;let r,i,a=$e();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ii(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await yp(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let $=[];for(let N of t.externalData){let P=typeof N=="string"?N:N.path;$.push(Xa(typeof N=="string"?N:N.data).then(K=>{a.mountExternalData(P,K)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let N=$,P=N==null?void 0:N.context,K=N==null?void 0:N.gpuDevice,Q=N==null?void 0:N.deviceType,D=N==null?void 0:N.powerPreference;P?a.currentContext=P:K?a.currentContext=await a.webnnCreateMLContext(K):a.currentContext=await a.webnnCreateMLContext({deviceType:Q,powerPreference:D})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),(f=a.webgpuOnCreateSession)==null||f.call(a,n),n===0&&_e("Can't create a session."),(g=a.jsepOnCreateSession)==null||g.call(a),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[b,S]=Wd(n),v=!!(t!=null&&t.enableGraphCapture),w=[],T=[],k=[],E=[],A=[];for(let $=0;$<b;$++){let[N,P,K]=ba(n,$);N===0&&_e("Can't get an input name."),d.push(N);let Q=a.UTF8ToString(N);w.push(Q),k.push(P===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:pt(P),shape:K})}for(let $=0;$<S;$++){let[N,P,K]=ba(n,$+b);N===0&&_e("Can't get an output name."),c.push(N);let Q=a.UTF8ToString(N);T.push(Q),E.push(P===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:pt(P),shape:K});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){A.push("gpu-buffer");continue}let D=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[Q])??"cpu",O=a.webnnIsGraphOutput;if(D==="cpu"&&O&&O(n,Q)){A.push("ml-tensor-cpu-output");continue}if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(v&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);A.push(D)}}let z=null;return A.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&_e("Can't create IO binding."),z={handle:u,outputPreferredLocations:A,outputPreferredLocationsEncoded:A.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>Ta($))}),wt.set(n,[n,d,c,z,v,!1]),[n,w,T,k,E]}catch(b){throw d.forEach(S=>a._OrtFree(S)),c.forEach(S=>a._OrtFree(S)),u!==0&&a._OrtReleaseBinding(u)!==0&&_e("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&_e("Can't release session."),b}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&_e("Can't release session options."),l.forEach(b=>a._free(b)),(_=a.unmountExternalData)==null||_.call(a)}},hn=e=>{var l,d,c;let t=$e(),r=wt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&_e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&_e("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),a.forEach(f=>t._OrtFree(f)),n.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&_e("Can't release session."),wt.delete(e)},wa=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=$e(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],g=f,y,_;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let v=e[2].gpuBuffer;_=Bt(Rt(d),c);{let w=u.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,n,v,_)}}else if(f==="ml-tensor"){let v=e[2].mlTensor;_=Bt(Rt(d),c);let w=u.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,v,Rt(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,y=u._malloc(_),r.push(y);for(let w=0;w<v.length;w++){if(typeof v[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);u.setValue(y+w*l,Je(v[w],r),"*")}}else{let w=u.webnnIsGraphInput,T=u.webnnIsGraphOutput;if(d!=="string"&&w&&T){let k=u.UTF8ToString(a);if(w(i,k)||T(i,k)){let E=Rt(d);_=Bt(E,c),g="ml-tensor";let A=u.webnnCreateTemporaryTensor,z=u.webnnUploadTensor;if(!A||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await A(i,E,c);z($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=$}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let b=u.stackSave(),S=u.stackAlloc(4*c.length);try{c.forEach((w,T)=>u.setValue(S+T*l,w,l===4?"i32":"i64"));let v=u._OrtCreateTensor(Rt(d),y,_,S,c.length,Ta(g));v===0&&_e(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(v)}finally{u.stackRestore(b)}},fn=async(e,t,r,i,a,n)=>{var Q,D,O,j;let s=$e(),u=s.PTR_SIZE,l=wt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],g=l[3],y=l[4],_=l[5],b=t.length,S=i.length,v=0,w=[],T=[],k=[],E=[],A=[],z=s.stackSave(),$=s.stackAlloc(b*u),N=s.stackAlloc(b*u),P=s.stackAlloc(S*u),K=s.stackAlloc(S*u);try{[v,w]=gp(n),Nt("wasm prepareInputOutputTensor");for(let W=0;W<b;W++)await wa(r[W],T,E,e,c[t[W]],t[W],y);for(let W=0;W<S;W++)await wa(a[W],k,E,e,f[i[W]],b+i[W],y);Mt("wasm prepareInputOutputTensor");for(let W=0;W<b;W++)s.setValue($+W*u,T[W],"*"),s.setValue(N+W*u,c[t[W]],"*");for(let W=0;W<S;W++)s.setValue(P+W*u,k[W],"*"),s.setValue(K+W*u,f[i[W]],"*");if(g&&!_){let{handle:W,outputPreferredLocations:ae,outputPreferredLocationsEncoded:U}=g;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);Nt("wasm bindInputsOutputs");for(let H=0;H<b;H++){let Y=t[H];await s._OrtBindInput(W,c[Y],T[H])!==0&&_e(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<S;H++){let Y=i[H];(Q=a[H])!=null&&Q[3]?(A.push(k[H]),s._OrtBindOutput(W,f[Y],k[H],0)!==0&&_e(`Can't bind pre-allocated output[${H}] for session=${e}.`)):s._OrtBindOutput(W,f[Y],0,U[Y])!==0&&_e(`Can't bind output[${H}] to ${ae[H]} for session=${e}.`)}Mt("wasm bindInputsOutputs"),wt.set(e,[d,c,f,g,y,!0])}(D=s.jsepOnRunStart)==null||D.call(s,d),(O=s.webnnOnRunStart)==null||O.call(s,d);let F;g?F=await s._OrtRunWithBinding(d,g.handle,S,P,v):F=await s._OrtRun(d,N,$,b,K,S,P,v),F!==0&&_e("failed to call OrtRun().");let Z=[],re=[];Nt("wasm ProcessOutputTensor");for(let W=0;W<S;W++){let ae=Number(s.getValue(P+W*u,"*"));if(ae===k[W]||A.includes(k[W])){Z.push(a[W]),ae!==k[W]&&s._OrtReleaseTensor(ae)!==0&&_e("Can't release tensor.");continue}let U=s.stackSave(),H=s.stackAlloc(4*u),Y=!1,q,fe=0;try{s._OrtGetTensorData(ae,H,H+u,H+2*u,H+3*u)!==0&&_e(`Can't access output tensor data on index ${W}.`);let Ne=u===4?"i32":"i64",Te=Number(s.getValue(H,Ne));fe=s.getValue(H+u,"*");let Me=s.getValue(H+u*2,"*"),De=Number(s.getValue(H+u*3,Ne)),qe=[];for(let ve=0;ve<De;ve++)qe.push(Number(s.getValue(Me+ve*u,Ne)));s._OrtFree(Me)!==0&&_e("Can't free memory for tensor dims.");let Pe=qe.reduce((ve,se)=>ve*se,1);q=pt(Te);let ht=g==null?void 0:g.outputPreferredLocations[i[W]];if(q==="string"){if(ht==="gpu-buffer"||ht==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let se=0;se<Pe;se++){let Le=s.getValue(fe+se*u,"*"),wr=s.getValue(fe+(se+1)*u,"*"),Qt=se===Pe-1?void 0:wr-Le;ve.push(s.UTF8ToString(Le,Qt))}Z.push([q,qe,ve,"cpu"])}else if(ht==="gpu-buffer"&&Pe>0){let ve=s.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=ve(fe),Le=Bt(Te,Pe);if(Le===void 0||!Ka(q))throw new Error(`Unsupported data type: ${q}`);Y=!0,Z.push([q,qe,{gpuBuffer:se,download:s.jsepCreateDownloader(se,Le,q),dispose:()=>{s._OrtReleaseTensor(ae)!==0&&_e("Can't release tensor.")}},"gpu-buffer"])}else if(ht==="ml-tensor"&&Pe>0){let ve=s.webnnEnsureTensor,se=s.webnnIsGraphInputOutputTypeSupported;if(!ve||!se)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Bt(Te,Pe)===void 0||!Za(q))throw new Error(`Unsupported data type: ${q}`);if(!se(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let Le=await ve(e,fe,Te,qe,!1);Y=!0,Z.push([q,qe,{mlTensor:Le,download:s.webnnCreateMLTensorDownloader(fe,q),dispose:()=>{s.webnnReleaseTensorId(fe),s._OrtReleaseTensor(ae)}},"ml-tensor"])}else if(ht==="ml-tensor-cpu-output"&&Pe>0){let ve=s.webnnCreateMLTensorDownloader(fe,q)(),se=Z.length;Y=!0,re.push((async()=>{let Le=[se,await ve];return s.webnnReleaseTensorId(fe),s._OrtReleaseTensor(ae),Le})()),Z.push([q,qe,[],"cpu"])}else{let ve=ai(q),se=new ve(Pe);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(s.HEAPU8.subarray(fe,fe+se.byteLength)),Z.push([q,qe,se,"cpu"])}}finally{s.stackRestore(U),q==="string"&&fe&&s._free(fe),Y||s._OrtReleaseTensor(ae)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&_e("Can't clear bound outputs."),wt.set(e,[d,c,f,g,y,!1]));for(let[W,ae]of await Promise.all(re))Z[W][2]=ae;return Mt("wasm ProcessOutputTensor"),Z}finally{(j=s.webnnOnRunEnd)==null||j.call(s,d),s.stackRestore(z),T.forEach(F=>s._OrtReleaseTensor(F)),k.forEach(F=>s._OrtReleaseTensor(F)),E.forEach(F=>s._free(F)),v!==0&&s._OrtReleaseRunOptions(v),w.forEach(F=>s._free(F))}},mn=e=>{let t=$e(),r=wt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&_e("Can't get an profile file name."),t._OrtFree(a)},gn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),$t,Ue,Ht,dr,pr,Gr,$a,Hr,Ct,At,Vd,yf,_f,bf,wf,$f,vf,xf,Sf=L(()=>{je(),gf(),qt(),Ha(),$t=()=>!!we.wasm.proxy&&typeof document<"u",Ht=!1,dr=!1,pr=!1,Hr=new Map,Ct=(e,t)=>{let r=Hr.get(e);r?r.push(t):Hr.set(e,[t])},At=()=>{if(Ht||!dr||pr||!Ue)throw new Error("worker not ready")},Vd=e=>{switch(e.data.type){case"init-wasm":Ht=!1,e.data.err?(pr=!0,$a[1](e.data.err)):(dr=!0,$a[0]()),Gr&&(URL.revokeObjectURL(Gr),Gr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Hr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},yf=async()=>{if(!dr){if(Ht)throw new Error("multiple calls to 'initWasm()' detected.");if(pr)throw new Error("previous call to 'initWasm()' failed.");if(Ht=!0,$t())return new Promise((e,t)=>{Ue==null||Ue.terminate(),fp().then(([r,i])=>{try{Ue=i,Ue.onerror=n=>t(n),Ue.onmessage=Vd,$a=[e,t];let a={type:"init-wasm",in:we};!a.in.wasm.wasmPaths&&(r||ka)&&(a.in.wasm.wasmPaths={wasm:new URL("/uqab-preview/assets/ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href}),Ue.postMessage(a),Gr=r}catch(a){t(a)}},t)});try{await ja(we.wasm),await dn(we),dr=!0}catch(e){throw pr=!0,e}finally{Ht=!1}}},_f=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:we}};Ue.postMessage(i)});await pn(we,e)},bf=async e=>$t()?(At(),new Promise((t,r)=>{Ct("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ue.postMessage(i,[e.buffer])})):ii(e),wf=async(e,t)=>{if($t()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return At(),new Promise((r,i)=>{Ct("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ue.postMessage(a,n)})}else return cn(e,t)},$f=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("release",[t,r]);let i={type:"release",in:e};Ue.postMessage(i)});hn(e)},vf=async(e,t,r,i,a,n)=>{if($t()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return At(),new Promise((s,u)=>{Ct("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Ue.postMessage(d,gn(l))})}else return fn(e,t,r,i,a,n)},xf=async e=>{if($t())return At(),new Promise((t,r)=>{Ct("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ue.postMessage(i)});mn(e)}}),va,Gd,kf,oy=L(()=>{je(),Sf(),ne(),Ga(),_p(),va=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Gd=e=>{switch(e[3]){case"cpu":return new et(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ka(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return et.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Za(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return et.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},kf=class{async fetchModelAndCopyToWasmMemory(e){return bf(await Xa(e))}async loadModel(e,t){ot();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wf(r,t),tt()}async dispose(){return $f(this.sessionId)}async run(e,t,r){ot();let i=[],a=[];Object.entries(e).forEach(f=>{let g=f[0],y=f[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),a.push(_)});let n=[],s=[];Object.entries(t).forEach(f=>{let g=f[0],y=f[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);n.push(y),s.push(_)});let u=i.map((f,g)=>va(f,()=>`input "${this.inputNames[a[g]]}"`)),l=n.map((f,g)=>f?va(f,()=>`output "${this.outputNames[s[g]]}"`):null),d=await vf(this.sessionId,a,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??Gd(d[f]);return tt(),c}startProfiling(){}endProfiling(){xf(this.sessionId)}}}),Tf={};Xt(Tf,{OnnxruntimeWebAssemblyBackend:()=>qa,initializeFlags:()=>Ua,wasmBackend:()=>If});var Ua,qa,If,uy=L(()=>{je(),Sf(),oy(),Ua=()=>{(typeof we.wasm.initTimeout!="number"||we.wasm.initTimeout<0)&&(we.wasm.initTimeout=0);let e=we.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),we.wasm.simd=!1),typeof we.wasm.proxy!="boolean"&&(we.wasm.proxy=!1),typeof we.wasm.trace!="boolean"&&(we.wasm.trace=!1),typeof we.wasm.numThreads!="number"||!Number.isInteger(we.wasm.numThreads)||we.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)we.wasm.numThreads=1;else{let t=typeof navigator>"u"?Fg("node:os").cpus().length:navigator.hardwareConcurrency;we.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},qa=class{async init(e){Ua(),await yf(),await _f(e)}async createInferenceSessionHandler(e,t){let r=new kf;return await r.loadModel(e,t),r}},If=new qa});je();je();je();var ly="1.27.0";{let e=(uy(),_r(Tf)).wasmBackend;jt("webgpu",e,5),jt("webnn",e,5),jt("cpu",e,10),jt("wasm",e,10)}Object.defineProperty(we.versions,"web",{value:ly,enumerable:!0});/**
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
 */const dy=new Set([1,2,3,5,7]),xa={1:{ar:"دراجة",en:"bicycle"},2:{ar:"سيارة",en:"car"},3:{ar:"دراجة نارية",en:"motorcycle"},5:{ar:"حافلة",en:"bus"},7:{ar:"شاحنة",en:"truck"}},Oe=640,py=.32,cy=.45;let yr=null,La="wasm";function hy(){return La}async function fy(e){if(yr)return;const t=`${e}models/yolo11n.onnx`;we.wasm.numThreads=1;try{we.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.jsep.wasm`},yr=await Xr.create(t,{executionProviders:["webgpu"]}),La="webgpu"}catch{we.wasm.wasmPaths={wasm:`${e}ort/ort-wasm-simd-threaded.wasm`},yr=await Xr.create(t,{executionProviders:["wasm"]}),La="wasm"}}const jr=typeof document<"u"?document.createElement("canvas"):null;async function my(e){if(!yr||!jr)return[];const t=e.videoWidth,r=e.videoHeight;if(!t||!r)return[];jr.width=Oe,jr.height=Oe;const i=jr.getContext("2d",{willReadFrequently:!0}),a=Math.min(Oe/t,Oe/r),n=Math.round(t*a),s=Math.round(r*a),u=(Oe-n)/2,l=(Oe-s)/2;i.fillStyle="#727272",i.fillRect(0,0,Oe,Oe),i.drawImage(e,u,l,n,s);const{data:d}=i.getImageData(0,0,Oe,Oe),c=new Float32Array(3*Oe*Oe),f=Oe*Oe;for(let v=0;v<f;v++)c[v]=d[v*4]/255,c[v+f]=d[v*4+1]/255,c[v+2*f]=d[v*4+2]/255;const g=new et("float32",c,[1,3,Oe,Oe]),_=(await yr.run({images:g})).output0.data,b=8400,S=[];for(let v=0;v<b;v++){let w=0,T=-1;for(let $=0;$<80;$++){const N=_[(4+$)*b+v];N>w&&(w=N,T=$)}if(w<py||!dy.has(T))continue;const k=_[v],E=_[b+v],A=_[2*b+v],z=_[3*b+v];S.push({x:(k-A/2-u)/a,y:(E-z/2-l)/a,w:A/a,h:z/a,score:w,classId:T})}return gy(S)}function Ef(e,t){const r=Math.max(e.x,t.x),i=Math.max(e.y,t.y),a=Math.min(e.x+e.w,t.x+t.w),n=Math.min(e.y+e.h,t.y+t.h),s=Math.max(0,a-r)*Math.max(0,n-i);return s/(e.w*e.h+t.w*t.h-s||1)}function gy(e){const t=[...e].sort((i,a)=>a.score-i.score),r=[];for(const i of t)r.every(a=>Ef(a,i)<cy)&&r.push(i);return r}function yy(e){let t=1,r=[];for(const i of e){for(const a of i.boxes){let n=null,s=.25;for(const u of r){const l=Ef(a,u);l>s&&(s=l,n=u)}a.trackId=(n==null?void 0:n.trackId)??t++}r=i.boxes}return e}function _y(e,t,r){const i=t*r,a=new Map;let n=0,s=0;const u=new Set;for(const l of e)for(const d of l.boxes){if(d.trackId===void 0)continue;const f=d.y+d.h/2>i?1:-1,g=a.get(d.trackId);g!==void 0&&g!==f&&!u.has(d.trackId)&&(u.add(d.trackId),f===1?n+=1:s+=1),a.set(d.trackId,f)}return{down:n,up:s,total:n+s}}const by="_screen_1mtor_1",wy="_header_1mtor_11",$y="_back_1mtor_13",vy="_title_1mtor_19",xy="_subtitle_1mtor_20",Sy="_why_1mtor_21",ky="_stage_1mtor_23",Ty="_video_1mtor_31",Iy="_overlay_1mtor_33",Ey="_progressWrap_1mtor_41",zy="_progressBar_1mtor_56",Cy="_progressPct_1mtor_66",Ay="_controls_1mtor_73",Oy="_primary_1mtor_80",Ry="_status_1mtor_92",By="_error_1mtor_93",Ny="_replayBadge_1mtor_95",My="_provider_1mtor_103",Dy="_honesty_1mtor_111",Py="_workbench_1mtor_121",Uy="_stageCol_1mtor_132",qy="_cancelBtn_1mtor_134",Ly="_dropzone_1mtor_146",Wy="_dropHint_1mtor_161",Vy="_dropFormats_1mtor_163",Gy="_reject_1mtor_165",Hy="_modelCardLink_1mtor_176",jy="_rail_1mtor_187",Fy="_railHead_1mtor_199",Ky="_railTitle_1mtor_201",Zy="_copyBtn_1mtor_203",Xy="_railEmpty_1mtor_215",Qy="_recordedTag_1mtor_217",Yy="_bigCounts_1mtor_227",Jy="_bigCount_1mtor_227",e_="_railSection_1mtor_248",t_="_railLabel_1mtor_250",r_="_dirRow_1mtor_259",i_="_classRow_1mtor_263",a_="_classBar_1mtor_272",n_="_classNum_1mtor_287",s_="_flowChart_1mtor_289",o_="_flowBar_1mtor_297",u_="_flowBarPeak_1mtor_298",l_="_peakLine_1mtor_309",d_="_sumRow_1mtor_311",p_="_clipOriginTag_1mtor_316",ie={screen:by,header:wy,back:$y,title:vy,subtitle:xy,why:Sy,stage:ky,video:Ty,overlay:Iy,progressWrap:Ey,progressBar:zy,progressPct:Cy,controls:Ay,primary:Oy,status:Ry,error:By,replayBadge:Ny,provider:My,honesty:Dy,workbench:Py,stageCol:Uy,cancelBtn:qy,dropzone:Ly,dropHint:Wy,dropFormats:Vy,reject:Gy,modelCardLink:Hy,rail:jy,railHead:Fy,railTitle:Ky,copyBtn:Zy,railEmpty:Xy,recordedTag:Qy,bigCounts:Yy,bigCount:Jy,railSection:e_,railLabel:t_,dirRow:r_,classRow:i_,classBar:a_,classNum:n_,flowChart:s_,flowBar:o_,flowBarPeak:u_,peakLine:l_,sumRow:d_,clipOriginTag:p_},Sa=.55,c_=.18,h_={ar:{title:"تحليل تقاطع بالفيديو",subtitle:"كشف مركبات داخل المتصفح بالكامل — لا يغادر الفيديو جهازك",why:"",loadingModel:"تحميل النموذج (~10MB أول مرة)…",analyze:"حلّل المقطع",analyzing:"جارٍ التحليل مرة واحدة…",replay:"إعادة تشغيل سلسة من الذاكرة",upload:"ارفع مقطعاً آخر",counted:"مركبات عبرت الخط",down:"باتجاه الكاميرا",up:"مبتعدة",tracks:"مسارات مرصودة",provider:"المعالجة",modelCard:"بطاقة النماذج",err:"تعذر تحميل النموذج — أعد المحاولة أو استخدم متصفح Chrome/Edge حديثاً",resultsTitle:"نتائج التحليل",perClass:"حسب الصنف (مسارات فريدة)",directional:"العبور الاتجاهي",flowTitle:"التدفق عبر زمن المقطع",peak:"الذروة",summaryTitle:"ملخص التشغيل",duration:"المدة المحللة",sec:"ث",framesN:"إطارات معالجة",copyBtn:"نسخ الأرقام",copiedTxt:"✓ نُسخت",recordedTag:"أرقام من مقطع مسجّل — ليست بثاً حياً",dropHint:"اسحب مقطع تقاطع هنا أو اضغط للاختيار",dropFormats:"MP4 / WebM · حتى 60MB",rejectType:"الملف ليس فيديو مدعوماً (MP4/WebM) — لم يُحلَّل",rejectSize:"الملف أكبر من 60MB — اختر مقطعاً أقصر",rejectLoad:"تعذّر قراءة الفيديو — جرّب ملفاً آخر",cancelBtn:"إلغاء التحليل",noResults:"شغّل التحليل لعرض الأرقام هنا",demoClipTag:"مقطع توضيحي غير أردني (طوكيو) — مرخّص، لغرض عرض التقنية فقط",honesty:"نموذج YOLO11n عام (COCO) — لا نعلن دقة رقمية على مشاهد أردنية لأنها غير مقيسة؛ العدّ مصمم قرب الكاميرا حيث يكون الكشف موثوقاً."},en:{title:"Intersection video analysis",subtitle:"Fully in-browser vehicle detection — the video never leaves your device",why:"",loadingModel:"Loading the model (~10MB first time)…",analyze:"Analyze the clip",analyzing:"Analyzing once…",replay:"Smooth replay from cache",upload:"Upload another clip",counted:"Vehicles crossed the line",down:"Toward camera",up:"Away",tracks:"Tracks observed",provider:"Processing",modelCard:"Model Card",err:"Model failed to load — retry or use a recent Chrome/Edge",resultsTitle:"Analysis results",perClass:"By class (unique tracks)",directional:"Directional crossings",flowTitle:"Flow over clip time",peak:"Peak",summaryTitle:"Run summary",duration:"Analyzed duration",sec:"s",framesN:"Frames processed",copyBtn:"Copy numbers",copiedTxt:"✓ Copied",recordedTag:"Numbers from a recorded clip — not a live feed",dropHint:"Drop an intersection clip here or click to choose",dropFormats:"MP4 / WebM · up to 60MB",rejectType:"Not a supported video (MP4/WebM) — nothing was analyzed",rejectSize:"File exceeds 60MB — pick a shorter clip",rejectLoad:"Could not read the video — try another file",cancelBtn:"Cancel analysis",noResults:"Run the analysis to populate the numbers",demoClipTag:"Non-Jordanian demo clip (Tokyo) — licensed, for technology demonstration only",honesty:"Generic YOLO11n (COCO) — no numeric accuracy is claimed on Jordanian scenes as none was measured; counting is designed near-camera where detection is reliable."}};function f_(e,t,r){const i=new Map,a=new Map;for(const d of e)for(const c of d.boxes){if(!c.trackId)continue;i.set(c.trackId,c.classId);const f=a.get(c.trackId)??[];f.push({t:d.t,cy:c.y+c.h/2}),a.set(c.trackId,f)}const n=new Map;for(const d of i.values())n.set(d,(n.get(d)??0)+1);const s=[];for(const[,d]of a)for(let c=1;c<d.length;c++){const f=d[c-1].cy,g=d[c].cy;if(f<t&&g>=t||f>=t&&g<t){s.push({t:d[c].t,dir:g>f?"down":"up"});break}}const u=10,l=Array.from({length:u},()=>0);for(const d of s)l[Math.min(u-1,Math.floor(d.t/Math.max(r,.1)*u))]+=1;return{perClass:[...n.entries()].map(([d,c])=>({classId:d,count:c})).sort((d,c)=>c.count-d.count),downTotal:s.filter(d=>d.dir==="down").length,upTotal:s.filter(d=>d.dir==="up").length,buckets:l,peakBucket:l.length?l.indexOf(Math.max(...l)):0,durationS:r,frames:e.length}}function b_(){const{language:e}=Ug(),t=qg(),r=Lg("/ops/cameras"),i=h_[e],a="/uqab-preview/",n=Ae.useRef(null),s=Ae.useRef(null),u=Ae.useRef([]),l=Ae.useRef({down:0,up:0,total:0}),d=Ae.useRef(0),[c,f]=Ae.useState("loading-model"),[g,y]=Ae.useState(0),[_,b]=Ae.useState(`${a}assets/detection/demo-intersection.mp4`),[S,v]=Ae.useState(0),[w,T]=Ae.useState(null),[k,E]=Ae.useState(!1),A=Ae.useRef(!1),[z,$]=Ae.useState(null);Ae.useEffect(()=>{let D=!0;return fy(a).then(()=>D&&f("ready")).catch(()=>D&&f("error")),()=>{D=!1}},[a]);const N=Ae.useCallback(D=>{var Y;const O=n.current,j=s.current;if(!O||!j)return;const F=O.videoWidth,Z=O.videoHeight;j.width!==F&&(j.width=F,j.height=Z);const re=j.getContext("2d");re.clearRect(0,0,F,Z);const W=Sa*Z;re.strokeStyle="rgba(217, 193, 155, 0.9)",re.setLineDash([14,10]),re.lineWidth=3,re.beginPath(),re.moveTo(0,W),re.lineTo(F,W),re.stroke(),re.setLineDash([]);for(const q of D){re.strokeStyle="#6FAE92",re.lineWidth=2.5,re.strokeRect(q.x,q.y,q.w,q.h);const fe=`${((Y=xa[q.classId])==null?void 0:Y[e])??""} #${q.trackId??""}`;re.font="600 15px Outfit, Tajawal, sans-serif";const Ne=re.measureText(fe).width+10;re.fillStyle="rgba(13, 23, 33, 0.82)",re.fillRect(q.x,Math.max(0,q.y-22),Ne,20),re.fillStyle="#D9C19B",re.fillText(fe,q.x+5,Math.max(14,q.y-7))}const ae=l.current,U=`${i.counted}: ${ae.total} · ${i.down} ${ae.down} · ${i.up} ${ae.up}`;re.font="700 17px Outfit, Tajawal, sans-serif";const H=re.measureText(U).width+18;re.fillStyle="rgba(13, 23, 33, 0.85)",re.fillRect(F-H-12,12,H,30),re.fillStyle="#E9EEF4",re.fillText(U,F-H-3,33)},[e,i]),P=Ae.useCallback(async()=>{const D=n.current;if(!D)return;f("analyzing"),y(0),A.current=!1,$(null),u.current=[],D.currentTime=0,D.muted=!0,await D.play();let O=-1,j=!1;await new Promise(W=>{const ae=()=>{if(D.ended||A.current){W();return}const U=D.currentTime;!j&&U-O>=c_&&(j=!0,O=U,my(D).then(H=>{u.current.push({t:U,boxes:H}),y(Math.min(99,Math.round(U/D.duration*100))),j=!1})),D.requestVideoFrameCallback(ae)};D.requestVideoFrameCallback(ae),D.onended=()=>W()}),yy(u.current),l.current=_y(u.current,Sa,D.videoHeight);const F=new Set;for(const W of u.current)for(const ae of W.boxes)ae.trackId&&F.add(ae.trackId);v(F.size),$(f_(u.current,Sa*D.videoHeight,D.duration)),y(100),f("replay"),D.currentTime=0,await D.play();let Z=0;const re=()=>{var U;const W=D.currentTime,ae=u.current;for(;Z<ae.length-1&&ae[Z+1].t<=W;)Z+=1;Z>0&&W<ae[Z].t&&(Z=0),N(((U=ae[Z])==null?void 0:U.boxes)??[]),d.current=requestAnimationFrame(re)};D.loop=!0,d.current=requestAnimationFrame(re)},[N]);Ae.useEffect(()=>()=>cancelAnimationFrame(d.current),[]);const K=D=>{if(D){if(T(null),!/^video\/(mp4|webm|quicktime)$/.test(D.type)){T(i.rejectType);return}if(D.size>60*1024*1024){T(i.rejectSize);return}cancelAnimationFrame(d.current),_.startsWith("blob:")&&URL.revokeObjectURL(_),u.current=[],l.current={down:0,up:0,total:0},v(0),$(null),b(URL.createObjectURL(D)),f("ready")}},Q=()=>{if(!z)return;const D=["UQAB detection run",i.recordedTag,i.counted+": "+l.current.total+" ("+i.down+" "+l.current.down+" / "+i.up+" "+l.current.up+")",i.tracks+": "+S,...z.perClass.map(O=>{var j;return(((j=xa[O.classId])==null?void 0:j[e])??String(O.classId))+": "+O.count}),i.duration+": "+Math.round(z.durationS)+i.sec+" - "+i.framesN+": "+z.frames];navigator.clipboard.writeText(D.join(`
`)).then(()=>{E(!0),window.setTimeout(()=>E(!1),1800)})};return G.jsx(Wg,{activePath:"/ops/cameras",noBottomNav:!0,children:G.jsxs("div",{className:ie.screen,children:[G.jsxs("header",{className:ie.header,children:[G.jsx("button",{type:"button",className:ie.back,onClick:r,children:"‹"}),G.jsxs("div",{children:[G.jsx("h1",{className:ie.title,children:i.title}),G.jsx("p",{className:ie.subtitle,children:i.subtitle}),G.jsx("p",{className:ie.why,children:e==="ar"?`لماذا؟ ${Vg(Gt[2].value)} ${Gt[2].labelAr} (${Gt[2].sourceAr})`:`Why? ${Gt[2].value} ${Gt[2].labelEn} (${Gt[2].sourceEn})`})]})]}),G.jsxs("div",{className:ie.workbench,children:[G.jsxs("div",{className:ie.stageCol,children:[G.jsxs("div",{className:ie.stage,children:[G.jsx("video",{ref:n,src:_,className:ie.video,playsInline:!0,preload:"auto",onError:()=>T(i.rejectLoad)}),!_.startsWith("blob:")&&G.jsx("span",{className:ie.clipOriginTag,children:i.demoClipTag}),G.jsx("canvas",{ref:s,className:ie.overlay}),c==="analyzing"&&G.jsxs("div",{className:ie.progressWrap,children:[G.jsx("span",{children:i.analyzing}),G.jsx("div",{className:ie.progressBar,children:G.jsx("i",{style:{width:`${g}%`}})}),G.jsx("b",{className:ie.progressPct,children:G.jsxs(nt,{children:[g,"%"]})}),G.jsx("button",{type:"button",className:ie.cancelBtn,onClick:()=>{A.current=!0},children:i.cancelBtn})]})]}),G.jsxs("div",{className:ie.controls,children:[c==="loading-model"&&G.jsx("span",{className:ie.status,children:i.loadingModel}),c==="error"&&G.jsx("span",{className:ie.error,children:i.err}),c==="ready"&&G.jsxs("button",{type:"button",className:ie.primary,onClick:()=>void P(),children:["▶ ",i.analyze]}),c==="replay"&&G.jsxs("span",{className:ie.replayBadge,children:["✓ ",i.replay]}),G.jsxs("span",{className:ie.provider,children:[i.provider,": ",hy()]}),G.jsx("button",{type:"button",className:ie.modelCardLink,onClick:()=>t("/model-card"),children:i.modelCard})]}),(c==="ready"||c==="replay")&&G.jsxs("label",{className:ie.dropzone,onDragOver:D=>D.preventDefault(),onDrop:D=>{var O;D.preventDefault(),K(((O=D.dataTransfer.files)==null?void 0:O[0])??null)},children:[G.jsxs("span",{className:ie.dropHint,children:["⬆ ",i.dropHint]}),G.jsx("span",{className:ie.dropFormats,children:i.dropFormats}),G.jsx("input",{type:"file",accept:"video/mp4,video/webm,video/quicktime",hidden:!0,onChange:D=>{var O;return K(((O=D.target.files)==null?void 0:O[0])??null)}})]}),w&&G.jsxs("p",{className:ie.reject,role:"alert",children:["✕ ",w]})]}),G.jsxs("aside",{className:ie.rail,children:[G.jsxs("div",{className:ie.railHead,children:[G.jsx("span",{className:ie.railTitle,children:i.resultsTitle}),z&&G.jsx("button",{type:"button",className:ie.copyBtn,onClick:Q,children:k?i.copiedTxt:i.copyBtn})]}),z?G.jsxs(G.Fragment,{children:[G.jsx("span",{className:ie.recordedTag,children:i.recordedTag}),G.jsxs("div",{className:ie.bigCounts,children:[G.jsxs("div",{className:ie.bigCount,children:[G.jsx("b",{children:G.jsx(nt,{children:l.current.total})}),G.jsx("span",{children:i.counted})]}),G.jsxs("div",{className:ie.bigCount,children:[G.jsx("b",{children:G.jsx(nt,{children:S})}),G.jsx("span",{children:i.tracks})]})]}),G.jsxs("div",{className:ie.railSection,children:[G.jsx("em",{className:ie.railLabel,children:i.directional}),G.jsxs("div",{className:ie.dirRow,children:[G.jsxs("span",{children:["↓ ",i.down," ",G.jsx("b",{children:G.jsx(nt,{children:z.downTotal})})]}),G.jsxs("span",{children:["↑ ",i.up," ",G.jsx("b",{children:G.jsx(nt,{children:z.upTotal})})]})]})]}),G.jsxs("div",{className:ie.railSection,children:[G.jsx("em",{className:ie.railLabel,children:i.perClass}),z.perClass.map(D=>{var O;return G.jsxs("div",{className:ie.classRow,children:[G.jsx("span",{children:((O=xa[D.classId])==null?void 0:O[e])??D.classId}),G.jsx("i",{className:ie.classBar,children:G.jsx("b",{style:{width:`${D.count/Math.max(1,z.perClass[0].count)*100}%`}})}),G.jsx("b",{className:ie.classNum,children:G.jsx(nt,{children:D.count})})]},D.classId)})]}),G.jsxs("div",{className:ie.railSection,children:[G.jsx("em",{className:ie.railLabel,children:i.flowTitle}),G.jsx("div",{className:ie.flowChart,"aria-hidden":"true",children:z.buckets.map((D,O)=>G.jsx("i",{className:O===z.peakBucket?ie.flowBarPeak:ie.flowBar,style:{height:`${Math.max(8,D/Math.max(1,...z.buckets)*100)}%`},title:`${D}`},O))}),G.jsxs("span",{className:ie.peakLine,children:[i.peak,": ",G.jsx(nt,{children:`${Math.round(z.peakBucket/10*z.durationS)}–${Math.round((z.peakBucket+1)/10*z.durationS)}`})," ",i.sec," · ",G.jsx(nt,{children:z.buckets[z.peakBucket]})]})]}),G.jsxs("div",{className:ie.railSection,children:[G.jsx("em",{className:ie.railLabel,children:i.summaryTitle}),G.jsxs("div",{className:ie.sumRow,children:[G.jsx("span",{children:i.duration}),G.jsxs("b",{children:[G.jsx(nt,{children:Math.round(z.durationS)})," ",i.sec]})]}),G.jsxs("div",{className:ie.sumRow,children:[G.jsx("span",{children:i.framesN}),G.jsx("b",{children:G.jsx(nt,{children:z.frames})})]})]})]}):G.jsx("p",{className:ie.railEmpty,children:i.noResults}),G.jsx("p",{className:ie.honesty,children:i.honesty})]})]})]})})}export{b_ as DetectionScreen};
