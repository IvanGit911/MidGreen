# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'open-uri'
lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi. Lobortis scelerisque fermentum dui faucibus. A arcu cursus vitae congue mauris. Sed faucibus turpis in eu. Nisl pretium fusce id velit ut tortor pretium. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Sit amet nulla facilisi morbi tempus. Dui faucibus in ornare quam viverra. Nisl nunc mi ipsum faucibus vitae aliquet nec. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Leo duis ut diam quam nulla. In aliquam sem fringilla ut morbi tincidunt augue.
Ut etiam sit amet nisl. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Rhoncus aenean vel elit scelerisque. Fermentum dui faucibus in ornare quam. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eros in cursus turpis massa tincidunt dui ut. Leo vel orci porta non pulvinar. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Adipiscing elit duis tristique sollicitudin. Lobortis feugiat vivamus at augue eget arcu dictum. Faucibus a pellentesque sit amet. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Vivamus arcu felis bibendum ut tristique et egestas quis. Tincidunt ornare massa eget egestas. Id velit ut tortor pretium viverra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Etiam sit amet nisl purus in mollis nunc. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Ligula ullamcorper malesuada proin libero nunc consequat."
demoUser = User.create(username: "Ivan Wang", email: "wang.han.ivan@hotmail.com", password: 'thisisareallygoodpassword');

9.times do 
    User.create(username:Faker::Name.unique.name, email: Faker::Internet.unique.email, password: 'password')
end

category1 = Category.create(title: 'Solar', description: 'Solar energy.');
category2 = Category.create(title: 'Wind', description: 'Wind energy.');
category10 = Category.create(title: 'SDG goals', description: 'SDG goals.');
category3 = Category.create(title: 'Electric cars', description: 'Electric cars');
category4 = Category.create(title: 'Global warming', description: 'Global warming');
category8 = Category.create(title: 'Transportation', description: 'Transportation');
category5 = Category.create(title: 'Air Polution', description: 'Air Polution');
category9 = Category.create(title: 'Water polution', description: 'Water polution');
category7 = Category.create(title: 'LEED', description: 'LEED certificate');
category6 = Category.create(title: 'Aashe', description: 'Aashe');


