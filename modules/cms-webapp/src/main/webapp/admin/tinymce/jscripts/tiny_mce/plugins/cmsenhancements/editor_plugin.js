(function(){tinymce.create("tinymce.plugins.CMSEnhancements",{init:function(a,b){var c=this;a.onBeforeSetContent.add(function(d,e){c._padEmptyElementsBeforeContentIsSet(e)});a.onGetContent.add(function(d,e){c._padEmptyElementsOnGetContent(e)});a.onBeforeGetContent.add(function(d,e){c._cleanPreTag(d)});a.onPostRender.add(function(f,d){var h=f.id;var j=document.getElementById(h+"_path_row");var g=j.parentNode;j.style.padding="3px 0 0 0";g.style.height="26px";var i="";if(f.settings.accessToHtmlSource){i+='<a class="mceButton mceButtonEnabled cms_code" title="'+f.getLang("advanced.code_desc")+'" onclick="javascript:tinyMCE.get(\''+h+'\').execCommand(\'mceCodeEditor\',false); return false;" onmousedown="return false;" href="javascript:;" style="float:left"><span class="mceIcon cms_code"></span></a>'}i+='<a class="mceButton mceButtonEnabled mce_fullscreen" title="'+f.getLang("fullscreen.desc")+'" onclick="javascript:tinyMCE.get(\''+h+'\').execCommand(\'mceFullScreen\',false); return false;" href="javascript:;" style="float:left"><span class="mceIcon mce_fullscreen"></span></a><span class="mceSeparator" style="float:left"></span>';var e=document.createElement("div");e.id=h+"_cms_button_wrapper";e.style.cssFloat="left";e.innerHTML=i;g.insertBefore(e,j)});if(tinymce.isIE){a.onKeyDown.add(function(d,h){var f=d.selection;var g=f.getNode().nodeName=="PRE"&&h.keyCode==13;if(g){f.setContent('<br id="__" />&nbsp;',{format:"raw"});var i=d.dom.get("__");i.removeAttribute("id");f.select(i);f.collapse();return tinymce.dom.Event.cancel(h)}})}if(a&&a.plugins.cmscontextmenu&&(a.controlManager.get("table")||a.controlManager.get("tablecontrols"))){a.plugins.cmscontextmenu.onContextMenu.add(function(g,d,i){var j,h=a.selection,f=h.getNode()||a.getBody();if(a.dom.getParent(i,"td")||a.dom.getParent(i,"th")){d.removeAll();if(f.nodeName=="A"&&!a.dom.getAttrib(f,"name")&&a.controlManager.get("cmslink")){d.add({title:"advanced.link_desc",icon:"link",cmd:"cmslink",ui:true});d.add({title:"advanced.unlink_desc",icon:"unlink",cmd:"UnLink"});d.addSeparator()}if(f.nodeName=="IMG"&&f.className.indexOf("mceItem")==-1){d.add({title:"advanced.image_desc",icon:"image",cmd:a.plugins.advimage?"mceAdvImage":"mceImage",ui:true});d.addSeparator()}d.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",ui:true,value:{action:"insert"}});d.add({title:"table.props_desc",icon:"table_props",cmd:"mceInsertTable",ui:true});d.add({title:"table.del",icon:"delete_table",cmd:"mceTableDelete",ui:true});d.addSeparator();j=d.addMenu({title:"table.cell"});j.add({title:"table.cell_desc",icon:"cell_props",cmd:"mceTableCellProps",ui:true});j.add({title:"table.split_cells_desc",icon:"split_cells",cmd:"mceTableSplitCells",ui:true});j.add({title:"table.merge_cells_desc",icon:"merge_cells",cmd:"mceTableMergeCells",ui:true});j=d.addMenu({title:"table.row"});j.add({title:"table.row_desc",icon:"row_props",cmd:"mceTableRowProps",ui:true});j.add({title:"table.row_before_desc",icon:"row_before",cmd:"mceTableInsertRowBefore"});j.add({title:"table.row_after_desc",icon:"row_after",cmd:"mceTableInsertRowAfter"});j.add({title:"table.delete_row_desc",icon:"delete_row",cmd:"mceTableDeleteRow"});j.addSeparator();j.add({title:"table.cut_row_desc",icon:"cut",cmd:"mceTableCutRow"});j.add({title:"table.copy_row_desc",icon:"copy",cmd:"mceTableCopyRow"});j.add({title:"table.paste_row_before_desc",icon:"paste",cmd:"mceTablePasteRowBefore"});j.add({title:"table.paste_row_after_desc",icon:"paste",cmd:"mceTablePasteRowAfter"});j=d.addMenu({title:"table.col"});j.add({title:"table.col_before_desc",icon:"col_before",cmd:"mceTableInsertColBefore"});j.add({title:"table.col_after_desc",icon:"col_after",cmd:"mceTableInsertColAfter"});j.add({title:"table.delete_col_desc",icon:"delete_col",cmd:"mceTableDeleteCol"})}else{d.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",ui:true})}})}},getInfo:function(){return{longname:"CMS Code Enhancements",author:"tan@enonic.com",authorurl:"http://www.enonic.com",infourl:"http://www.enonic.com",version:"1.0"}},_padEmptyElementsBeforeContentIsSet:function(a){a.content=a.content.replace(/<td\/>/g,"<td>&nbsp;</td>");a.content=a.content.replace(/<textarea\s+(.+)\/>/g,"<textarea $1></textarea>");a.content=a.content.replace(/<label\s+(.+)\/>/g,"<label $1></label>");a.content=a.content.replace(/<img\s+(.+)\/>/g,'<img $1 _moz_dirty="" />');a.content=a.content.replace(/<embed(.+\n).+\/>/g,"<embed$1>.</embed>")},_padEmptyElementsOnGetContent:function(a){a.content=a.content.replace(/<iframe(.+?)>(|\s+)<\/iframe>/g,"<iframe$1>cms_content</iframe>");a.content=a.content.replace(/<td><\/td>/g,"<td>&nbsp;</td>");a.content=a.content.replace(/<th><\/th>/g,"<th>&nbsp;</th>")},_cleanPreTag:function(f){if(tinymce.isIE){var b=f.getDoc().getElementsByTagName("pre");var d=b.length;for(var h=0;h<d;h++){var c=b[h];var j=c.innerHTML.split("&nbsp;");c.innerHTML=j.join("")}}var k=f.dom.select("pre br");for(var e=0;e<k.length;e++){var g;if(tinymce.isIE){g="\r\n"}else{g="\n"}var a=f.getDoc().createTextNode(g);f.dom.insertAfter(a,k[e]);f.dom.remove(k[e])}}});tinymce.PluginManager.add("cmsenhancements",tinymce.plugins.CMSEnhancements)})();