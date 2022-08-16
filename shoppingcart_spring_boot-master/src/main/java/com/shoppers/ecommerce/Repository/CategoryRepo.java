package com.shoppers.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shoppers.ecommerce.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
