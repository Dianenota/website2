__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={copy:r(d[0]).default,delete:r(d[1]).default,directShare:r(d[2]).default,embed:r(d[3]).default,options:r(d[4]).default,report:r(d[5]).default,share:r(d[6]).default,tagged:r(d[7]).default,unfollow:r(d[8]).default};var o=r(d[10]).withRouter(function({location:o,onClose:l,openModal:u,postId:n}){const f=t[u];return a(d[9]).createElement(f,{location:o,onClose:l,postId:n})});e.default=o},12976128,[12976129,12976130,12976131,12976133,12976134,12976145,12976146,12976147,12976148,3,6]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const n=r(d[0]).usePost(t,r(d[1]).getCopyUrl);return a(d[2]).createElement(i(d[3]),{onClose:o,postUrl:n})}},12976129,[20054732,20054731,3,20054926]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3563);e.default=function({location:o,onClose:l,postId:n}){const s=r(d[1]).useDispatch(),c=r(d[1]).useSelector(t=>r(d[2]).getViewer(t));return a(d[9]).createElement(r(d[10]).Dialog,{body:r(d[0])(3409),title:t},a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{let t;if(null!=o&&r(d[3]).isDesktop()&&i(d[4])._("160","1")){var u;o.pathname!==r(d[5]).FEED_PATH&&(t=o.pathname),(null===(u=t)||void 0===u?void 0:u.startsWith('/p/'))&&(t=r(d[6]).buildUserLink(i(d[7])(null===c||void 0===c?void 0:c.username)))}s(r(d[8]).deletePost(n,t)),l()}},r(d[11]).DELETE_TEXT),a(d[9]).createElement(r(d[10]).DialogItem,{onClick:l},r(d[11]).CANCEL_TEXT))},e.DELETE_POST_PROMPT=t},12976130,[20250684,5,20250964,20250631,20250777,20250840,20250883,20316188,10354761,3,20316204,20250977]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({onClose:t,postId:s}){const n=r(d[1]).useDispatch(),o=i(d[2])(),l=r(d[3]).usePost(s,r(d[4]).getPostType),c='DirectShareSheet';r(d[5]).useEffect(()=>{r(d[6]).startFunnel(),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_BUTTON_CLICK),i(d[7])._("280")||r(d[8]).logAction_DEPRECATED('shareClick',{source:o,type:l}),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_SHARE_SHEET),n(r(d[9]).loadPostShareIds(s))},[o,n,s,l]);const _=()=>{r(d[6]).endFunnel(),t()},u=r(d[13]).getMqttInstance()&&r(d[14]).hasDirect(),E=!0===i(d[11])._("164","2");return u&&null!=s&&s.length>0&&a(d[5]).createElement(r(d[15]).Modal,{dangerouslySetClassName:{__className:E?"-gEQ-":""},fixedHeight:!0!==E,onClose:_,size:"large"},a(d[5]).createElement(i(d[16]),{backAction:_,forwardAction:(t,l)=>{_();const u=o;i(d[10]).logDirectEvent(c,'share_sheet_send',{referral:u}),null!=l&&''!==l&&!0===i(d[11])._("164","2")?n(r(d[12]).sendPostToUsers(String(s),t,l)):n(r(d[12]).sendPostToUsers(String(s),t))},forwardText:r(d[17]).SEND_BUTTON_STRING,includeGroup:!0,isModal:!0,isShareSheet:!0,pageId:c,title:r(d[17]).SHARE_TITLE}))}},12976131,[12976132,5,10354708,20054732,20054733,3,20054925,20250681,20250716,10354761,20250723,20250777,20251230,20251235,20250776,20316204,10354957,20251180]);
__d(function() {},12976132,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var s=function({onClose:s,postId:o}){const t=i(d[0])(),n=r(d[1]).usePost(o,s=>s.code)||'',u=r(d[1]).usePost(o,r(d[2]).isClipsPost),l=r(d[1]).usePost(o,r(d[2]).isIGTVPost),P=r(d[1]).usePost(o,s=>!!s.isVideo),c=r(d[1]).usePost(o,s=>{var o;return i(d[3])(null===(o=s.owner)||void 0===o?void 0:o.id)});return a(d[4]).createElement(i(d[5]),{analyticsContext:t,code:n,id:o,isClipsPost:u,isGuide:!1,isIGTVPost:l,isVideo:P,onClose:s,ownerId:c})};e.default=s},12976133,[10354708,20054732,20250868,20316188,3,20054907]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){return a(d[0]).createElement(r(d[1]).Dialog,{onModalClose:t},a(d[0]).createElement(i(d[2]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[3]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[4]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[5]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[6]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[7]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[8]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[9]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[10]),{onClose:t,postId:o}),a(d[0]).createElement(r(d[1]).DialogItem,{onClick:t},r(d[11]).CANCEL_TEXT))}},12976134,[3,20316204,12976135,12976137,12976138,12976139,12976140,12976141,12976142,12976143,12976144,20250977]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const s=r(d[0]).usePost(o,r(d[1]).getPostOwnedByViewer),l=r(d[0]).usePost(o,r(d[2]).getPostType),u=i(d[3])(),c=r(d[0]).usePost(o,r(d[4]).isIGTVPost),n=r(d[5]).useSetPostModal();let P=r(d[6]).isMobile()||c;return r(d[6]).isDesktop()&&!0===i(d[7])._("160","1")&&(P=!0),s&&P?a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[8]).logAction_DEPRECATED('delete_post_click',{source:u,type:l}),n('delete')}},r(d[11])(2500)):null}},12976135,[20054732,12976136,20054733,10354708,20250868,20054728,20250631,20250777,20250716,3,20316204,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostOwnedByViewer=function(t){var n;return(null===(n=t.owner)||void 0===n?void 0:n.id)===r(d[0]).getViewerId()}},12976136,[20250629]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(446);e.default=function({onClose:t,postId:n}){const s=r(d[1]).usePost(n,r(d[2]).getPostOwnedByViewer),c=r(d[3]).useSetPostModal();return s?null:a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[4]).isUserLoggedIn()?c('report'):r(d[5]).redirect(r(d[6]).buildLoginLink(window.location.href,{source:'logged_out_post_report_redirect'}))}},o)}},12976137,[20250684,20054732,12976136,20054728,20250718,20251001,20250883,3,20316204]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return u[n]}function t(n,t){const o=l[n];return r(d[2]).buildLegalReportLink(o,t)}function o(){const n=r(d[3]).getCountryCode();return i(d[4])._("261")?'DE'!==n&&'AT'!==n?null:n:null}Object.defineProperty(e,'__esModule',{value:!0});const u={DE:r(d[0])(781),AT:r(d[0])(3552)},l={DE:r(d[1]).NETZDG_REPORT_CONTACT_FORM_PATH,AT:r(d[1]).CPA_REPORT_CONTACT_FORM_PATH};e.default=function({onClose:u,postId:l}){const c=o();if(r(d[5]).isUserLoggedIn()||null==c)return null;const s=t(c,l),_=n(c);return a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[6]).redirect(s)}},_)}},12976138,[20250684,20250840,20250883,20250629,20250681,20250718,20251001,3,20316204]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,t){const n=r(d[1]).getPostById(o,t),{owner:l}=n;if(!l)return!1;const u=r(d[2]).getRelationship(o.relationships,l.id);return r(d[2]).followedByViewer(u)}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1879);e.default=function({postId:n,onClose:l}){const u=r(d[3]).useSelector(t=>o(t,n)),s=r(d[4]).useSetPostModal(),c=r(d[5]).usePost(n,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id}),f=i(d[6])();return u?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logConnectionAction({eventName:'unfollow_button_tapped',containerModule:f,targetId:c}),s('unfollow')}},t):null}},12976139,[20250684,10354771,20250782,5,20054728,20054732,10354708,20251238,3,20316204]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const n=r(d[0]).useSelector(r(d[1]).selectPageIdentifier),l=r(d[2]).usePost(o,t=>{var o;return!!(null===(o=t.code)||void 0===o?void 0:o.length)})&&n!==i(d[3]).postPage,s=r(d[2]).usePost(o,r(d[4]).getShareURL);return l?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{i(d[5]).push(s)}},r(d[8])(867)):null}},12976140,[5,20251007,20054732,20250837,20054731,20251001,3,20316204,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:l}){const n=r(d[0]).usePost(l,t=>t.usertags),o=null!=n&&n.length>0,s=r(d[1]).useSetPostModal();return o&&i(d[2])._("248")?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>{s('tagged')}},r(d[5])(3339)):null}},12976141,[20054732,20054728,20250681,3,20316204,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const o=r(d[0]).usePostAndOwner(n,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal();return o?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>s('share')},r(d[5])(1056)):null}},12976142,[20054732,20054731,20054728,3,20316204,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3198),o=r(d[0])(2749);e.default=function({onClose:s,postId:n}){const c=r(d[1]).usePostAndOwner(n,r(d[2]).getIsShareable),u=r(d[3]).useSetPostModal(),l=i(d[4])(),p=i(d[5])(),P=r(d[1]).usePost(n,r(d[6]).getPostType),y=r(d[1]).usePost(n,r(d[2]).getCopyUrl);return c?a(d[9]).createElement(r(d[10]).DialogItem,{onClick:()=>{if(!r(d[7]).canCopy())return void u('copy');const o=r(d[7]).copy(y);r(d[8]).logAction_DEPRECATED('postLinkCopy',{source:p,type:P}),o?(l({text:t}),s()):u('copy')}},o):null},e.LINK_COPIED_PROMPT=t,e.COPY_LINK_TEXT=o},12976143,[20250684,20054732,20054731,20054728,20054607,10354708,20054733,20251205,20250716,3,20316204]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:o,onClose:t}){const n=r(d[0]).usePostAndOwner(o,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal(),l=i(d[3])(),u=r(d[0]).usePost(o,r(d[4]).getPostType),c=r(d[0]).usePost(o,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id});return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).logAction_DEPRECATED('embedCodeClick',{mediaId:o,ownerId:c,source:l,type:u}),s('embed')}},r(d[8])(900)):null}},12976144,[20054732,20054731,20054728,10354708,20054733,20250716,3,20316204,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:n,postId:o}){const t=r(d[0]).usePostAndOwner(o,(n,o)=>o.id),s=r(d[0]).usePostAndOwner(o,(n,o)=>o.username),u=r(d[0]).usePostAndOwner(o,(n,o)=>o.profilePictureUrl),l=i(d[1])();return a(d[2]).createElement(i(d[3]),{analyticsContext:l,onClose:n,ownerID:t,ownerProfilePicURL:u,ownerUsername:s,postID:o})}},12976145,[20054732,10354708,3,20054903]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const s=r(d[0]).useDispatch(),o=i(d[1])(),u=r(d[2]).usePost(n,r(d[3]).getPostType),l=r(d[2]).usePost(n,t=>{var n;const s=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[4]).getShareDescription(s,u)}),_=r(d[2]).usePostAndOwner(n,r(d[5]).getIsShareable),c=r(d[2]).usePost(n,t=>t.shareIds),E=r(d[2]).usePost(n,r(d[5]).getShareURL);return r(d[6]).useEffect(()=>{r(d[7]).startFunnel(),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_BUTTON_CLICK),i(d[8])._("280")||r(d[9]).logAction_DEPRECATED('shareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_SHARE_SHEET),s(r(d[10]).loadPostShareIds(n))},[o,s,n,u]),a(d[6]).createElement(i(d[11]),{analyticsContext:o,description:l,onClose:()=>{r(d[7]).endFunnel(),t()},onNativeShare:()=>{i(d[8])._("280")||r(d[9]).logAction_DEPRECATED('nativeShareClick',{source:o,type:u}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_NATIVE),t(),r(d[4]).shareWithNative(l,E,'ig_web_button_native_share').then(r(d[7]).endFunnel)},postId:n,postType:u,shareEnabled:_,shareIds:c,url:E,utmSource:"ig_web_button_share_sheet"})}},12976146,[5,10354708,20054732,20054733,20054734,20054731,3,20054925,20250681,20250716,10354761,20054917]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:s}){const o=r(d[0]).usePost(s,t=>i(d[1])(t.usertags));return a(d[2]).createElement(i(d[3]),{mediaId:s,onClose:t,title:r(d[4])(2972),usertags:o})}},12976147,[20054732,20316188,3,20054800,20250684]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=i(d[0])(),s=r(d[1]).usePost(t,t=>{var n;return null===(n=t.owner)||void 0===n?void 0:n.id});return a(d[2]).createElement(i(d[3]),{analyticsContext:o,analyticsExtra:{},onClose:n,userId:s})}},12976148,[10354708,20054732,3,10354721]);