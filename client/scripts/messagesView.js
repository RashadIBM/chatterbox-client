var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // GET all messages
    // Add them to our messages object
    // Run renderMessage on each message
    App.fetch( function (data) {
      var count = 0;
      data.results.forEach(function (o) {
        if (o.text && o.username) {
          Messages[count] = (o);
          count ++;
        }
      });
      for (var msg in Messages) {
        MessagesView.renderMessage(Messages[msg]);
      }
    });
  },

  renderMessage: function (message) {
    // Create a html variable to hold the results of our templating
    // Run the templating function over message and assign to html var
    // Append html to chats id
    var messageHtml = MessageView.render(message);
    MessagesView.$chats.append(messageHtml);
    Listener.friends();
    // $('.username').off('click').on('click', function (event) {
    //   Friends.toggleStatus(event.currentTarget);
    //   $(event.currentTarget).parent().toggleClass('.friend');
    //   $(event.currentTarget).toggleClass('.usernamefriend');
    // });
  }
};

