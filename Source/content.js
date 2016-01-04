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
			replaceText(node);
			break;
	}
}

function replaceText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bBless\b/g, "Bless up");
	v = v.replace(/\bbless\b/g, "bless up");
	v = v.replace(/\bAnother\b/g, "Another One");
	v = v.replace(/\banother\b/g, "another one");
	v = v.replace(/\bWe the\b/g, "We the best");
	v = v.replace(/\bwe the\b/g, "we the best");
	v = v.replace(/\bMajor\b/g, "Major Key");
	v = v.replace(/\bmajor\b/g, "major key");
	v = v.replace(/\bThey\b/g, "They don't want you to win");
	v = v.replace(/\bthey\b/g, "they don't want you to win");
	v = v.replace(/\bLion\b/g, "Liooonnnn");
	v = v.replace(/\blion\b/g, "liooonnnn");
	v = v.replace(/\bfan\b/g, "fan luv");
	v = v.replace(/\bFan\b/g, "Fan Luv");
	v = v.replace(/\bDon't\b/g, "Don't play yourself");
	v = v.replace(/\bdon't\b/g, "don't play yourself");
	v = v.replace(/\bcloth\b/g, "cloth talk");
	v = v.replace(/\bCloth\b/g, "Cloth Talk");
	v = v.replace(/\blet's\b/g, "let's see what Chef Dee got for breakfast");
	v = v.replace(/\bLet's\b/g, "Let's see what Chef Dee got for breakfast");
	v = v.replace(/\bLets\b/g, "Lets see what Chef Dee got for breakfast");
	v = v.replace(/\blets\b/g, "lets see what Chef Dee got for breakfast");
	v = v.replace(/\bEgg\b/g, "Egg whites, chicken sausage, water. They don't want you to eat");
	v = v.replace(/\begg\b/g, "egg whites, chicken sausage, water. They don't want you to eat");
	
	textNode.nodeValue = v;
}