j = Journal.create!(title: "China’s new solar farms have an adorable design", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-1.jpg")
j.photo.attach(io: file, filename: 'solar-1.jpg')
j = Journal.create!(title: "Scientists Identify a Key Flaw in Solar", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-2.jpg")
j.photo.attach(io: file, filename: 'solar-2.jpg')
j = Journal.create!(title: "Apple the largest US user of solar power, ahead of Amazon", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-3.jpg")
j.photo.attach(io: file, filename: 'solar-3.jpg')

j = Journal.create!(title: "Solar power in Maine - Wikipedia", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-4.jpeg")
j.photo.attach(io: file, filename: 'solar-4.jpeg')
j = Journal.create!(title: "Study: Even short-lived solar panels can be economically viable", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-5.jpg")
j.photo.attach(io: file, filename: 'solar-5.jpg')
j = Journal.create!(title: "8 Solar Energy Facts That May Surprise You | EnergySage", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-6.jpg")
j.photo.attach(io: file, filename: 'solar-6.jpg')
j = Journal.create!(title: "2019 Was a Record Year for U.S. Solar Power", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 1)
file= open("https://midgreen-dev.s3.amazonaws.com/solar/solar-7.jpg")
j.photo.attach(io: file, filename: 'solar-7.jpg')


j = Journal.create!(title: "Wind Tracking and Blade Adjustment", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-1.jpg")
j.photo.attach(io: file, filename: 'wind-1.jpg')
j = Journal.create!(title: "Global wind turbine outlook: Asia Pacific leads power generation", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-2.jpg")
j.photo.attach(io: file, filename: 'wind-2.jpg')
j = Journal.create!(title: "Denmark eyes 10GW offshore wind 'islands' in $45bn plan", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-3.jpg")
j.photo.attach(io: file, filename: 'wind-3.jpg')
j = Journal.create!(title: "Offshore wind still looks to get a foothold", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-4.jpg")
j.photo.attach(io: file, filename: 'wind-4.jpg')
j = Journal.create!(title: "5 Wind Power Facts", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-5.jpg")
j.photo.attach(io: file, filename: 'wind-5.jpg')
j = Journal.create!(title: "Wind Vision", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 2)
file= open("https://midgreen-dev.s3.amazonaws.com/wind/wind-6.jpg")
j.photo.attach(io: file, filename: 'wind-6.jpg')

j = Journal.create!(title: "Envision2030: 17 goals to transform the world", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 3)
file= open("https://midgreen-dev.s3.amazonaws.com/SDG/sdg-1.png")
j.photo.attach(io: file, filename: 'sdg-1.png')
j = Journal.create!(title: "UN SDGs: An Introduction to the UN's 17 Sustainable Development Goals", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 3)
file= open("https://midgreen-dev.s3.amazonaws.com/SDG/sdg-2.png")
j.photo.attach(io: file, filename: 'sdg-2.png')
j = Journal.create!(title: "Sustainable Development Goals Action Group", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 3)
file= open("https://midgreen-dev.s3.amazonaws.com/SDG/sdg-3.jpg")
j.photo.attach(io: file, filename: 'sdg-3.jpg')

j = Journal.create!(title: "Sustainable Development Goals adopted", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 3)
file= open("https://midgreen-dev.s3.amazonaws.com/SDG/sdg-4.jpeg")
j.photo.attach(io: file, filename: 'sdg-4.jpeg')
j = Journal.create!(title: "$500,000 Corporate-led Grants and Mentorship for Young People", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 3)
file= open("https://midgreen-dev.s3.amazonaws.com/SDG/sdg-5.jpg")
j.photo.attach(io: file, filename: 'sdg-5.jpg')



j = Journal.create!(title: "Mercedes-Benz Concept EQ A", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 4)
file= open("https://midgreen-dev.s3.amazonaws.com/ecar/ec-1.jpeg")
j.photo.attach(io: file, filename: 'ec-1.jpeg')
j = Journal.create!(title: "BMW Showcases Self-Driving Concept Car", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 4)
file= open("https://midgreen-dev.s3.amazonaws.com/ecar/ec-2.jpg")
j.photo.attach(io: file, filename: 'ec-2.jpg')
j = Journal.create!(title: "BMW i8 electric car", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 4)
file= open("https://midgreen-dev.s3.amazonaws.com/ecar/ec-3.jpg")
j.photo.attach(io: file, filename: 'ec-3.jpg')
j = Journal.create!(title: "This is what future BMW electric cars will sound like", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 4)
file= open("https://midgreen-dev.s3.amazonaws.com/ecar/ec-4.jpg")
j.photo.attach(io: file, filename: 'ec-4.jpg')
j = Journal.create!(title: "Every Tesla car will now include Autopilot", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 4)
file= open("https://midgreen-dev.s3.amazonaws.com/ecar/ec-5.jpg")
j.photo.attach(io: file, filename: 'ec-5.jpg')


j = Journal.create!(title: "Polar Bear And Global Warming", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-1.jpg")
j.photo.attach(io: file, filename: 'gw-1.jpg')
j = Journal.create!(title: "Drought - Global warming", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-2.jpg")
j.photo.attach(io: file, filename: 'gw-2.jpg')
j = Journal.create!(title: "Visualizations – Climate Predictiongw-3", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-3.png")
j.photo.attach(io: file, filename: 'gw-3.png')


j = Journal.create!(title: "Polar Bear Evolution Tracked Climate Change, New DNA Study ...", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-4.jpg")
j.photo.attach(io: file, filename: 'gw-4.jpg')
j = Journal.create!(title: "Exploring Climate Change & Global Warming", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-5.jpg")
j.photo.attach(io: file, filename: 'gw-5.jpg')
j = Journal.create!(title: "Global Warming and Violent Behavior", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 5)
file= open("https://midgreen-dev.s3.amazonaws.com/globalwarming/gw-6.jpg")
j.photo.attach(io: file, filename: 'gw-6.jpg')



j = Journal.create!(title: "How Mexico City plans to fight air pollution", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 6)
file= open("https://midgreen-dev.s3.amazonaws.com/transportation/t-1.jpg")
j.photo.attach(io: file, filename: 't-1.jpg')
j = Journal.create!(title: "Air Pollution: What India can learn from other countries", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 6)
file= open("https://midgreen-dev.s3.amazonaws.com/transportation/t-2.jpg")
j.photo.attach(io: file, filename: 't-2.jpg')
j = Journal.create!(title: "Is air quality a social problem?", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 6)
file= open("https://midgreen-dev.s3.amazonaws.com/transportation/t-3.jpg")
j.photo.attach(io: file, filename: 't-3.jpg')
j = Journal.create!(title: "Who Breathes the Dirtiest Air from Vehicles?", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 6)
file= open("https://midgreen-dev.s3.amazonaws.com/transportation/t-4.jpg")
j.photo.attach(io: file, filename: 't-4.jpg')
j = Journal.create!(title: "What Causes Air Pollution? | NASA Climate Kids", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 6)
file= open("https://midgreen-dev.s3.amazonaws.com/transportation/t-5.png")
j.photo.attach(io: file, filename: 't-5.png')


j = Journal.create!(title: "Air Pollution Worsens Bronchiectasis", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 7)
file= open("https://midgreen-dev.s3.amazonaws.com/air/a-1.jpg")
j.photo.attach(io: file, filename: 'a-1.jpg')
j = Journal.create!(title: "Air pollution's hidden impacts", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 7)
file= open("https://midgreen-dev.s3.amazonaws.com/air/a-2.jpg")
j.photo.attach(io: file, filename: 'a-2.jpg')
j = Journal.create!(title: "Air Pollution Wallpaper", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 7)
file= open("https://midgreen-dev.s3.amazonaws.com/air/a-3.jpg")
j.photo.attach(io: file, filename: 'a-3.jpg')

j = Journal.create!(title: "A New View of Wintertime Air Pollution", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 7)
file= open("https://midgreen-dev.s3.amazonaws.com/air/a-4.jpg")
j.photo.attach(io: file, filename: 'a-4.jpg')




j = Journal.create!(title: "6 Types of Water Pollution", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 8)
file= open("https://midgreen-dev.s3.amazonaws.com/water/w-1.jpg")
j.photo.attach(io: file, filename: 'w-1.jpg')
j = Journal.create!(title: "Water and Air Pollution - HISTORY", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 8)
file= open("https://midgreen-dev.s3.amazonaws.com/water/w-2.jpg")
j.photo.attach(io: file, filename: 'w-2.jpg')
j = Journal.create!(title: "The biggest Water Pollution guide", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 8)
file= open("https://midgreen-dev.s3.amazonaws.com/water/w-3.png")
j.photo.attach(io: file, filename: 'w-3.png')
j = Journal.create!(title: "Top 4 Consequences of Water Pollution: Can We Eliminate the Causes?", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 8)
file= open("https://midgreen-dev.s3.amazonaws.com/water/w-4.jpg")
j.photo.attach(io: file, filename: 'w-4.jpg')


j = Journal.create!(title: "How LEED Certified Buildings are Focused on ...", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 9)
file= open("https://midgreen-dev.s3.amazonaws.com/leed/l-1.jpg")
j.photo.attach(io: file, filename: 'l-1.jpg')
j = Journal.create!(title: "LEED-Certified Buildings Keep Sustainability at Forefront", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 9)
file= open("https://midgreen-dev.s3.amazonaws.com/leed/l-2.jpg")
j.photo.attach(io: file, filename: 'l-2.jpg')
j = Journal.create!(title: "Leed Certified", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 9)
file= open("https://midgreen-dev.s3.amazonaws.com/leed/l-3.png")
j.photo.attach(io: file, filename: 'l-3.png')


j = Journal.create!(title: "AASHE", subtitle: Faker::Lorem.paragraph, body: lorem, author_id: rand(1...10), category_id: 10)
file= open("https://midgreen-dev.s3.amazonaws.com/aashe/1.png")
j.photo.attach(io: file, filename: '1.jpg')
j = Journal.create!(title: "We love the Earth, it is our planet", subtitle: "Lil Dicky's 'Earth' Video Is Band Aid For The Internet", body: lorem, author_id: rand(1...10), category_id: 10)
file= open("https://midgreen-dev.s3.amazonaws.com/aashe/2.jpg")
j.photo.attach(io: file, filename: '2.jpg')


# (1...15).each do |i|
#     c1 = Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: i, parent_comment_id: nil)
#     c2 = Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: i, parent_comment_id: nil)
#     c3 =Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: i, parent_comment_id: c1.id)
#     c4 = Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: i, parent_comment_id: c3.id)
#     Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: i, parent_comment_id: c4.id)
# end


25.times do 
    j_id = rand(1...Journal.all.length)
    c1 = Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: j_id, parent_comment_id: nil)
    Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: j_id, parent_comment_id: nil)
    c3 =Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: j_id, parent_comment_id: c1.id)
    c4 = Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: j_id, parent_comment_id: c3.id)
    Comment.create(body: Faker::Books::Dune.saying, author_id: rand(1...10), journal_id: j_id, parent_comment_id: c4.id)
end