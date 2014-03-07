var catdetail = '<div class="grid-col-150 cat-detail">'
+    '<h3 class="cat-title">'
+       '{{each mainTitle}}'
+            '{{each $value}}'
+               '<a href={{$value}} target="blank">{{$index}}</a>'
+            '{{/each}}'
+            '{{if $index!="end"}}'
+                '/'
+            '{{/if}}'
+       '{{/each}}'
+    '</h3>'
+    '<ul class="cat-label-list cat-title-list clearfix">'
+       '{{each titles}}'
+       '<li><a href={{$value}} target="blank">{{$index}}</a></li>'
+       '{{/each}}'
+     '</ul>'
+     '<i class="cat-pannel-line"></i>'
+     '<div class="cat-brand-slide j_CatBrandSlide">'
+        '<ul class="cat-brand-content clearfix">'
+           '<div>'
+               '{{each brands}}'
+                   '<li>'
+                        '{{each $value}}'
+                            '<a href={{$value["url"]}}><img src={{$value["src"]}} width="90" height="45" alt={{$value["alt"]}} ></a>'
+                        '{{/each}}'
+                   '</li>'
+               '{{/each}}'
+           '</div>'
+        '</ul>'
+     '</div>'
+ '</div>';
catdetail = template.compile('catdetail',catdetail);

var catBanner_1 = '<div class="grid-col-460 cat-banner">'
+ '{{each catBanner}}'
+   '<a class="banner-grid banner-grid-a{{$index+1}}" href={{$value[0]}}><img src={{$value[1]}} alt={{$value[2]}} data-pinit="registered"></a>'
+ '{{/each}}'
+ '</div>';
catBanner_1 = template.compile('catBanner_1',catBanner_1);

var catBanner_4 = '<div class="grid-col-460 cat-banner">'
+ '{{each catBanner}}'
+   '<a class="banner-grid banner-grid-c{{$index+1}}" href={{$value[0]}}><img src={{$value[1]}} alt={{$value[2]}} data-pinit="registered"></a>'
+ '{{/each}}'
+ '</div>';
catBanner_4 = template.compile('catBanner_4',catBanner_4);

var catBanner_3 = '<div class="grid-col-460 cat-banner">'
+ '{{each catBanner}}'
+   '<a class="banner-grid banner-grid-b{{$index+1}}" href={{$value[0]}}><img src={{$value[1]}} alt={{$value[2]}} data-pinit="registered"></a>'
+ '{{/each}}'
+ '</div>';
catBanner_3 = template.compile('catBanner_3',catBanner_3);

var catSmallBanner = '<ul class="grid-col-160 cat-small-banner">'
+ '{{each smallBanner}}'
+ '<li>'
+    '<a href={{$value["url"]}}><img src={{$value["src"]}} alt={{$value["alt"]}} data-pinit="registered"></a>'
+ '</li>'
+ '{{/each}}'
+ '</ul>';
catSmallBanner = template.compile('catSmallBanner',catSmallBanner);

var module = '<div class="module">'
+       '<div class="grid-container-800 cat-pannel">'
+           '{{include "catdetail"}}'
+           '{{if catBanner.length==3}}'
+              '{{include "catBanner_3"}}'
+           '{{else if catBanner.length==1}}'
+              '{{include "catBanner_1"}}'
+           '{{else if catBanner.length==4}}'
+              '{{include "catBanner_4"}}'
+           '{{/if}}'
+           '{{include "catSmallBanner"}}'
+       '</div>'
+   '</div>';
module = template.compile('module',module);



