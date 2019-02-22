module Types
  class QueryType < Types::BaseObject
    field :all_books, [BookType], null: true do
      description "Returns a list of all Books"
	  end
	
    field :book, BookType, null: true do
      description "Returns book given an ID"
      argument :id, ID, required: true
    end

    def all_books
      Book.all
    end

    def book(id:)
      Book.find_by(id: id)
    end	
  end
end
