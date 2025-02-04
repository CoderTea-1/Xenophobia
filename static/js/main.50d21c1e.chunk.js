(this["webpackJsonpimplicit-bias"]=this["webpackJsonpimplicit-bias"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(11),l=a(8),c=a(12),o=a(7),i=a(2);var u=[{id:"power-happiness",name:"African test",description:"",targetType:"nationality",categoryType:"type of person",compatible:{south_african:"good_person",foreigner:"bad_person"}}];function m(){return s.a.createElement("div",null,s.a.createElement("h4",{class:"header center red-text text-darken-4"},"Pick an implicit association test to take:"),s.a.createElement("section",{className:"test-list"},u.map(e=>{let{name:t,description:a,id:r}=e;return s.a.createElement("div",{className:"test-option",key:r},s.a.createElement("h4",{class:"header center grey-text"},s.a.createElement(o.b,{to:"/test/".concat(r)},t)),s.a.createElement("p",{class:"center"},a))})))}function d(){return s.a.createElement("div",null,s.a.createElement("h1",{class:"header center red-text text-darken-4"},"Implicit Association Tool"),s.a.createElement("div",{class:"row center"},s.a.createElement("h5",{class:"header col s12 light"},s.a.createElement("p",null,"Uncover and discuss the underlying biases we share."))),s.a.createElement("div",{class:"divider"}),s.a.createElement(m,null))}function h(){return s.a.createElement("div",null,s.a.createElement("h2",null,"About"),s.a.createElement("p",null,"This is a tool to roughly measure implicit association bias."))}function p(){return s.a.createElement("div",{className:"error"},s.a.createElement("h2",null,"Test error"),s.a.createElement("div",null,"Apologies, we encountered an unexpected error. Please try returning to the ",s.a.createElement(o.b,{to:"/home"},"home page"),"."))}const g={INCOMPATIBLE_TARGETS_ONLY:"INCOMPATIBLE_TARGETS_ONLY",INCOMPATIBLE_ALL:"INCOMPATIBLE_ALL",CATEGORIES_ONLY:"CATEGORIES_ONLY",COMPATIBLE_TARGETS_ONLY:"COMPATIBLE_TARGETS_ONLY",COMPATIBLE_ALL:"COMPATIBLE_ALL"};var E=g;var T=[{numTrials:10,displayType:E.INCOMPATIBLE_TARGETS_ONLY},{numTrials:10,displayType:E.CATEGORIES_ONLY},{numTrials:10,displayType:E.INCOMPATIBLE_ALL},{numTrials:20,displayType:E.INCOMPATIBLE_ALL,critical:!0},{numTrials:10,displayType:E.COMPATIBLE_TARGETS_ONLY},{numTrials:10,displayType:E.COMPATIBLE_ALL},{numTrials:20,displayType:E.COMPATIBLE_ALL,critical:!0}];const y=e=>{switch(e){case"E":return"e";case"I":return"i";case"space bar":return" ";default:return null}};var f={LEFT:"E",RIGHT:"I",START_KEY:"space bar"};var b={south_african:["white south africans","black south africans","umzulu","afrikaner","motswana","sotho","umlungu","colored  south africans","malay","umxhosa"],foreigner:["bangladeshi","british","congolese","kenyans","indian","italian","mozambican","nigerians","somalians","zimbabweans"],good_person:["job-promoter","doctor","lawyer","good-samaritan","philanthropist","police officer","humanitarian","hard-working","polite","peaceful"],bad_person:["job-stealer","murderer","rapist","troubled","burglarer","drug-trafficker","fraudster","lazy","rude","aggressive"]};const I=e=>e?e.split(/[ _]/).map(e=>e.charAt(0).toUpperCase()+e.substring(1)).reduce((e,t)=>e?"".concat(e," ").concat(t):t,""):e,O="target",L="category",C="LEFT",N="RIGHT",k=[O,L],v=[C,N];class S extends s.a.Component{constructor(){super(),this.valuesForOptions=(e,t)=>e===O?t===C?this.props.leftTargetValues:this.props.rightTargetValues:t===C?this.props.leftCategoryValues:this.props.rightCategoryValues,this.startNewRound=()=>{const e=this.state.currentRound+1;if(e>=this.props.currentBlock.numTrials)return this.props.dispatchFinishBlock();const t=this.props.soleTargetOrCategory?this.props.soleTargetOrCategory:k[e%2],a=v[Math.round(Math.random())],r=this.valuesForOptions(t,a).filter(e=>-1===[this.state.valueToDisplay,this.state.lastValueToDisplay].indexOf(e)),s=r[Math.floor(Math.random()*Math.floor(r.length-1))];return this.setState({currentRound:e,targetOrCategory:t,leftOrRight:a,valueToDisplay:s,lastValueToDisplay:this.state.valueToDisplay,incorrectKeyPressed:!1})},this.handleKeyPress=e=>{switch(e.key){case y(f.LEFT):return this.handleLeftKeyPress();case y(f.RIGHT):return this.handleRightKeyPress();default:return}},this.handleLeftKeyPress=()=>{if(this.state.leftOrRight===C)return this.startNewRound();this.state.leftOrRight===N&&this.displayIncorrectKeySign()},this.handleRightKeyPress=()=>{if(this.state.leftOrRight===N)return this.startNewRound();this.state.leftOrRight===C&&this.displayIncorrectKeySign()},this.displayIncorrectKeySign=()=>{this.setState({incorrectKeyPressed:!0})},this.state={currentRound:-1}}componentDidMount(){this.props.currentBlock&&this.props.currentBlock.critical&&this.setState({timeStarted:Date.now()}),document.addEventListener("keyup",this.handleKeyPress),this.startNewRound()}componentWillUnmount(){if(document.removeEventListener("keyup",this.handleKeyPress),this.props.currentBlock.critical){const e=Date.now()-this.state.timeStarted;this.props.currentBlock.displayType===E.COMPATIBLE_ALL?this.props.dispatchSetCompatibleMilliseconds(e):this.props.dispatchSetIncompatibleMilliseconds(e)}this.props.currentTest.currentBlockIndex===T.length-1&&this.props.dispatchFinishTest()}render(){const{currentBlock:e}=this.props,{valueToDisplay:t,targetOrCategory:a,incorrectKeyPressed:r}=this.state;return e?s.a.createElement("div",null,s.a.createElement("div",{className:"displayed-test-value ".concat(a)},I(t)),s.a.createElement("div",{className:"incorrect-key-x"},r&&"X"),s.a.createElement("p",null,"If you make a mistake, a red ",s.a.createElement("span",{className:"bold-red"},"X")," will appear. Press the other key to continue.")):s.a.createElement(p,null)}}const A=(e,t)=>e&&!t?O:!e&&t?L:null;var B=Object(l.b)((e,t)=>{let{currentTest:a}=e,{leftTarget:r,leftCategory:s,rightTarget:n,rightCategory:l}=t;return{currentTest:a,currentBlock:T[a.currentBlockIndex],leftTargetValues:r?b[r]:null,rightTargetValues:n?b[n]:null,leftCategoryValues:s?b[s]:null,rightCategoryValues:l?b[l]:null,soleTargetOrCategory:A(r,s)}},e=>({dispatchFinishBlock:()=>e({type:"FINISH_BLOCK"}),dispatchFinishTest:()=>e({type:"FINISH_TEST"}),dispatchSetCompatibleMilliseconds:t=>e({type:"SET_COMPATIBLE_MILLISECONDS",compatibleMilliseconds:t}),dispatchSetIncompatibleMilliseconds:t=>e({type:"SET_INCOMPATIBLE_MILLISECONDS",incompatibleMilliseconds:t})}))(S);const _=(e,t,a,r)=>{const n=!!t&&!a,l=r?f.LEFT:f.RIGHT,c=r?"left":"right";if(n||!t&&!!a){const r=n?"target":"category",o=n?t:a,i=s.a.createElement("span",{className:r},o);return e<2?s.a.createElement("p",null,"Put a ",c," finger on the ",s.a.createElement("a",{class:"btn disabled"},s.a.createElement("strong",null,l))," key for items that belong to the category ",i,"."):s.a.createElement("p",null,"Use the ",s.a.createElement("a",{class:"btn disabled"},s.a.createElement("strong",null,l)," "),"key for ",i)}return s.a.createElement("p",null,"Use the",s.a.createElement("a",{class:"btn disabled"}," ",s.a.createElement("strong",null,l)," "),"key for ",s.a.createElement("span",{className:"target"},t)," and for ",s.a.createElement("span",{className:"category"},a),".")};function M(e){let{currentBlockIndex:t,leftTarget:a,leftCategory:r,rightTarget:n,rightCategory:l}=e;const c=_(t,I(a),I(r),!0),o=_(t,I(n),I(l),!1),i=((e,t)=>0===e?s.a.createElement("p",null,"Items will appear one at a time."):t?s.a.createElement("p",null,"'Each item belongs to only one category."):null)(t,a&&r);return s.a.createElement("div",null,c,o,!!i&&i,s.a.createElement("p",null,"If you make a mistake, a red ",s.a.createElement("span",{className:"bold-red"},"X")," will appear. Press the other key to continue."),s.a.createElement("p",null,"Go as fast as you can while being accurate."),s.a.createElement("div",{class:"divider"}),s.a.createElement("h4",{class:"header center red-text text-darken-4"},"Ready?"),s.a.createElement("div",{class:"row center"},s.a.createElement("h5",null," ",s.a.createElement("p",null,"Press the ",s.a.createElement("a",{class:"btn disabled"}," ",s.a.createElement("strong",null,f.START_KEY))," when you are ready to start."))))}class P extends r.Component{constructor(){super(...arguments),this.handleKeyPress=e=>{e.key===y(f.START_KEY)&&this.props.startBlock()}}componentDidMount(){document.addEventListener("keyup",this.handleKeyPress)}componentWillUnmount(){document.removeEventListener("keyup",this.handleKeyPress)}render(){const{currentBlockIndex:e,leftTarget:t,rightTarget:a,leftCategory:r,rightCategory:n}=this.props,l=e+1,c=Object.keys(T).length;return s.a.createElement("div",{className:"block-pre-test"},s.a.createElement("h3",{class:"header center red-text text-darken-4"},"Part ",l," of ",c),s.a.createElement("div",{class:"center"},s.a.createElement(M,{currentBlockIndex:e,leftTarget:t,rightTarget:a,leftCategory:r,rightCategory:n})))}}function R(e){let{target:t,category:a}=e;return s.a.createElement("div",{className:"target-and-or-category"},!!t&&s.a.createElement("div",{className:"target"},I(t)),!!t&&!!a&&s.a.createElement("div",{className:"or-separator"},"or"),!!a&&s.a.createElement("div",{className:"category"},I(a)))}var w=Object(l.b)(e=>{let{currentTest:t}=e;return{currentTest:t}},e=>({dispatchStartBlock:()=>e({type:"START_BLOCK"})}))(e=>{let{test:t,currentTest:a,dispatchStartBlock:r}=e;const n=T[a.currentBlockIndex];if(!n)return s.a.createElement(p,null);const{displayType:l}=n,{leftTarget:c,rightTarget:o,leftCategory:i,rightCategory:u}=function(e,t){const a={leftTarget:null,rightTarget:null,leftCategory:null,rightCategory:null},r=Object.keys(t),s=r.slice().reverse(),n=Object.values(t);switch(e){case g.CATEGORIES_ONLY:return Object.assign(a,{leftCategory:n[0],rightCategory:n[1]});case g.COMPATIBLE_ALL:return Object.assign(a,{leftTarget:r[0],rightTarget:r[1],leftCategory:n[0],rightCategory:n[1]});case g.COMPATIBLE_TARGETS_ONLY:return Object.assign(a,{leftTarget:r[0],rightTarget:r[1]});case g.INCOMPATIBLE_ALL:return Object.assign(a,{leftTarget:s[0],rightTarget:s[1],leftCategory:n[0],rightCategory:n[1]});case g.INCOMPATIBLE_TARGETS_ONLY:return Object.assign(a,{leftTarget:s[0],rightTarget:s[1]});default:return a}}(l,t.compatible);return s.a.createElement("div",{className:"test-block"},s.a.createElement("section",{className:"selection-groups"},s.a.createElement("div",{className:"left-selection-group"},s.a.createElement("h6",null,'Press "',f.LEFT,'" for'),s.a.createElement(R,{target:c,category:i})),s.a.createElement("div",{className:"right-selection-group"},s.a.createElement("h6",null,'Press "',f.RIGHT,'" for'),s.a.createElement(R,{target:o,category:u}))),a.blockStarted?s.a.createElement(B,{currentTest:a,leftTarget:c,rightTarget:o,leftCategory:i,rightCategory:u}):s.a.createElement(P,{currentBlockIndex:a.currentBlockIndex,leftTarget:c,rightTarget:o,leftCategory:i,rightCategory:u,startBlock:()=>r()}))});var x={NONE:"NO_BIAS",COMPATIBLE:"COMPATIBLE",INCOMPATIBLE:"INCOMPATIBLE"};class j extends r.Component{componentWillUnmount(){this.props.dispatchResetTest()}render(){const{test:e,currentTest:t}=this.props,{incompatibleMilliseconds:a,compatibleMilliseconds:r}=t,n=((e,t)=>{const{targetType:a,categoryType:r,compatible:n}=t,l=Object.keys(n),c=Object.values(n),o=c[0],i=c[1];switch(e){case x.NONE:return s.a.createElement("p",{className:"result-headline"},"Your responses suggest no automatic association between ",s.a.createElement("span",{className:"target"},a)," and ",s.a.createElement("span",{className:"category"},r),".");case x.COMPATIBLE:return s.a.createElement("h4",{className:"result-headline"},"Your responses suggest an automatic association for ",s.a.createElement("span",{className:"target"},I(l[0]))," with ",s.a.createElement("span",{className:"category"},I(o))," and ",s.a.createElement("span",{className:"target"},I(l[1]))," with ",s.a.createElement("span",{className:"category"},I(i)),".");case x.INCOMPATIBLE:const e=l.slice().reverse();return s.a.createElement("h4",{className:"result-headline"},"Your responses suggest an automatic association for ",s.a.createElement("span",{className:"target"},I(e[0]))," with ",s.a.createElement("span",{className:"category"},I(o))," and ",s.a.createElement("span",{className:"target"},I(e[1]))," with ",s.a.createElement("span",{className:"category"},I(i)),".");default:return"We were unable to calculate your results due to an unexpected error."}})(((e,t)=>{const a=e-t;return Math.abs(a)<=1e3?x.NONE:a>0?x.COMPATIBLE:x.INCOMPATIBLE})(a,r),e);return s.a.createElement("div",null,s.a.createElement("h2",null,"Results"),n,s.a.createElement("p",null,"More info about results to come..."),s.a.createElement(o.b,{to:"/home"},"Back to home"))}}var K=Object(l.b)(()=>({}),e=>({dispatchResetTest:()=>e({type:"RESET_TEST"})}))(j);function Y(){return s.a.createElement("div",{className:"test-not-found"},s.a.createElement("h2",null,"Test not found"),s.a.createElement("p",null,"We could not find a test with that id. You can find our full lists of tests at the ",s.a.createElement(o.b,{to:"/home"},"home page"),"."))}function G(e){let{test:t,onStartTestButtonPress:a}=e;return s.a.createElement("div",null,s.a.createElement("h2",null,"Welcome"),s.a.createElement("p",null,"You have selected the ",t.name)," test. You will be asked to sort words into groups as quickly as you can.",s.a.createElement("button",{className:"implicit-test-start-button",type:"button",onClick:e=>e.preventDefault()&&a()},"Start test"))}a(29);var D=Object(l.b)(e=>{let{currentTest:t}=e;return{currentTest:t}},e=>({dispatchStartTest:t=>e((e=>({type:"START_TEST",test:e}))(t))}))(e=>{let{currentTest:t,dispatchStartTest:a}=e;const{testId:r}=Object(i.f)(),n=u.find(e=>e.id===r);return n?t?t.finished?s.a.createElement(K,{test:n,currentTest:t}):s.a.createElement(w,{test:n,currentTest:t}):s.a.createElement(G,{test:n,onStartTestButtonPress:()=>a(n)}):s.a.createElement(Y,null)});function F(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"nav-and-content"},s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/test/:testId"},s.a.createElement(D,null)),s.a.createElement(i.a,{path:"/about"},s.a.createElement(h,null)),s.a.createElement(i.a,{path:"/"},s.a.createElement(d,null)))))}const V={blockStarted:!1,finished:!1,currentBlockIndex:0,test:null,compatibleMilliseconds:null,incompatibleMilliseconds:null};var H=Object(c.a)({currentTest:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_TEST":return Object.assign({},e,{test:t.test,currentBlockIndex:0});case"START_BLOCK":return Object.assign({},e,{blockStarted:!0});case"FINISH_BLOCK":return Object.assign({},e,{currentBlockIndex:e.currentBlockIndex+1,blockStarted:!1});case"SET_COMPATIBLE_MILLISECONDS":return Object.assign({},e,{compatibleMilliseconds:t.compatibleMilliseconds});case"SET_INCOMPATIBLE_MILLISECONDS":return Object.assign({},e,{incompatibleMilliseconds:t.incompatibleMilliseconds});case"FINISH_TEST":return Object.assign({},e,{finished:!0,blockStarted:!1});case"RESET_TEST":return V;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);const W=Object(c.b)(H);Object(n.render)(s.a.createElement(l.a,{store:W},s.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.50d21c1e.chunk.js.map