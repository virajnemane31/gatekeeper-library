"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3489],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return a?t.createElement(k,i(i({ref:n},c),{},{components:a})):t.createElement(k,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2049:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const s={id:"verifydeprecatedapi",title:"Verify deprecated APIs"},i="Verify deprecated APIs",l={unversionedId:"verifydeprecatedapi",id:"verifydeprecatedapi",title:"Verify deprecated APIs",description:"Description",source:"@site/docs/verifydeprecatedapi.md",sourceDirName:".",slug:"/verifydeprecatedapi",permalink:"/gatekeeper-library/website/verifydeprecatedapi",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/verifydeprecatedapi.md",tags:[],version:"current",frontMatter:{id:"verifydeprecatedapi",title:"Verify deprecated APIs"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verify-deprecated-apis"},"Verify deprecated APIs"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Verifies deprecated Kubernetes APIs to ensure all the API versions are up to date. This template does not apply to audit as audit looks at the resources which are already present in the cluster with non-deprecated API versions."),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: verifydeprecatedapi\n  annotations:\n    metadata.gatekeeper.sh/title: "Verify deprecated APIs"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: >-\n      Verifies deprecated Kubernetes APIs to ensure all the API versions are up to date. This template does not apply to audit as audit looks at the resources which are already present in the cluster with non-deprecated API versions.\nspec:\n  crd:\n    spec:\n      names:\n        kind: VerifyDeprecatedAPI\n      validation:\n        openAPIV3Schema:\n          type: object\n          properties:\n            kvs:\n              type: array\n              description: Deprecated api versions and corresponding kinds\n              items:\n                type: object\n                properties:\n                  deprecatedAPI:\n                    type: string\n                    description: deprecated api\n                    example: flowcontrol.apiserver.k8s.io/v1beta2\n                  kinds:\n                    type: array\n                    items:\n                      type: string\n                    description: impacted list of kinds\n                    example: \'["FlowSchema", "PriorityLevelConfiguration"]\'\n                  targetAPI:\n                    type: string\n                    description: target api\n                    example: flowcontrol.apiserver.k8s.io/v1beta3\n            k8sVersion:\n              type: number\n              description: kubernetes version\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package verifydeprecatedapi\n\n        violation[{"msg": msg}] {\n          kvs := input.parameters.kvs[_]\n          kvs.deprecatedAPI == input.review.object.apiVersion\n          k := kvs.kinds[_]\n          k == input.review.object.kind\n          msg := get_message(input.review.object.kind, input.review.object.apiVersion, input.parameters.k8sVersion, kvs.targetAPI)\n        }\n\n        get_message(kind, apiVersion, k8sVersion, targetAPI) = msg {\n          not match(targetAPI)\n          msg := sprintf("API %v for %v is deprecated in Kubernetes version %v, please use %v instead", [kind, apiVersion, k8sVersion, targetAPI])\n        }\n\n        get_message(kind, apiVersion, k8sVersion, targetAPI) = msg {\n          match(targetAPI)\n          msg := sprintf("API %v for %v is deprecated in Kubernetes version %v, please see Kubernetes API deprecation guide", [kind, apiVersion, k8sVersion])\n        }\n\n        match(api) {\n          api == "None"\n        }\n\n')),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/template.yaml\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.16"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.16\nspec:\n  match:\n    kinds:\n      - apiGroups: ["apps"]\n        kinds: ["Deployment", "ReplicaSet", "StatefulSet", "DaemonSet"]\n      - apiGroups: ["extensions"]\n        kinds: ["PodSecurityPolicy", "ReplicaSet", "Deployment", "DaemonSet", "NetworkPolicy"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "apps/v1beta1"\n        kinds: ["Deployment", "ReplicaSet", "StatefulSet"]\n        targetAPI: "apps/v1"\n      - deprecatedAPI: "extensions/v1beta1"\n        kinds: ["ReplicaSet", "Deployment", "DaemonSet"]\n        targetAPI: "apps/v1"\n      - deprecatedAPI: "extensions/v1beta1"\n        kinds: ["PodSecurityPolicy"]\n        targetAPI: "policy/v1beta1"\n      - deprecatedAPI: "apps/v1beta2"\n        kinds: ["ReplicaSet", "StatefulSet", "Deployment", "DaemonSet"]\n        targetAPI: "apps/v1"\n      - deprecatedAPI: "extensions/v1beta1"\n        kinds: ["NetworkPolicy"]\n        targetAPI: "networking.k8s.io/v1"\n    k8sVersion: 1.16\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.16/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: allowed-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.16/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1beta1\nkind: Deployment\nmetadata:\n  name: disallowed-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.16/example_disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.22"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.22\nspec:\n  match:\n    kinds:\n      - apiGroups: ["admissionregistration.k8s.io"]\n        kinds: ["MutatingWebhookConfiguration", "ValidatingWebhookConfiguration"]\n      - apiGroups: ["apiextensions.k8s.io"]\n        kinds: ["CustomResourceDefinition"]\n      - apiGroups: [apiregistration.k8s.io"]\n        kinds: ["APIService"]\n      - apiGroups: ["authentication.k8s.io"]\n        kinds: ["TokenReview"]\n      - apiGroups: ["authorization.k8s.io"]\n        kinds: ["SubjectAccessReview"]\n      - apiGroups: ["certificates.k8s.io"]\n        kinds: ["CertificateSigningRequest"]\n      - apiGroups: ["coordination.k8s.io"]\n        kinds: ["Lease"]\n      - apiGroups: ["extensions", "networking.k8s.io"]\n        kinds: ["Ingress"]\n      - apiGroups: ["networking.k8s.io"]\n        kinds: ["IngressClass"]\n      - apiGroups: ["rbac.authorization.k8s.io"]\n        kinds: ["ClusterRole", "ClusterRoleBinding", "Role", "RoleBinding"]\n      - apiGroups: ["scheduling.k8s.io/v1beta1"]\n        kinds: ["PriorityClass"]\n      - apiGroups: ["storage.k8s.io/v1beta1"]\n        kinds: ["CSIDriver", "CSINode", "StorageClass", "VolumeAttachment"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "admissionregistration.k8s.io/v1beta1"\n        kinds: ["MutatingWebhookConfiguration", "ValidatingWebhookConfiguration"]\n        targetAPI: "admissionregistration.k8s.io/v1"\n      - deprecatedAPI: "apiextensions.k8s.io/v1beta1"\n        kinds: ["CustomResourceDefinition"]\n        targetAPI: "apiextensions.k8s.io/v1"\n      - deprecatedAPI: "apiregistration.k8s.io/v1beta1"\n        kinds: ["APIService"]\n        targetAPI: "apiregistration.k8s.io/v1"\n      - deprecatedAPI: "authentication.k8s.io/v1beta1"\n        kinds: ["TokenReview"]\n        targetAPI: "authentication.k8s.io/v1"\n      - deprecatedAPI: "authorization.k8s.io/v1beta1"\n        kinds: ["SubjectAccessReview"]\n        targetAPI: "authorization.k8s.io/v1"\n      - deprecatedAPI: "certificates.k8s.io/v1beta1"\n        kinds: ["CertificateSigningRequest"]\n        targetAPI: "certificates.k8s.io/v1"\n      - deprecatedAPI: "coordination.k8s.io/v1beta1"\n        kinds: ["Lease"]\n        targetAPI: "coordination.k8s.io/v1"\n      - deprecatedAPI: "extensions/v1beta1"\n        kinds: ["Ingress"]\n        targetAPI: "networking.k8s.io/v1"\n      - deprecatedAPI: "networking.k8s.io/v1beta1"\n        kinds: ["Ingress", "IngressClass"]\n        targetAPI: "networking.k8s.io/v1"\n      - deprecatedAPI: "rbac.authorization.k8s.io/v1beta1"\n        kinds: ["ClusterRole", "ClusterRoleBinding", "Role", "RoleBinding"]\n        targetAPI: "rbac.authorization.k8s.io/v1"\n      - deprecatedAPI: "scheduling.k8s.io/v1beta1"\n        kinds: ["PriorityClass"]\n        targetAPI: "scheduling.k8s.io/v1"\n      - deprecatedAPI: "storage.k8s.io/v1beta1"\n        kinds: ["CSIDriver", "CSINode", "StorageClass", "VolumeAttachment"]\n        targetAPI: "storage.k8s.io/v1"\n    k8sVersion: 1.22\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.22/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: allowed-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  ingressClassName: nginx-example\n  rules:\n  - http:\n      paths:\n      - path: /testpath\n        pathType: Prefix\n        backend:\n          service:\n            name: test\n            port:\n              number: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.22/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: disallowed-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  ingressClassName: nginx-example\n  rules:\n  - http:\n      paths:\n      - path: /testpath\n        pathType: Prefix\n        backend:\n          service:\n            name: test\n            port:\n              number: 80\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.22/example_disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.25"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.25\nspec:\n  match:\n    kinds:\n      - apiGroups: ["batch"]\n        kinds: ["CronJob"]\n      - apiGroups: ["discovery.k8s.io"]\n        kinds: ["EndpointSlice"]\n      - apiGroups: ["events.k8s.io"]\n        kinds: ["Event"]\n      - apiGroups: ["autoscaling"]\n        kinds: ["HorizontalPodAutoscaler"]\n      - apiGroups: ["policy"]\n        kinds: ["PodDisruptionBudget", "PodSecurityPolicy"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "batch/v1beta1"\n        kinds: ["CronJob"]\n        targetAPI: "batch/v1"\n      - deprecatedAPI: "discovery.k8s.io/v1beta1"\n        kinds: ["EndpointSlice"]\n        targetAPI: "discovery.k8s.io/v1"\n      - deprecatedAPI: "events.k8s.io/v1beta1"\n        kinds: ["Event"]\n        targetAPI: "events.k8s.io/v1"\n      - deprecatedAPI: "autoscaling/v2beta1"\n        kinds: ["HorizontalPodAutoscaler"]\n        targetAPI: "autoscaling/v2"\n      - deprecatedAPI: "policy/v1beta1"\n        kinds: ["PodDisruptionBudget"]\n        targetAPI: "policy/v1"\n      - deprecatedAPI: "policy/v1beta1"\n        kinds: ["PodSecurityPolicy"]\n        targetAPI: "None"\n      - deprecatedAPI: "node.k8s.io/v1beta1"\n        kinds: ["RuntimeClass"]\n        targetAPI: "node.k8s.io/v1"\n    k8sVersion: 1.25\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.25/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: CronJob\nmetadata:\n  name: allowed-cronjob\n  namespace: default\nspec:\n  schedule: "* * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: hello\n            image: busybox:1.28\n            imagePullPolicy: IfNotPresent\n            command:\n            - /bin/sh\n            - -c\n            - date; echo Hello from the Kubernetes cluster\n          restartPolicy: OnFailure\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.25/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: disallowed-cronjob\n  namespace: default\nspec:\n  schedule: "* * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: hello\n            image: busybox:1.28\n            imagePullPolicy: IfNotPresent\n            command:\n            - /bin/sh\n            - -c\n            - date; echo Hello from the Kubernetes cluster\n          restartPolicy: OnFailure\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.25/example_disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.26"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.26\nspec:\n  match:\n    kinds:\n      - apiGroups: ["flowcontrol.apiserver.k8s.io"]\n        kinds: ["FlowSchema", "PriorityLevelConfiguration"]\n      - apiGroups: ["autoscaling"]\n        kinds: ["HorizontalPodAutoscaler"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "flowcontrol.apiserver.k8s.io/v1beta1"\n        kinds: ["FlowSchema", "PriorityLevelConfiguration"]\n        targetAPI: "flowcontrol.apiserver.k8s.io/v1beta3"\n      - deprecatedAPI: "autoscaling/v2beta2"\n        kinds: ["HorizontalPodAutoscaler"]\n        targetAPI: "autoscaling/v2"\n    k8sVersion: 1.26\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.26/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flowcontrol.apiserver.k8s.io/v1beta3\nkind: FlowSchema\nmetadata:\n  name: allowed-flowcontrol\n  namespace: default\nspec:\n  matchingPrecedence: 1000\n  priorityLevelConfiguration:\n    name: exempt\n  rules:\n    - nonResourceRules:\n      - nonResourceURLs:\n          - "/healthz"\n          - "/livez"\n          - "/readyz"\n        verbs:\n          - "*"\n      subjects:\n        - kind: Group\n          group:\n            name: "system:unauthenticated"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.26/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flowcontrol.apiserver.k8s.io/v1beta1\nkind: FlowSchema\nmetadata:\n  name: disallowed-flowcontrol\n  namespace: default\nspec:\n  matchingPrecedence: 1000\n  priorityLevelConfiguration:\n    name: exempt\n  rules:\n    - nonResourceRules:\n      - nonResourceURLs:\n          - "/healthz"\n          - "/livez"\n          - "/readyz"\n        verbs:\n          - "*"\n      subjects:\n        - kind: Group\n          group:\n            name: "system:unauthenticated"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.26/example_disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.27"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.27\nspec:\n  match:\n    kinds:\n      - apiGroups: ["storage.k8s.io"]\n        kinds: ["CSIStorageCapacity"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "storage.k8s.io/v1beta1"\n        kinds: ["CSIStorageCapacity"]\n        targetAPI: "storage.k8s.io/v1"\n    k8sVersion: 1.27\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.27/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: storage.k8s.io/v1\nkind: CSIStorageCapacity\nmetadata:\n  name: allowed-csistoragecapacity\nstorageClassName: standard\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.27/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: storage.k8s.io/v1beta1\nkind: CSIStorageCapacity\nmetadata:\n  name: allowed-csistoragecapacity\n  namespace: default\nstorageClassName: standard\n\n")),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.27/example_disallowed.yaml\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"verifydeprecatedapi-1.29"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: VerifyDeprecatedAPI\nmetadata:\n  name: verify-1.29\nspec:\n  match:\n    kinds:\n      - apiGroups: ["flowcontrol.apiserver.k8s.io"]\n        kinds: ["FlowSchema", "PriorityLevelConfiguration"]\n  parameters:\n    kvs: \n      - deprecatedAPI: "flowcontrol.apiserver.k8s.io/v1beta2"\n        kinds: ["FlowSchema", "PriorityLevelConfiguration"]\n        targetAPI: "flowcontrol.apiserver.k8s.io/v1beta3"\n    k8sVersion: 1.29\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.29/constraint.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flowcontrol.apiserver.k8s.io/v1beta3\nkind: FlowSchema\nmetadata:\n  name: allowed-flowcontrol\n  namespace: default\nspec:\n  matchingPrecedence: 1000\n  priorityLevelConfiguration:\n    name: exempt\n  rules:\n    - nonResourceRules:\n      - nonResourceURLs:\n          - "/healthz"\n          - "/livez"\n          - "/readyz"\n        verbs:\n          - "*"\n      subjects:\n        - kind: Group\n          group:\n            name: "system:unauthenticated"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.29/example_allowed.yaml\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flowcontrol.apiserver.k8s.io/v1beta2\nkind: FlowSchema\nmetadata:\n  name: disallowed-flowcontrol\n  namespace: default\nspec:\n  matchingPrecedence: 1000\n  priorityLevelConfiguration:\n    name: exempt\n  rules:\n    - nonResourceRules:\n      - nonResourceURLs:\n          - "/healthz"\n          - "/livez"\n          - "/readyz"\n        verbs:\n          - "*"\n      subjects:\n        - kind: Group\n          group:\n            name: "system:unauthenticated"\n\n')),(0,r.kt)("p",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/verifydeprecatedapi/samples/verify-1.29/example_disallowed.yaml\n"))))))}d.isMDXComponent=!0}}]);