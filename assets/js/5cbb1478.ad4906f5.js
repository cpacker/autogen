"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(d,s(s({ref:t},m),{},{components:n})):a.createElement(d,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7830:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"assistant_agent",title:"agentchat.assistant_agent"},s=void 0,o={unversionedId:"reference/agentchat/assistant_agent",id:"reference/agentchat/assistant_agent",isDocsHomePage:!1,title:"agentchat.assistant_agent",description:"AssistantAgent Objects",source:"@site/docs/reference/agentchat/assistant_agent.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/assistant_agent",permalink:"/docs/reference/agentchat/assistant_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/assistant_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"assistant_agent",title:"agentchat.assistant_agent"},sidebar:"referenceSideBar",previous:{title:"agent",permalink:"/docs/reference/agentchat/agent"},next:{title:"conversable_agent",permalink:"/docs/reference/agentchat/conversable_agent"}},l=[{value:"AssistantAgent Objects",id:"assistantagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4}],level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"assistantagent-objects"},"AssistantAgent Objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class AssistantAgent(ConversableAgent)\n")),(0,r.kt)("p",null,"(In preview) Assistant agent, designed to solve a task with LLM."),(0,r.kt)("p",null,"AssistantAgent is a subclass of ConversableAgent configured with a default system message.\nThe default system message is designed to solve a task with LLM,\nincluding suggesting python code blocks and debugging.\n",(0,r.kt)("inlineCode",{parentName:"p"},"human_input_mode"),' is default to "NEVER"\nand ',(0,r.kt)("inlineCode",{parentName:"p"},"code_execution_config")," is default to False.\nThis agent doesn't execute code by default, and expects the user to execute the code."),(0,r.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name: str,\n             system_message: Optional[str] = DEFAULT_SYSTEM_MESSAGE,\n             llm_config: Optional[Union[Dict, bool]] = None,\n             is_termination_msg: Optional[Callable[[Dict], bool]] = None,\n             max_consecutive_auto_reply: Optional[int] = None,\n             human_input_mode: Optional[str] = "NEVER",\n             code_execution_config: Optional[Union[Dict, bool]] = False,\n             **kwargs)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ",(0,r.kt)("em",{parentName:"li"},"str")," - agent name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"system_message")," ",(0,r.kt)("em",{parentName:"li"},"str")," - system message for the ChatCompletion inference.\nPlease override this attribute if you want to reprogram the agent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"llm_config")," ",(0,r.kt)("em",{parentName:"li"},"dict")," - llm inference configuration.\nPlease refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/oai/completion#create"},"Completion.create"),"\nfor available options."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,r.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_consecutive_auto_reply")," ",(0,r.kt)("em",{parentName:"li"},"int"),' - the maximum number of consecutive auto replies.\ndefault to None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).\nThe limit only plays a role when human_input_mode is not "ALWAYS".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs")," ",(0,r.kt)("em",{parentName:"li"},"dict")," - Please refer to other kwargs in\n",(0,r.kt)("a",{parentName:"li",href:"conversable_agent#__init__"},"ConversableAgent"),".")))}m.isMDXComponent=!0}}]);