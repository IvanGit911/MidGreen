@journals.each do |journal|
    json.set! journal.id do 
        json.partial! 'journal', journal: journal
    end
end