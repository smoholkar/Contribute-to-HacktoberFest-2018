

/* 
struct Node 
{ 
  int data; 
  struct Node *next; 
  struct Node *prev;     
}; 
*/ 

void reverse(struct Node **head) { 
     struct Node *temp = NULL;   
     struct Node *current = *head; 
       
     while (current !=  NULL) { 
       temp = current->prev; 
       current->prev = current->next; 
       current->next = temp;               
       current = current->prev; 
     }       
       
     if(temp != NULL ) 
        *head = temp->prev; 
}      
  