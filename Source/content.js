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
	
	textNode.nodeValue = v;
}