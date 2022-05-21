/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(285),o=n(286),d=n(288),l=n(289);class c{constructor(e,t){this._delegate=e,this.firebase=t,Object(d._addComponent)(e,new o.a("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Object(d.deleteApp)(this._delegate))))}_getService(e,t=d._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=d._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(component){Object(d._addComponent)(this._delegate,component)}_addOrOverwriteComponent(component){Object(d._addOrOverwriteComponent)(this._delegate,component)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}const h={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},f=new r.b("app-compat","Firebase",h);const v=function e(){const t=function(e){const t={},n={__esModule:!0,initializeApp:function(o,l={}){const c=d.initializeApp(o,l);if(Object(r.f)(t,c.name))return t[c.name];const h=new e(c,n);return t[c.name]=h,h},app:o,registerVersion:d.registerVersion,setLogLevel:d.setLogLevel,onLog:d.onLog,apps:null,SDK_VERSION:d.SDK_VERSION,INTERNAL:{registerComponent:function(component){const t=component.name,l=t.replace("-compat","");if(d._registerComponent(component)&&"PUBLIC"===component.type){const d=(e=o())=>{if("function"!=typeof e[l])throw f.create("invalid-app-argument",{appName:t});return e[l]()};void 0!==component.serviceProps&&Object(r.j)(d,component.serviceProps),n[l]=d,e.prototype[l]=function(...e){return this._getService.bind(this,t).apply(this,component.multipleInstances?e:[])}}return"PUBLIC"===component.type?n[l]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:d}};function o(e){if(e=e||d._DEFAULT_ENTRY_NAME,!Object(r.f)(t,e))throw f.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),o.App=e,n}(c);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.j)(t,e)},createSubscribe:r.h,ErrorFactory:r.b,deepExtend:r.j}),t}(),m=new l.b("@firebase/app-compat");if(Object(r.n)()&&void 0!==self.firebase){m.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&m.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const _=v;var I;Object(d.registerVersion)("@firebase/app-compat","0.1.25",I)},311:function(e,t,n){"use strict";(function(e){var t=n(292),r=n(312),o=n(286),d=n(285);function l(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function c(e=Object(d.m)()){return!("file:"!==l()&&"ionic:"!==l()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(e=Object(d.m)()){return Object(d.r)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Object(d.m)()){return/Edge\/\d+/.test(e)}(e)}function f(){try{const e=self.localStorage,t=r.s();if(e)return e.setItem(t,"1"),e.removeItem(t),!h()||Object(d.s)()}catch(e){return v()&&Object(d.s)()}return!1}function v(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function m(){return("http:"===l()||"https:"===l()||Object(d.o)()||c())&&!(Object(d.v)()||Object(d.u)())&&f()&&!v()}function _(){return c()&&"undefined"!=typeof document}const I={LOCAL:"local",NONE:"none",SESSION:"session"},y=r.p,w="persistence";async function E(e){await e._initializationPromise;const t=O(),n=r.w(w,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function O(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}const R=r.p;class N{constructor(){this.browserResolver=r.t(r.A),this.cordovaResolver=r.t(r.F),this.underlyingResolver=null,this._redirectPersistence=r.B,this._completeRedirectFn=r.u,this._overrideRedirectResult=r.v}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return R(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!_()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}function A(object){return object.unwrap()}function P(object){const{_tokenResponse:e}=object instanceof d.c?object.customData:object;if(!e)return null;if(!(object instanceof d.c)&&"temporaryProof"in e&&"phoneNumber"in e)return r.i.credentialFromResult(object);const t=e.providerId;if(!t||t===r.k.PASSWORD)return null;let n;switch(t){case r.k.GOOGLE:n=r.f;break;case r.k.FACEBOOK:n=r.d;break;case r.k.GITHUB:n=r.e;break;case r.k.TWITTER:n=r.o;break;default:const{oauthIdToken:o,oauthAccessToken:d,oauthTokenSecret:l,pendingToken:c,nonce:h}=e;return d||l||o||c?c?t.startsWith("saml.")?r.m._create(t,c):r.g._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:o,accessToken:d}):new r.h(t).credential({idToken:o,accessToken:d,rawNonce:h}):null}return object instanceof d.c?n.credentialFromError(object):n.credentialFromResult(object)}function k(e,t){return t.catch((t=>{throw t instanceof d.c&&function(e,t){var n;const o=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code)t.resolver=new S(e,r.K(e,t));else if(o){const e=P(t),n=t;e&&(n.credential=e,n.tenantId=o.tenantId||void 0,n.email=o.email||void 0,n.phoneNumber=o.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(o=e,P(o)),additionalUserInfo:r.J(e),user:L.getOrCreate(n)};var o}))}async function C(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>k(e,n.confirm(t))}}class S{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return k(A(this.auth),this.resolver.resolveSignIn(e))}}class L{constructor(e){this._delegate=e,this.multiFactor=r.T(e)}static getOrCreate(e){return L.USER_MAP.has(e)||L.USER_MAP.set(e,new L(e)),L.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return k(this.auth,r.P(this._delegate,e))}async linkWithPhoneNumber(e,t){return C(this.auth,r.Q(this._delegate,e,t))}async linkWithPopup(e){return k(this.auth,r.R(this._delegate,e,N))}async linkWithRedirect(e){return await E(r.q(this.auth)),r.S(this._delegate,e,N)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return k(this.auth,r.U(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return C(this.auth,r.V(this._delegate,e,t))}reauthenticateWithPopup(e){return k(this.auth,r.W(this._delegate,e,N))}async reauthenticateWithRedirect(e){return await E(r.q(this.auth)),r.X(this._delegate,e,N)}sendEmailVerification(e){return r.Y(this._delegate,e)}async unlink(e){return await r.jb(this._delegate,e),this}updateEmail(e){return r.kb(this._delegate,e)}updatePassword(e){return r.lb(this._delegate,e)}updatePhoneNumber(e){return r.mb(this._delegate,e)}updateProfile(e){return r.nb(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ob(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}L.USER_MAP=new WeakMap;const j=r.p;class T{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;j(n,"invalid-api-key",{appName:e.name}),j(n,"invalid-api-key",{appName:e.name});const o="undefined"!=typeof window?N:void 0;this._delegate=t.initialize({options:{persistence:D(n,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(r.H),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?L.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.E(this._delegate,e,t)}applyActionCode(code){return r.y(this._delegate,code)}checkActionCode(code){return r.C(this._delegate,code)}confirmPasswordReset(code,e){return r.D(this._delegate,code,e)}async createUserWithEmailAndPassword(e,t){return k(this._delegate,r.G(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.I(this._delegate,e)}isSignInWithEmailLink(e){return r.O(this._delegate,e)}async getRedirectResult(){j(m(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.L(this._delegate,N);return e?k(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r.x(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:o,complete:d}=U(e,t,n);return this._delegate.onAuthStateChanged(r,o,d)}onIdTokenChanged(e,t,n){const{next:r,error:o,complete:d}=U(e,t,n);return this._delegate.onIdTokenChanged(r,o,d)}sendSignInLinkToEmail(e,t){return r.ab(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.Z(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){y(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(d.v)()?y(t!==I.SESSION,e,"unsupported-persistence-type"):Object(d.u)()?y(t===I.NONE,e,"unsupported-persistence-type"):v()?y(t===I.NONE||t===I.LOCAL&&Object(d.s)(),e,"unsupported-persistence-type"):y(t===I.NONE||f(),e,"unsupported-persistence-type")}(this._delegate,e),e){case I.SESSION:t=r.B;break;case I.LOCAL:t=await r.t(r.N)._isAvailable()?r.N:r.z;break;case I.NONE:t=r.M;break;default:return r.r("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return k(this._delegate,r.bb(this._delegate))}signInWithCredential(e){return k(this._delegate,r.cb(this._delegate,e))}signInWithCustomToken(e){return k(this._delegate,r.db(this._delegate,e))}signInWithEmailAndPassword(e,t){return k(this._delegate,r.eb(this._delegate,e,t))}signInWithEmailLink(e,t){return k(this._delegate,r.fb(this._delegate,e,t))}signInWithPhoneNumber(e,t){return C(this._delegate,r.gb(this._delegate,e,t))}async signInWithPopup(e){return j(m(),this._delegate,"operation-not-supported-in-this-environment"),k(this._delegate,r.hb(this._delegate,e,N))}async signInWithRedirect(e){return j(m(),this._delegate,"operation-not-supported-in-this-environment"),await E(this._delegate),r.ib(this._delegate,e,N)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(code){return r.pb(this._delegate,code)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function U(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const o=r;return{next:e=>o(e&&L.getOrCreate(e)),error:t,complete:n}}function D(e,t){const n=function(e,t){const n=O();if(!n)return[];const o=r.w(w,e,t);switch(n.getItem(o)){case I.NONE:return[r.M];case I.LOCAL:return[r.N,r.B];case I.SESSION:return[r.B];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.N)||n.push(r.N),"undefined"!=typeof window)for(const e of[r.z,r.B])n.includes(e)||n.push(e);return n.includes(r.M)||n.push(r.M),n}T.Persistence=I;class M{constructor(){this.providerId="phone",this._delegate=new r.i(A(t.a.auth()))}static credential(e,t){return r.i.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}M.PHONE_SIGN_IN_METHOD=r.i.PHONE_SIGN_IN_METHOD,M.PROVIDER_ID=r.i.PROVIDER_ID;const F=r.p;class W{constructor(e,n,o=t.a.app()){var d;F(null===(d=o.options)||void 0===d?void 0:d.apiKey,"invalid-api-key",{appName:o.name}),this._delegate=new r.l(e,n,o.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}var V;(V=t.a).INTERNAL.registerComponent(new o.a("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new T(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.a.EMAIL_SIGNIN,PASSWORD_RESET:r.a.PASSWORD_RESET,RECOVER_EMAIL:r.a.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.a.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.a.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.a.VERIFY_EMAIL}},EmailAuthProvider:r.c,FacebookAuthProvider:r.d,GithubAuthProvider:r.e,GoogleAuthProvider:r.f,OAuthProvider:r.h,SAMLAuthProvider:r.n,PhoneAuthProvider:M,PhoneMultiFactorGenerator:r.j,RecaptchaVerifier:W,TwitterAuthProvider:r.o,Auth:T,AuthCredential:r.b,Error:d.c}).setInstantiationMode("LAZY").setMultipleInstances(!1)),V.registerVersion("@firebase/auth-compat","0.2.14")}).call(this,n(33))},312:function(e,t,n){"use strict";n.d(t,"x",(function(){return E})),n.d(t,"F",(function(){return y}));var r=n(284);n.d(t,"a",(function(){return r.b})),n.d(t,"b",(function(){return r.e})),n.d(t,"c",(function(){return r.h})),n.d(t,"d",(function(){return r.i})),n.d(t,"e",(function(){return r.m})),n.d(t,"f",(function(){return r.k})),n.d(t,"g",(function(){return r.f})),n.d(t,"h",(function(){return r.n})),n.d(t,"i",(function(){return r.j})),n.d(t,"j",(function(){return r.sb})),n.d(t,"k",(function(){return r.tb})),n.d(t,"l",(function(){return r.l})),n.d(t,"m",(function(){return r.L})),n.d(t,"n",(function(){return r.o})),n.d(t,"o",(function(){return r.p})),n.d(t,"p",(function(){return r.eb})),n.d(t,"q",(function(){return r.J})),n.d(t,"r",(function(){return r.ab})),n.d(t,"s",(function(){return r.K})),n.d(t,"t",(function(){return r.fb})),n.d(t,"u",(function(){return r.G})),n.d(t,"v",(function(){return r.H})),n.d(t,"w",(function(){return r.gb})),n.d(t,"y",(function(){return r.x})),n.d(t,"z",(function(){return r.hb})),n.d(t,"A",(function(){return r.qb})),n.d(t,"B",(function(){return r.u})),n.d(t,"C",(function(){return r.y})),n.d(t,"D",(function(){return r.w})),n.d(t,"E",(function(){return r.d})),n.d(t,"G",(function(){return r.A})),n.d(t,"H",(function(){return r.c})),n.d(t,"I",(function(){return r.M})),n.d(t,"J",(function(){return r.T})),n.d(t,"K",(function(){return r.U})),n.d(t,"L",(function(){return r.pb})),n.d(t,"M",(function(){return r.g})),n.d(t,"N",(function(){return r.ob})),n.d(t,"O",(function(){return r.D})),n.d(t,"P",(function(){return r.s})),n.d(t,"Q",(function(){return r.rb})),n.d(t,"R",(function(){return r.jb})),n.d(t,"S",(function(){return r.mb})),n.d(t,"T",(function(){return r.V})),n.d(t,"U",(function(){return r.t})),n.d(t,"V",(function(){return r.ub})),n.d(t,"W",(function(){return r.kb})),n.d(t,"X",(function(){return r.nb})),n.d(t,"Y",(function(){return r.N})),n.d(t,"Z",(function(){return r.v})),n.d(t,"ab",(function(){return r.C})),n.d(t,"bb",(function(){return r.q})),n.d(t,"cb",(function(){return r.r})),n.d(t,"db",(function(){return r.a})),n.d(t,"eb",(function(){return r.B})),n.d(t,"fb",(function(){return r.E})),n.d(t,"gb",(function(){return r.vb})),n.d(t,"hb",(function(){return r.ib})),n.d(t,"ib",(function(){return r.lb})),n.d(t,"jb",(function(){return r.S})),n.d(t,"kb",(function(){return r.Q})),n.d(t,"lb",(function(){return r.R})),n.d(t,"mb",(function(){return r.wb})),n.d(t,"nb",(function(){return r.P})),n.d(t,"ob",(function(){return r.O})),n.d(t,"pb",(function(){return r.z}));var o=n(285);n(288),n(289),n(286);function d(){return window}async function l(e,t,n){var o;const{BuildInfo:l}=d();Object(r.X)(t.sessionId,"AuthEvent did not contain a session ID");const c=await async function(e){const t=function(e){if(Object(r.X)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),view=new Uint8Array(t);for(let i=0;i<e.length;i++)view[i]=e.charCodeAt(i);return view}(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),h={};return Object(r.Y)()?h.ibi=l.packageName:Object(r.Z)()?h.apn=l.packageName:Object(r.ab)(e,"operation-not-supported-in-this-environment"),l.displayName&&(h.appDisplayName=l.displayName),h.sessionId=c,Object(r.bb)(e,n,t.type,void 0,null!==(o=t.eventId)&&void 0!==o?o:void 0,h)}class c extends r.F{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function h(e){const t=await m()._get(_(e));return t&&await m()._remove(_(e)),t}function f(e,t){var n,o;const d=function(e){const t=I(e),link=t.link?decodeURIComponent(t.link):void 0,n=I(link).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return I(r).link||r||n||link||e}(t);if(d.includes("/__/auth/callback")){const t=I(d),l=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,code=null===(o=null===(n=null==l?void 0:l.code)||void 0===n?void 0:n.split("auth/"))||void 0===o?void 0:o[1],c=code?Object(r.db)(code):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:d,postBody:null}}return null}function v(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<20;i++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function m(){return Object(r.fb)(r.hb)}function _(e){return Object(r.gb)("authEvent",e.config.apiKey,e.name)}function I(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(o.z)(n.join("?"))}const y=class{constructor(){this._redirectPersistence=r.u,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.G,this._overrideRedirectResult=r.H}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new c(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Object(r.ab)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,o){!function(e){var t,n,o,l,c,h,f,v,m,_;const I=d();Object(r.eb)("function"==typeof(null===(t=null==I?void 0:I.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Object(r.eb)(void 0!==(null===(n=null==I?void 0:I.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Object(r.eb)("function"==typeof(null===(c=null===(l=null===(o=null==I?void 0:I.cordova)||void 0===o?void 0:o.plugins)||void 0===l?void 0:l.browsertab)||void 0===c?void 0:c.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r.eb)("function"==typeof(null===(v=null===(f=null===(h=null==I?void 0:I.cordova)||void 0===h?void 0:h.plugins)||void 0===f?void 0:f.browsertab)||void 0===v?void 0:v.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Object(r.eb)("function"==typeof(null===(_=null===(m=null==I?void 0:I.cordova)||void 0===m?void 0:m.InAppBrowser)||void 0===_?void 0:_.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),Object(r.I)(),await this._originValidation(e);const h=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:v(),postBody:null,tenantId:e.tenantId,error:Object(r.db)(e,"no-auth-event")}}(e,n,o);await function(e,t){return m()._set(_(e),t)}(e,h);const f=await l(e,h,t);return async function(e,t,n){const{cordova:o}=d();let l=()=>{};try{await new Promise(((d,c)=>{let h=null;function f(){var e;d();const t=null===(e=o.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function v(){h||(h=window.setTimeout((()=>{c(Object(r.db)(e,"redirect-cancelled-by-user"))}),2e3))}function m(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&v()}t.addPassiveListener(f),document.addEventListener("resume",v,!1),Object(r.Z)()&&document.addEventListener("visibilitychange",m,!1),l=()=>{t.removePassiveListener(f),document.removeEventListener("resume",v,!1),document.removeEventListener("visibilitychange",m,!1),h&&window.clearTimeout(h)}}))}finally{l()}}(e,c,await function(e){const{cordova:t}=d();return new Promise((n=>{t.plugins.browsertab.isAvailable((o=>{let d=null;o?t.plugins.browsertab.openUrl(e):d=t.InAppBrowser.open(e,Object(r.W)()?"_blank":"_system","location=yes"),n(d)}))}))}(f))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=d(),n={};Object(r.Y)()?n.iosBundleId=t.packageName:Object(r.Z)()?n.androidPackageName=t.packageName:Object(r.ab)(e,"operation-not-supported-in-this-environment"),await Object(r.cb)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:o}=d(),l=setTimeout((async()=>{await h(e),t.onEvent(w())}),500),c=async n=>{clearTimeout(l);const r=await h(e);let o=null;r&&(null==n?void 0:n.url)&&(o=f(r,n.url)),t.onEvent(o||w())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,c);const v=r,m=`${o.packageName.toLowerCase()}://`;d().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(m)&&c({url:e}),"function"==typeof v)try{v(e)}catch(e){console.error(e)}}}};function w(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Object(r.db)("no-auth-event")}}function E(e,t){Object(r.J)(e)._logFramework(t)}},314:function(e,t,n){"use strict";n.r(t);n(311)}}]);