"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7474:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={},r="Enhanced Inference",s={unversionedId:"Use-Cases/enhanced_inference",id:"Use-Cases/enhanced_inference",isDocsHomePage:!1,title:"Enhanced Inference",description:"autogen.Completion is a drop-in replacement of openai.Completion and openai.ChatCompletion as an enhanced inference API.",source:"@site/docs/Use-Cases/enhanced_inference.md",sourceDirName:"Use-Cases",slug:"/Use-Cases/enhanced_inference",permalink:"/docs/Use-Cases/enhanced_inference",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Use-Cases/enhanced_inference.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Multi-agent Conversation Framework",permalink:"/docs/Use-Cases/agent_chat"},next:{title:"AutoGen - Automated Multi Agent Chat",permalink:"/docs/Examples/AutoGen-AgentChat"}},l=[{value:"Tune Inference Parameters",id:"tune-inference-parameters",children:[{value:"Choices to optimize",id:"choices-to-optimize",children:[],level:3},{value:"Validation data",id:"validation-data",children:[],level:3},{value:"Evaluation function",id:"evaluation-function",children:[],level:3},{value:"Metric to optimize",id:"metric-to-optimize",children:[],level:3},{value:"Search space",id:"search-space",children:[],level:3},{value:"Budgets",id:"budgets",children:[],level:3},{value:"Perform tuning",id:"perform-tuning",children:[],level:3}],level:2},{value:"API unification",id:"api-unification",children:[],level:2},{value:"Caching",id:"caching",children:[],level:2},{value:"Error handling",id:"error-handling",children:[{value:"Runtime error",id:"runtime-error",children:[],level:3},{value:"Logic error",id:"logic-error",children:[],level:3}],level:2},{value:"Templating",id:"templating",children:[],level:2},{value:"Logging (Experimental)",id:"logging-experimental",children:[],level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enhanced-inference"},"Enhanced Inference"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion")," is a drop-in replacement of ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion")," as an enhanced inference API.\nThere are a number of benefits of using ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen")," to perform inference: performance tuning, API unification, caching, error handling, multi-config inference, result filtering, templating and so on."),(0,o.kt)("h2",{id:"tune-inference-parameters"},"Tune Inference Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Links to notebook examples:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_completion.ipynb"},"Optimize for Code Generation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_chatgpt_gpt4.ipynb"},"Optimize for Math"))),(0,o.kt)("h3",{id:"choices-to-optimize"},"Choices to optimize"),(0,o.kt)("p",null,"The cost of using foundation models for text generation is typically measured in terms of the number of tokens in the input and output combined. From the perspective of an application builder using foundation models, the use case is to maximize the utility of the generated text under an inference budget constraint (e.g., measured by the average dollar cost needed to solve a coding problem). This can be achieved by optimizing the hyperparameters of the inference,\nwhich can significantly affect both the utility and the cost of the generated text."),(0,o.kt)("p",null,"The tunable hyperparameters include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"model - this is a required input, specifying the model ID to use."),(0,o.kt)("li",{parentName:"ol"},"prompt/messages - the input prompt/messages to the model, which provides the context for the text generation task."),(0,o.kt)("li",{parentName:"ol"},"max_tokens - the maximum number of tokens (words or word pieces) to generate in the output."),(0,o.kt)("li",{parentName:"ol"},"temperature - a value between 0 and 1 that controls the randomness of the generated text. A higher temperature will result in more random and diverse text, while a lower temperature will result in more predictable text."),(0,o.kt)("li",{parentName:"ol"},"top_p - a value between 0 and 1 that controls the sampling probability mass for each token generation. A lower top_p value will make it more likely to generate text based on the most likely tokens, while a higher value will allow the model to explore a wider range of possible tokens."),(0,o.kt)("li",{parentName:"ol"},"n - the number of responses to generate for a given prompt. Generating multiple responses can provide more diverse and potentially more useful output, but it also increases the cost of the request."),(0,o.kt)("li",{parentName:"ol"},"stop - a list of strings that, when encountered in the generated text, will cause the generation to stop. This can be used to control the length or the validity of the output."),(0,o.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty - values that control the relative importance of the presence and frequency of certain words or phrases in the generated text."),(0,o.kt)("li",{parentName:"ol"},'best_of - the number of responses to generate server-side when selecting the "best" (the one with the highest log probability per token) response for a given prompt.')),(0,o.kt)("p",null,"The cost and utility of text generation are intertwined with the joint effect of these hyperparameters.\nThere are also complex interactions among subsets of the hyperparameters. For example,\nthe temperature and top_p are not recommended to be altered from their default values together because they both control the randomness of the generated text, and changing both at the same time can result in conflicting effects; n and best_of are rarely tuned together because if the application can process multiple outputs, filtering on the server side causes unnecessary information loss; both n and max_tokens will affect the total number of tokens generated, which in turn will affect the cost of the request.\nThese interactions and trade-offs make it difficult to manually determine the optimal hyperparameter settings for a given text generation task."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Do the choices matter? Check this ",(0,o.kt)("a",{parentName:"em",href:"/blog/2023/04/21/LLM-tuning-math"},"blogpost")," to find example tuning results about gpt-3.5-turbo and gpt-4.")),(0,o.kt)("p",null,"With AutoGen, the tuning can be performed with the following information:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Validation data."),(0,o.kt)("li",{parentName:"ol"},"Evaluation function."),(0,o.kt)("li",{parentName:"ol"},"Metric to optimize."),(0,o.kt)("li",{parentName:"ol"},"Search space."),(0,o.kt)("li",{parentName:"ol"},"Budgets: inference and optimization respectively.")),(0,o.kt)("h3",{id:"validation-data"},"Validation data"),(0,o.kt)("p",null,'Collect a diverse set of instances. They can be stored in an iterable of dicts. For example, each instance dict can contain "problem" as a key and the description str of a math problem as the value; and "solution" as a key and the solution str as the value.'),(0,o.kt)("h3",{id:"evaluation-function"},"Evaluation function"),(0,o.kt)("p",null,"The evaluation function should take a list of responses, and other keyword arguments corresponding to the keys in each validation data instance as input, and output a dict of metrics. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def eval_math_responses(responses: List[str], solution: str, **args) -> Dict:\n    # select a response from the list of responses\n    answer = voted_answer(responses)\n    # check whether the answer is correct\n    return {"success": is_equivalent(answer, solution)}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.code_utils")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.math_utils")," offer some example evaluation functions for code generation and math problem solving."),(0,o.kt)("h3",{id:"metric-to-optimize"},"Metric to optimize"),(0,o.kt)("p",null,'The metric to optimize is usually an aggregated metric over all the tuning data instances. For example, users can specify "success" as the metric and "max" as the optimization mode. By default, the aggregation function is taking the average. Users can provide a customized aggregation function if needed.'),(0,o.kt)("h3",{id:"search-space"},"Search space"),(0,o.kt)("p",null,"Users can specify the (optional) search range for each hyperparameter."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"model. Either a constant str, or multiple choices specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.choice"),"."),(0,o.kt)("li",{parentName:"ol"},'prompt/messages. Prompt is either a str or a list of strs, of the prompt templates. messages is a list of dicts or a list of lists, of the message templates.\nEach prompt/message template will be formatted with each data instance. For example, the prompt template can be:\n"{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in ',"\\",'boxed{{}}."\nAnd ',(0,o.kt)("inlineCode",{parentName:"li"},"{problem}"),' will be replaced by the "problem" field of each data instance.'),(0,o.kt)("li",{parentName:"ol"},"max_tokens, n, best_of. They can be constants, or specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.randint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.qrandint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.lograndint")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.qlograndint"),". By default, max_tokens is searched in [50, 1000); n is searched in [1, 100); and best_of is fixed to 1."),(0,o.kt)("li",{parentName:"ol"},"stop. It can be a str or a list of strs, or a list of lists of strs or None. Default is None."),(0,o.kt)("li",{parentName:"ol"},"temperature or top_p. One of them can be specified as a constant or by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.loguniform")," etc.\nPlease don't provide both. By default, each configuration will choose either a temperature or a top_p in ","[0, 1]"," uniformly."),(0,o.kt)("li",{parentName:"ol"},"presence_penalty, frequency_penalty. They can be constants or specified by ",(0,o.kt)("inlineCode",{parentName:"li"},"flaml.tune.uniform")," etc. Not tuned by default.")),(0,o.kt)("h3",{id:"budgets"},"Budgets"),(0,o.kt)("p",null,"One can specify an inference budget and an optimization budget.\nThe inference budget refers to the average inference cost per data instance.\nThe optimization budget refers to the total budget allowed in the tuning process. Both are measured by dollars and follow the price per 1000 tokens."),(0,o.kt)("h3",{id:"perform-tuning"},"Perform tuning"),(0,o.kt)("p",null,"Now, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.tune")," for tuning. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import autogen\n\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"num_samples")," is the number of configurations to sample. -1 means unlimited (until optimization budget is exhausted).\nThe returned ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," contains the optimized configuration and ",(0,o.kt)("inlineCode",{parentName:"p"},"analysis")," contains an ExperimentAnalysis object for all the tried configurations and results."),(0,o.kt)("p",null,"The tuend config can be used to perform inference."),(0,o.kt)("h2",{id:"api-unification"},"API unification"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.create")," is compatible with both ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.Completion.create")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"openai.ChatCompletion.create"),', and both OpenAI API and Azure OpenAI API. So models such as "text-davinci-003", "gpt-3.5-turbo" and "gpt-4" can share a common API.\nWhen chat models are used and ',(0,o.kt)("inlineCode",{parentName:"p"},"prompt")," is given as the input to ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.create"),", the prompt will be automatically converted into ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," to fit the chat completion API requirement. One advantage is that one can experiment with both chat and non-chat models for the same prompt in a unified API."),(0,o.kt)("p",null,"For local LLMs, one can spin up an endpoint using a package like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lm-sys/FastChat"},"FastChat"),", and then use the same API to send a request. See ",(0,o.kt)("a",{parentName:"p",href:"/blog/2023/07/14/Local-LLMs"},"here")," for examples on how to make inference with local LLMs."),(0,o.kt)("p",null,"When only working with the chat-based models, ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.ChatCompletion")," can be used. It also does automatic conversion from prompt to messages, if prompt is provided instead of messages."),(0,o.kt)("h2",{id:"caching"},"Caching"),(0,o.kt)("p",null,'API call results are cached locally and reused when the same request is issued. This is useful when repeating or continuing experiments for reproducibility and cost saving. It still allows controlled randomness by setting the "seed", using ',(0,o.kt)("inlineCode",{parentName:"p"},"set_cache")," or specifying in ",(0,o.kt)("inlineCode",{parentName:"p"},"create()"),"."),(0,o.kt)("h2",{id:"error-handling"},"Error handling"),(0,o.kt)("h3",{id:"runtime-error"},"Runtime error"),(0,o.kt)("p",null,"It is easy to hit error when calling OpenAI APIs, due to connection, rate limit, or timeout. Some of the errors are transient. ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.create")," deals with the transient errors and retries automatically. Initial request timeout, retry timeout and retry time interval can be configured via ",(0,o.kt)("inlineCode",{parentName:"p"},"request_timeout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"retry_timeout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion.retry_time"),"."),(0,o.kt)("p",null,"Moreover, one can pass a list of configurations of different models/endpoints to mitigate the rate limits. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'response = autogen.Completion.create(\n    config_list=[\n        {\n            "model": "gpt-4",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "api_base": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2023-06-01-preview",\n        },\n        {\n            "model": "gpt-3.5-turbo",\n            "api_key": os.environ.get("OPENAI_API_KEY"),\n            "api_type": "open_ai",\n            "api_base": "https://api.openai.com/v1",\n            "api_version": None,\n        },\n        {\n            "model": "llama-7B",\n            "api_base": "http://127.0.0.1:8080",\n            "api_type": "open_ai",\n            "api_version": None,\n        }\n    ],\n    prompt="Hi",\n)\n')),(0,o.kt)("p",null,"It will try querying Azure OpenAI gpt-4, OpenAI gpt-3.5-turbo, and a locally hosted llama-7B one by one, ignoring AuthenticationError, RateLimitError and Timeout,\nuntil a valid result is returned. This can speed up the development process where the rate limit is a bottleneck. An error will be raised if the last choice fails. So make sure the last choice in the list has the best availability."),(0,o.kt)("p",null,"For convenience, we provide a number of utility functions to load config lists, such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/oai/openai_utils#config_list_from_json"},(0,o.kt)("inlineCode",{parentName:"a"},"config_list_from_json")),"."),(0,o.kt)("h3",{id:"logic-error"},"Logic error"),(0,o.kt)("p",null,"Another type of error is that the returned response does not satisfy a requirement. For example, if the response is required to be a valid json string, one would like to filter the responses that are not. This can be achieved by providing a list of configurations and a filter function. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def valid_json_filter(context, config, response):\n    for text in autogen.Completion.extract_text(response):\n        try:\n            json.loads(text)\n            return True\n        except ValueError:\n            pass\n    return False\n\nresponse = autogen.Completion.create(\n    config_list=[{"model": "text-ada-001"}, {"model": "gpt-3.5-turbo"}, {"model": "text-davinci-003"}],\n    prompt="How to construct a json request to Bing API to search for \'latest AI news\'? Return the JSON request.",\n    filter_func=valid_json_filter,\n)\n')),(0,o.kt)("p",null,"The example above will try to use text-ada-001, gpt-3.5-turbo, and text-davinci-003 iteratively, until a valid json string is returned or the last config is used. One can also repeat the same model in the list for multiple times to try one model multiple times for increasing the robustness of the final response."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Advanced use case: Check this ",(0,o.kt)("a",{parentName:"em",href:"/blog/2023/05/18/GPT-adaptive-humaneval"},"blogpost")," to find how to improve GPT-4's coding performance from 68% to 90% while reducing the inference cost.")),(0,o.kt)("h2",{id:"templating"},"Templating"),(0,o.kt)("p",null,"If the provided prompt or message is a template, it will be automatically materialized with a given context. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'response = autogen.Completion.create(\n    context={"problem": "How many positive integers, not exceeding 100, are multiples of 2 or 3 but not 4?"},\n    prompt="{problem} Solve the problem carefully.",\n    allow_format_str_template=True,\n    **config\n)\n')),(0,o.kt)("p",null,"A template is either a format str, like the example above, or a function which produces a str from several input fields, like the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def content(turn, context):\n    return "\\n".join(\n        [\n            context[f"user_message_{turn}"],\n            context[f"external_info_{turn}"]\n        ]\n    )\n\nmessages = [\n    {\n        "role": "system",\n        "content": "You are a teaching assistant of math.",\n    },\n    {\n        "role": "user",\n        "content": partial(content, turn=0),\n    },\n]\ncontext = {\n    "user_message_0": "Could you explain the solution to Problem 1?",\n    "external_info_0": "Problem 1: ...",\n}\n\nresponse = autogen.ChatCompletion.create(context, messages=messages, **config)\nmessages.append(\n    {\n        "role": "assistant",\n        "content": autogen.ChatCompletion.extract_text(response)[0]\n    }\n)\nmessages.append(\n    {\n        "role": "user",\n        "content": partial(content, turn=1),\n    },\n)\ncontext.append(\n    {\n        "user_message_1": "Why can\'t we apply Theorem 1 to Equation (2)?",\n        "external_info_1": "Theorem 1: ...",\n    }\n)\nresponse = autogen.ChatCompletion.create(context, messages=messages, **config)\n')),(0,o.kt)("h2",{id:"logging-experimental"},"Logging (Experimental)"),(0,o.kt)("p",null,"When debugging or diagnosing an LLM-based system, it is often convenient to log the API calls and analyze them. ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.ChatCompletion")," offer an easy way to collect the API call histories. For example, to log the chat histories, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.start_logging()\n")),(0,o.kt)("p",null,"The API calls made after this will be automatically logged. They can be retrieved at any time by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.logged_history\n")),(0,o.kt)("p",null,"To stop logging, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.stop_logging()\n")),(0,o.kt)("p",null,"If one would like to append the history to an existing dict, pass the dict like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"autogen.ChatCompletion.start_logging(history_dict=existing_history_dict)\n")),(0,o.kt)("p",null,"By default, the counter of API calls will be reset at ",(0,o.kt)("inlineCode",{parentName:"p"},"start_logging()"),". If no reset is desired, set ",(0,o.kt)("inlineCode",{parentName:"p"},"reset_counter=False"),"."),(0,o.kt)("p",null,"There are two types of logging formats: compact logging and individual API call logging. The default format is compact.\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"compact=False")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"start_logging()")," to switch."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of a history dict with compact logging.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{\n    \"\"\"\n    [\n        {\n            'role': 'system',\n            'content': system_message,\n        },\n        {\n            'role': 'user',\n            'content': user_message_1,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_1,\n        },\n        {\n            'role': 'user',\n            'content': user_message_2,\n        },\n        {\n            'role': 'assistant',\n            'content': assistant_message_2,\n        },\n    ]\"\"\": {\n        \"created_at\": [0, 1],\n        \"cost\": [0.1, 0.2],\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Example of a history dict with individual API call logging.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{\n    0: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                }\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n    1: {\n        "request": {\n            "messages": [\n                {\n                    "role": "system",\n                    "content": system_message,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_1,\n                },\n                {\n                    "role": "assistant",\n                    "content": assistant_message_1,\n                },\n                {\n                    "role": "user",\n                    "content": user_message_2,\n                },\n            ],\n            ... # other parameters in the request\n        },\n        "response": {\n            "choices": [\n                "messages": {\n                    "role": "assistant",\n                    "content": assistant_message_2,\n                },\n            ],\n            ... # other fields in the response\n        }\n    },\n}\n')),(0,o.kt)("p",null,"It can be seen that the individual API call history contains redundant information of the conversation. For a long conversation the degree of redundancy is high.\nThe compact history is more efficient and the individual API call history contains more details."))}c.isMDXComponent=!0}}]);