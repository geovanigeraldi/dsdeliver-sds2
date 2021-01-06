package com.geraldi.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.geraldi.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
