function unhide(superadunit){var item=document.getElementById(superadunit);if(item){item.className=(item.className=="unhidden")?"hidden":"unhidden";document.body.scroll="yes";document.documentElement.style.overflow="auto"}if($(item).attr("id")=="superadunit"){$(item).remove()}}document.documentElement.style.overflow="hidden";