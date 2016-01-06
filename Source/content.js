walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// Inspired by cloud to butt: https://github.com/panicsteve/cloud-to-butt
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: //Element
		case 9: //Document
		case 11: //Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			if(node.parentElement.tagName.toLowerCase() != "script") {
				replaceText(node);
			}
			break;
	}
}

function replaceText(textNode) 
{
	var v = textNode.nodeValue;
	
	
 /*
	v = v.replace(/\bBless\b/g, "Bless up");
	v = v.replace(/\bbless\b/g, "bless up");
	v = v.replace(/\bAnother\b/g, "Another One");
	v = v.replace(/\banother\b/g, "another one");
	v = v.replace(/\bWe the\b/g, "We the best");
	v = v.replace(/\bwe the\b/g, "we the best");
	v = v.replace(/\bMajor\b/g, "Major Key");
	v = v.replace(/\bmajor\b/g, "major key");
	v = v.replace(/\bDon't\b/g, "Don't play yourself");
	v = v.replace(/\bdon't\b/g, "don't play yourself");
	v = v.replace(/\bThey\b/g, "They don't want you to win");
	v = v.replace(/\bthey\b/g, "they don't want you to win");
	v = v.replace(/\bLion\b/g, "Liooonnnn");
	v = v.replace(/\blion\b/g, "liooonnnn");
	v = v.replace(/\bfan\b/g, "fan luv");
	v = v.replace(/\bFan\b/g, "Fan Luv");
	v = v.replace(/\bcloth\b/g, "cloth talk");
	v = v.replace(/\bCloth\b/g, "Cloth Talk");
	v = v.replace(/\blet's\b/g, "let's see what Chef Dee got for breakfast");
	v = v.replace(/\bLet's\b/g, "Let's see what Chef Dee got for breakfast");
	v = v.replace(/\bLets\b/g, "Lets see what Chef Dee got for breakfast");
	v = v.replace(/\blets\b/g, "lets see what Chef Dee got for breakfast");
	v = v.replace(/\bEgg\b/g, "Egg whites, chicken sausage, water. They don't want you to eat");
	v = v.replace(/\begg\b/g, "egg whites, chicken sausage, water. They don't want you to eat");
	v = v.replace(/\bJewelry\b/g, "Jurly");
	v = v.replace(/\bjewelry\b/g, "jurly");*/
	

	var fake_talk = ["Bless", "bless", 
		"Another", "another", 
		"We the", "we the",
		"Major", "major",
		"Don't", "don't", 
		"They", "they", 
		"Lion", "lion", 
		"Fan", "fan", 
		"Cloth", "cloth", 
		"Let's", "let's", 
		"Egg", "egg", 
		"Jewelry", "jewelry"
	];
	
	var real_talk = ["Bless up", "bless up", 
		"Another One", "another one",
		"We the best", "we the best", 
		"Major Key", "major key", 
		"Don't play yourself", "don't play yourself", 
		"They don't want you to win", "they don't want you to win", 
		"Liooonnnn", "liooonnnn", 
		"Fan Luv", "fan luv", 
		"Cloth Talk", "cloth talk",
		"Let's see what Chef Dee got for breakfast", "let's see what Chef Dee got for breakfast",
		"Egg whites, chicken sausage, water. They don't want you to eat", "egg whites, chicken sausage, water. They don't want you to eat", "Jurly", "jurly"
	];
	
  
	var flag = "#@!~";
	var flag_regex = new RegExp(flag, 'g');
  
	
  ` var i = 0;
  
 
	for (i = 0; i < fake_talk.length; i++) {
		var fake_regex = new RegExp(fake_talk[i], 'g');
		var real_regex = new RegExp(real_talk[i], 'g');
    
    
		v = v.replace(real_regex, flag);
    
    
		v = v.replace(fake_regex, real_talk[i]);
    
		v = v.replace(flag_regex, real_talk[i]);
		
		textNode.nodeValue = v;
    
	}
	
	
	textNode.nodeValue = v;
}