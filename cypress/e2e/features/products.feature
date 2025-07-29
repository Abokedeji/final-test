Feature: Add Products to cart
    
    Background: 
        Given I am on the home page

    Scenario: User can add products in the Furniture category to cart
        When I click on Furniture category
        And I click on Round Wooden Coffee Table Dan
        And I click on Add to Cart
        And I click on Go to cart button
        Then I should see Round Wooden Coffee Table Dan in the cart
        And the cart icon should show a badge with 1


    Scenario: User can add products in the Decoration category to cart
        When I click on Decoration category
        And I click on Candle Holder Lily
        And I click on Add to Cart
        And I click on Go to cart button
        Then I should see Candle Holder Lily in the cart
        And the cart icon should show a badge with 1

    Scenario: User can add products in the Rugs category to cart
        When I click on Rugs category
        And I click on Chenille Rug Mahdi
        And I click on Add to Cart
        And I click on Go to cart button
        Then I should see Chenille Rug Mahdi in the cart
        And the cart icon should show a badge with 1

