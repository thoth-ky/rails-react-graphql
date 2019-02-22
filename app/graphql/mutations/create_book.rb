module Mutations
  class CreateBook < GraphQL::Schema::RelayClassicMutation
    # define return fields (once book is created what can be returned)
    field :book, Types::BookType, null: false

    # define arguments required to create a book
    # you can define a a new Type for inputs so you replace  thr following
    # lines by something like this:
    # argument :bookDetails, Types::BookInputType, required: true
    argument :title, String, required: true
    argument :author, String, required: true
    argument :review, String, required: true
    argument :reviewer, String, required: true

    # define resolve method
    def resolve(args)
      begin
        book = Book.create(
          title: args[:title],
          author: args[:author],
          review: args[:review],
          reviewer: args[:reviewer]
        )
        { book: book }
      rescue ActiveRecord::RecordInvalid => invalid
        GraphQL::ExecutionError.new(
          {
            errors: invalid.record.errors.full_messages
          }.to_json
        )  
      end
    end
  end
end
