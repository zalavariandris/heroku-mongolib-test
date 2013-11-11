if (Meteor.isClient) {
  collection = new Meteor.Collection(null);
  
  collection.insert( {name: 'elem1'} );
  collection.insert( {name: 'elem2'} );
  collection.insert( {name: 'elem3'} );


  Template.body.collection = function() {
    return collection.find( {} );
  };
  
  Template.TableView.events({
    'click [name=remove]': function(event, template) {
      var cursor = template.data;
      cursor.collection.remove( this );
    },
    'click [name=add]': function(event, template) {
      var cursor = template.data;
      cursor.collection.insert( {name: '-name-'} );
    }
  });
}